function capitalizeWords(sentence) {
  if (typeof sentence !== 'string') {
    return 'Invalid string';
  }
  return sentence
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}
module.exports = capitalizeWords;
