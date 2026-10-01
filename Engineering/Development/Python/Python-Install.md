# Python Install

## Prerequisite

```bash
# Install cURL
sudo apt install curl
```

```bash
# Install Wget
sudo apt install wget
```

```bash
# Install OpenSSL
sudo apt install openssl
```

```bash
# Install Clang
sudo apt install clang
```

```bash
# Instal LLVM
sudo apt install llvm
```
* For `--with-lto` flag, mainly used for Clang and ARM?

```bash
sudo apt-get install build-essential gdb lcov pkg-config \
    libbz2-dev libffi-dev libgdbm-dev libgdbm-compat-dev liblzma-dev \
    libncurses5-dev libreadline6-dev libsqlite3-dev libssl-dev \
    lzma lzma-dev tk-dev uuid-dev zlib1g-dev
```

## Configure

### Linux

```bash
PYTHON_VERSION=3.13.0
PYTHON_CONFIGURE_OPTION=(
    # General Option
    --disable-gil
    # C Compiler Option
    # CFLAGS=-"-std=c++11"
    # Linker Option
    LDFLAGS="-Wl,-rpath=/opt/python/${PYTHON_VERSION}/lib/"
    # Install Option
    --prefix="/opt/python/${PYTHON_VERSION}/"
    --with-ensurepip=install
    # Performance Option
    --enable-optimizations
    --with-lto=full
    # Linker Option
    --enable-shared
)
./configure "${PYTHON_CONFIGURE_OPTION[@]}"
```

### macOS ARM64

#### Python 3.11

```shell
PYTHON_VERSION=3.11.16
OPENSSL_PREFIX="$(brew --prefix openssl@3)"
XZ_PREFIX="$(brew --prefix xz)"
TCLTK_PREFIX="$(brew --prefix tcl-tk)"
PYTHON_CONFIGURE_OPTION=(
    # General Option
    # --disable-gil
    # C Compiler Option
    # CFLAGS=-"I`brew --prefix`/include/OpenEXR/ -I`brew --prefix`/include/Imath/ -std=c++11"
    # Linker Option
    # LDFLAGS=-"L`brew --prefix`/lib/"
    # Install Option
    --prefix="/opt/python/${PYTHON_VERSION}/"
    --with-ensurepip=install
    # Performance Option
    --enable-optimizations
    --with-lto
    # Linker Option
    --enable-shared
    # Library Option
    --with-openssl="${OPENSSL_PREFIX}"
    # --with-openssl-rpath=auto # Potential SSL Module Error
    --with-openssl-rpath=no
)
LDFLAGS="-L${OPENSSL_PREFIX}/lib -Wl,-rpath,${OPENSSL_PREFIX}/lib -L${XZ_PREFIX}/lib -L${TCLTK_PREFIX}/lib" \
CPPFLAGS="-I${OPENSSL_PREFIX}/include -I${XZ_PREFIX}/include -I${TCLTK_PREFIX}/include" \
PKG_CONFIG_PATH="${OPENSSL_PREFIX}/lib/pkgconfig:${XZ_PREFIX}/lib/pkgconfig:${TCLTK_PREFIX}/lib/pkgconfig" \
GDBM_CFLAGS="-I$(brew --prefix gdbm)/include" \
GDBM_LIBS="-L$(brew --prefix gdbm)/lib -lgdbm" \
./configure "${PYTHON_CONFIGURE_OPTION[@]}"
```

#### Python 3.13

```shell
brew install pkg-config
```

```bash
PYTHON_VERSION=3.13.0
PYTHON_CONFIGURE_OPTION=(
    # General Option
    # --disable-gil
    # C Compiler Option
    # CFLAGS=-"I`brew --prefix`/include/OpenEXR/ -I`brew --prefix`/include/Imath/ -std=c++11"
    # Linker Option
    # LDFLAGS=-"L`brew --prefix`/lib/"
    # Install Option
    --prefix="/opt/python/${PYTHON_VERSION}/"
    --with-ensurepip=install
    --with-pkg-config=yes
    # Performance Option
    --enable-optimizations
    --with-lto
    # Linker Option
    --enable-shared
    # Library Option
    --with-openssl="$(brew --prefix openssl@3)"
    --with-openssl-rpath=auto # Potential SSL Module Error
)
GDBM_CFLAGS="-I$(brew --prefix gdbm)/include" \
GDBM_LIBS="-L$(brew --prefix gdbm)/lib -lgdbm" \
./configure "${PYTHON_CONFIGURE_OPTION[@]}"
```

#### Python 3.8 through 3.10

```bash
CFLAGS="-I$(brew --prefix gdbm)/include -I$(brew --prefix xz)/include" \
LDFLAGS="-L$(brew --prefix gdbm)/lib -I$(brew --prefix xz)/lib" \
PKG_CONFIG_PATH="$(brew --prefix tcl-tk)/lib/pkgconfig" \
./configure \
    --prefix=/opt/python/3.11.3/ \
    --enable-shared \
    --enable-optimizations \
    --with-ensurepip=install \
    --with-openssl="$(brew --prefix openssl@1.1)" \
    --with-tcltk-libs="$(pkg-config --libs tcl tk)" \
    --with-tcltk-includes="$(pkg-config --cflags tcl tk)"
```

#### Old

```bash
CFLAGS="-I$(brew --prefix gdbm)/include -I$(brew --prefix xz)/include" \
LDFLAGS="-L$(brew --prefix gdbm)/lib -I$(brew --prefix xz)/lib" \
PKG_CONFIG_PATH="$(brew --prefix tcl-tk)/lib/pkgconfig" \
./configure \
    --prefix=/opt/python/3.11.3/ \
    --enable-shared \
    --enable-optimizations \
    --with-ensurepip=install \
    --with-openssl="$(brew --prefix openssl@1.1)" \
    --with-pydebug # Optional

# Universal (Work in Progress)
# CFLAGS="-I$(brew --prefix gdbm)/include -I$(brew --prefix xz)/include" \
# LDFLAGS="-L$(brew --prefix gdbm)/lib -I$(brew --prefix xz)/lib" \
# PKG_CONFIG_PATH="$(brew --prefix tcl-tk)/lib/pkgconfig" \
# ./configure \
#     --prefix=/opt/python/3.11.3/ \
#     --enable-shared \
#     --enable-optimizations \
#     --with-ensurepip=install \
#     --with-pydebug \
#     --enable-universalsdk --with-universal-archs=universal2 \
#     --with-openssl="$(brew --prefix openssl@1.1)"
#     --with-openssl-rpath=auto
```

## Build

### Linux

```bash
make -j "$(nproc)"
#sudo make -j "$(nproc)"
```

```bash
#
sudo make altinstall
```

```bash
#
sudo make install
```

### macOS ARM64

```bash
arch -arm64 make -j"$(sysctl -n hw.logicalcpu)"
```

```bash
arch -arm64 make altinstall
```

```bash
arch -arm64 make install
```

## Reference
* [Setup and Building](https://devguide.python.org/getting-started/setup-building/)
* [Python 3 Installation & Setup Guide](https://realpython.com/installing-python/)
    * [How to Build Python From Source Code](https://realpython.com/installing-python/#how-to-build-python-from-source-code)
* [Configure Python](https://docs.python.org/dev/using/configure.html)
* [Build, Compile and Install Python from Source Code](https://www.build-python-from-source.com/)
* [How to Build Python from Source](https://www.devdungeon.com/content/how-build-python-source)
* [Posit - Install Python From Source](https://docs.posit.co/resources/install-python-source/)
