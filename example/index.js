const jsonp = require('../jsonp');

jsonp('http://jsfiddle.net/echo/jsonp?name=seven', {
  name: 'hello',
  success: (info) => {
    console.log(info);
  },
  error: (error) => {
    console.log(error);
  }
});
