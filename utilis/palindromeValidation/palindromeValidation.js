function isPalindrome(str) {
  if (typeof str !== 'string') {
    return 'Invalid string';
  }

  const removeNonAlphValue = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  return removeNonAlphValue === removeNonAlphValue.split('').reverse().join('');
}
module.exports = isPalindrome;
