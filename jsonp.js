function jsonp(url, { name, success, error }) {
  window[name] = success;
  const script = document.createElement('script');
  const u = new URL(url);
  const params = new URLSearchParams(u.search);
  params.set('callback', name);
  script.src = u.origin + u.pathname + '?' + params.toString();

  script.onerror = () => {
    error('Can\'t get url');
  }

  document.body.append(script);
}
