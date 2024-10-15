function isValidURL(url) {
  if (typeof url !== 'string') {
    return 'Invalid URL';
  }
  url = url.trim().replace(/^<|>$/g, '');
  return url.startsWith('http://') || url.startsWith('https://');
}
module.exports = isValidURL;
