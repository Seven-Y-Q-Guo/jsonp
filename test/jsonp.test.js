const jsonp = require('../jsonp');

test('basic jsonp', () => {
  const obj = {
    name: 'seven',
    gender: 'male'
  };
  const searchParams = new URLSearchParams(obj);
  const queryString = searchParams.toString();

  jsonp(`http://jsfiddle.net/echo/jsonp?${queryString}`, {
    name: 'hello',
    success: (info) => {
      expect(info).toEqual(obj);
    },
    error: (error) => {
      console.log(error);
    }
  });
});
