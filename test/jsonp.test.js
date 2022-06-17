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

test('404', () => {
  const obj = {
    name: 'seven',
    gender: 'male'
  };
  const searchParams = new URLSearchParams(obj);
  const queryString = searchParams.toString();

  jsonp(`http://xxx?${queryString}`, {
    name: 'hello',
    success: (info) => {
      // No success
    },
    error: (error) => {
      console.log(error);
      expect(error).toBe('Can\'t get url');
    }
  });
});

test('timeout', () => {
  const obj = {
    name: 'seven',
    gender: 'male',
    delay: 7
  };
  const searchParams = new URLSearchParams(obj);
  const queryString = searchParams.toString();

  jsonp(`http://xxx?${queryString}`, {
    name: 'hello',
    success: (info) => {
      // No success
    },
    error: (error) => {
      expect(error).toBe('timeout');
    }
  });
});
