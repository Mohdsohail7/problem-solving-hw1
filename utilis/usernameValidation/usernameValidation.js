function isValidUsername(username) {
  if (
    typeof username !== 'string' ||
    username.length < 5 ||
    username.length > 15
  ) {
    return false;
  }
  const validPattern = /^[a-zA-Z0-9_]+$/;
  return validPattern.test(username);
}
module.exports = isValidUsername;
