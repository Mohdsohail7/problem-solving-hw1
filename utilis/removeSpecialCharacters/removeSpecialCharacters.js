function removeSpecialChars(str) {
  if (typeof str !== 'string') {
    return '';
  }
  // Use a regular expression to match anything that is not a letter, number, or space, and replace it with an empty string
  return str.replace(/[^a-zA-Z0-9\s]/g, '');

}
module.exports = removeSpecialChars;