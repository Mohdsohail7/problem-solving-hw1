const isValidUsername = require('./usernameValidation');

test('valid username with letters and numbers', () => {
  expect(isValidUsername('user_123')).toBe(true);
});

test('valid username with underscores', () => {
  expect(isValidUsername('Mohd_Sohail')).toBe(true);
});

test('username too short', () => {
  expect(isValidUsername('Mohd')).toBe(false);
});

test('username too long', () => {
  expect(isValidUsername('this_username_is_too_long')).toBe(false);
});

test('invalid characters in username', () => {
  expect(isValidUsername('invalid@username')).toBe(false);
});
