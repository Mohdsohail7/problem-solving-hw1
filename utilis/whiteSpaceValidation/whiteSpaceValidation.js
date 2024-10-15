function trimWhitespace(str) {
  if (typeof str !== 'string') {
    return 'Given test is not a string';
  }

  return str.trim();
}
module.exports = trimWhitespace;
