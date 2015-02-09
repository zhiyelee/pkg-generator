# pkg-generator
[![NPM Version](http://img.shields.io/npm/v/pkg-generator.svg?style=flat)](https://www.npmjs.org/package/pkg-generator)
[![NPM Downloads](https://img.shields.io/npm/dm/pkg-generator.svg?style=flat)](https://www.npmjs.org/package/pkg-generator)

Generate  NPM Package

## Installation

> npm install pkg-generator -g

## Usage

```bash
# create a package directory named `mds` in current directory
pkg-generator mds
```
which produces directory as follows,

``` 
✍ tree -a mds
mds
├── .npmignore
├── .travis.yml
├── LICENSE
├── README.md
└── package.json

0 directories, 5 files
``` 
