function extractDomain(email) {
  if (typeof email !== 'string' || email.split('@').length !== 2) {
    return 'Invalid email';
  }

  return email.split('@')[1];
}
module.exports = extractDomain;
