function extractNumbers(str) {
  if (typeof str !== 'string') {
    return 'Invalid string';
  }

  return str
    .split('')
    .filter((char) => !isNaN(char) && char !== ' ')
    .join('');
}
module.exports = extractNumbers;
