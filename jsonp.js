function jsonp(url, opts) {
  window[opts.name] = opts.success;
  const script = document.createElement('script');
  const u = new URL(url);
  const params = new URLSearchParams(u.search);
  params.set('callback', opts.name);
  script.src = u.origin + u.pathname + '?' + params.toString();

  script.onerror = () => {
    opts.error('Can\'t get url');
  }

  document.body.append(script);
}
