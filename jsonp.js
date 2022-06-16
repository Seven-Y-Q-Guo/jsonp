function jsonp(url, name, cb) {
  window[name] = cb;
  const script = document.createElement('script');
  const u = new URL(url);
  const params = new URLSearchParams(u.search);
  params.set('callback', name);
  script.src = u.origin + u.pathname + '?' + params.toString();

  document.body.append(script);
}
