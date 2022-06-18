let count = 0;

function jsonp(url, { name, success, error, timeout = 3000, param = 'callback', prefix }) {
  const script = document.createElement('script');
  const u = new URL(url);
  const params = new URLSearchParams(u.search);
  const id = name || (prefix || '__jp') + (count++);
  params.set(param, id);
  script.src = u.origin + u.pathname + '?' + params.toString();
  let timer;

  if (timeout) {
    timer = setTimeout(function () {
      cleanup();
      error('timeout');
    }, timeout);
  }

  function cleanup() {
    window[id] = () => {};
    script.remove();
    clearTimeout(timer);
  }

  window[id] = (data) => {
    cleanup();
    success(data);
  };

  script.onerror = () => {
    cleanup();
    error('Can\'t get url');
  }

  document.body.append(script);

  return cleanup;
}

module.exports = jsonp;
