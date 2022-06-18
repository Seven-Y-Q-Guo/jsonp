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

const jsonp = require("@seven_y_q_guo/jsonp"); // or import jsonp from '@seven_y_q_guo/jsonp';

jsonp('http://jsfiddle.net/echo/jsonp?name=seven', {
  name: 'hello',
  success: (info) => {
    console.log(info); // {name: 'seven'}
  },
  error: (error) => {
    console.log(error);
  }
});

```

## API

### jsonp(url, opts)

- `url` (`String`) url to fetch
- `opts` (`Object`)
  - `success` handle success
  - `error` handle error
  - `param` (`String`) name of the query string parameter to specify
    the callback (defaults to `callback`)
  - `timeout` (`Number`) how long after a timeout error is emitted. `0` or other falsy value to
    disable (defaults to `30000`)
  - `name` (`String`) name of the global callback functions that
    handle jsonp responses
