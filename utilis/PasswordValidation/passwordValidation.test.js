// isValidPassword.test.js
const isValidPassword = require('./passwordValidation');

test('validates strong password with upper case, lower case And number', () => {
  expect(isValidPassword('Password 123')).toBe(true);
});

test('fails password no upper case', () => {
  expect(isValidPassword('password 123')).toBe(false);
});

test('fails password no lower case', () => {
  expect(isValidPassword('PASSWORD 123')).toBe(false);
});

test('fails password no number', () => {
  expect(isValidPassword('Password')).toBe(false);
});

test('validates password with special character as long as it meets all the requirements', () => {
  expect(isValidPassword('P@ssw0rd!')).toBe(true);
});

test('fails password is too short', () => {
  expect(isValidPassword('Short1')).toBe(false);
});

test('fails password missing upper case And lower case only number', () => {
  expect(isValidPassword('12345678')).toBe(false);
});

test('password fails with special character but missing required component', () => {
  expect(isValidPassword('Password!')).toBe(false);
});

test('fails empty string as a password', () => {
  expect(isValidPassword('')).toBe(false);
});

test('fails a password with null value', () => {
  expect(isValidPassword(null)).toBe(false);
});

test('fails undefined password', () => {
  expect(isValidPassword(undefined)).toBe(false);
});

test('fails a password only lower case', () => {
  expect(isValidPassword('abcdefgh')).toBe(false);
});
