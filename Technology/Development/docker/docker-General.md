# docker

## General Command

### docker build
* [Documenation](https://docs.docker.com/engine/reference/commandline/build/)

```bash
# Build Docker image from a Dockerfile
# The `-t` and `-f` are optional
docker build . [-t <name>/<tag>] [-f <directory>/Dockerfile]
```

### docker run
* [Documentation](https://docs.docker.com/engine/reference/commandline/run/)

```bash
# Run a command in a new container
docker run -p <host-port>:<container-port> -d <name>/<tag>
```

### docker system

```bash
docker system df
```
