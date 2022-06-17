[![<CircleCI>](https://circleci.com/gh/Seven-Y-Q-Guo/jsonp.svg?style=svg)](https://app.circleci.com/pipelines/github/Seven-Y-Q-Guo/jsonp)

# [build-your-own] JSONP
Inspired from https://github.com/webmodules/jsonp

## Installation
Install via NPM:

```bash
npm i @seven_y_q_guo/jsonp

```

## Usage

```javascript

var jsonp = require("@seven_y_q_guo/jsonp");

jsonp('http://jsfiddle.net/echo/jsonp?name=seven', {
  name: 'hello',
  success: (info) => {
    console.log(info);
  },
  error: (error) => {
    console.log(error);
  }
});

```

## API

### jsonp(url, opts)
