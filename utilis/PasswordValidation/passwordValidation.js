function isValidPassword(password) {
  if (typeof password !== 'string' || password.length < 8) {
    return false;
  }

  const hashUpperCase = /[A-Z]/.test(password);
  const hashLowerCase = /[a-z]/.test(password);
  const hashNumber = /[0-9]/.test(password);

  return hashUpperCase && hashLowerCase && hashNumber;
}
module.exports = isValidPassword;
