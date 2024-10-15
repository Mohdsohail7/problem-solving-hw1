function maskEmail(email) {
  if (typeof email !== 'string' || !email.includes('@')) {
    return 'Invalid email';
  }

  const [localPart, domainPart] = email.split('@');

  if (localPart.length === 1) {
    // Mask the single character with an asterisk
    return `${localPart}@${domainPart}`;
  } else if (localPart.length === 2) {
    // Keep both characters visible (optionally, you can mask one of them)
    return `${localPart[0]}*@${domainPart}`;
  } else {
    // Mask the middle part of the local part, keeping the first and last characters
    const maskedLocal =
      localPart[0] +
      '*'.repeat(localPart.length - 2) +
      localPart[localPart.length - 1];
    return `${maskedLocal}@${domainPart}`;
  }

  return `${maskedLocalPart}@${domainPart}`;
}
module.exports = maskEmail;
