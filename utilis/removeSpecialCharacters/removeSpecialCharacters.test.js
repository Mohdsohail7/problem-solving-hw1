const removeSpecialChars = require('./removeSpecialCharacters');

test('removes special characters from string', () => {
  expect(removeSpecialChars('Hello@World!')).toBe('HelloWorld');
});

test('removes special characters but keeps spaces', () => {
  expect(removeSpecialChars('User@ name123#')).toBe('User name123');
});

test("'removes all special characters from a string with symbols", () => {
  expect(removeSpecialChars('#$%^&*()')).toBe('');
});

test('returns the same string when no special characters are present', () => {
  expect(removeSpecialChars('Username123')).toBe('Username123');
});

test('handles strings with spaces correctly', () => {
  expect(removeSpecialChars('John Doe')).toBe('John Doe');
});

test('removes special characters from alphanumeric string with dashes and underscores', () => {
  expect(removeSpecialChars('user-name_123')).toBe('username123');
});

test('removes special characters but keeps spaces', () => {
  expect(removeSpecialChars('Spaces   and $pec!al Chars!')).toBe(
    'Spaces   and pecal Chars'
  );
});

test('removes exclamation marks only', () => {
  expect(removeSpecialChars('!!!123ABCxyz!!!')).toBe('123ABCxyz');
});

test('removes special characters from a string with numbers', () => {
  expect(removeSpecialChars('hello@123')).toBe('hello123');
});

test('returns an empty string for an empty input', () => {
  expect(removeSpecialChars('')).toBe('');
});

test('returns empty string for null input', () => {
  expect(removeSpecialChars(null)).toBe('');
});

test('returns empty string for undefined input', () => {
  expect(removeSpecialChars(undefined)).toBe('');
});
