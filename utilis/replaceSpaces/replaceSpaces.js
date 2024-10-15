function replaceSpaces(str) {
  if (typeof str !== 'string') {
    return 'Invalid string';
  }
  return str.split(' ').join('_');
}
module.exports = replaceSpaces;
