# BASH (Bourne Again SHell)

## Table of Content
* [Useful Command](#useful-command)
    * [Get nth Line](#get-nth-line)
    * [Get Multiple Line](#get-multiple-line)
* [Reference](#reference)
    * [General](#general)
    * [Prompt](#prompt)

## Useful Command

### Get nth Line

```bash
# Using head and tail
<command> | head -<end> | tail -<start>

# Using sed
<command> | sed -n '<start>,<end>p
```

### Get Multiple Line

```bash
# Using sed
<command> | sed -n '<start>p,<end>p
```

## Reference

### General


### Prompt

* [Controlling the Prompt](https://www.gnu.org/software/bash/manual/html_node/Controlling-the-Prompt.html)
* [Setup Prompt Statement Variable](https://ss64.com/bash/syntax-prompt.html)
