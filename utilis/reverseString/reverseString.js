function reverseString(str) {
  if (typeof str !== 'string') {
    return 'Invalid string';
  }

  return str.split('').reverse().join('');
}
module.exports = reverseString;
