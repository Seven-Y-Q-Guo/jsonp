function jsonp(url, { name, success, error, timeout = 3000, param = 'callback' }) {
  const script = document.createElement('script');
  const u = new URL(url);
  const params = new URLSearchParams(u.search);
  params.set(param, name);
  script.src = u.origin + u.pathname + '?' + params.toString();
  let timer;

  if (timeout) {
    timer = setTimeout(function () {
      cleanup();
      error('timeout');
    }, timeout);
  }

  function cleanup() {
    window[name] = () => {};
    script.remove();
    clearTimeout(timer);
  }

  window[name] = (data) => {
    cleanup();
    success(data);
  };

  script.onerror = () => {
    cleanup();
    error('Can\'t get url');
  }

  document.body.append(script);

  return cleanup
}

module.exports = jsonp;
