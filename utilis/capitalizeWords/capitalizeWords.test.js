const capitalizeWords = require('./capitalizeWords');

test('capitalizes the first letter of each word', () => {
  expect(capitalizeWords('mohd sohail')).toBe('Mohd Sohail');
});

test('handles multiple spaces between words', () => {
  expect(capitalizeWords('mohd    sohail')).toBe('Mohd    Sohail');
});

test('returns empty string when input is empty', () => {
  expect(capitalizeWords('')).toBe('');
});

test('capitalizes first letter in a single word', () => {
  expect(capitalizeWords('sohail')).toBe('Sohail');
});

test('does not alter already capitalized words', () => {
  expect(capitalizeWords('Mohd Sohail')).toBe('Mohd Sohail');
});
