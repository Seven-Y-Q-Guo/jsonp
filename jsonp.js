function jsonp(url, { name, success, error, timeout = 3000 }) {
  const script = document.createElement('script');
  const u = new URL(url);
  const params = new URLSearchParams(u.search);
  params.set('callback', name);
  script.src = u.origin + u.pathname + '?' + params.toString();

  const timer = setTimeout(function () {
    cleanup();
    error('timeout');
  }, timeout);

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
