// trimWhitespace.test.js
const trimWhitespace = require('./whiteSpaceValidation.js');

test('trim leading and trailing white space', () => {
  expect(trimWhitespace('   Hello World   ')).toBe('Hello World');
});

test('return empty string if input not a string', () => {
  expect(trimWhitespace(12345)).toBe('Given test is not a string');
});

test('trims tabs and newline along with spaces ', () => {
  expect(trimWhitespace('\t  Trim Me  \n')).toBe('Trim Me');
});

test('return string nospaces', () => {
  expect(trimWhitespace('NoSpaces')).toBe('NoSpaces');
});

test('return empty string for empty input', () => {
  expect(trimWhitespace('')).toBe('');
});

test('return a string for Non-string input (number)', () => {
  expect(trimWhitespace(12345)).toBe('Given test is not a string');
});

test('return a string for Non-string input (null)', () => {
  expect(trimWhitespace(null)).toBe('Given test is not a string');
});

test('return a string for Non-string input (undefined)', () => {
  expect(trimWhitespace(undefined)).toBe('Given test is not a string');
});
