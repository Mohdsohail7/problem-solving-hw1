function formatPhoneNumber(phone) {

  if (phone === null || phone === undefined || (typeof phone !== 'string' && typeof phone !== 'number')) {
    return 'Invalid phone number';
  }
  
  const phoneStr = phone.toString();

  if (phoneStr.length !== 10 || !/^\d{10}$/.test(phoneStr)) {
    return 'Invalid phone number';
  }

  return `(${phoneStr.slice(0,3)}) ${phoneStr.slice(3,6)}-${phoneStr.slice(6)}`;
}
module.exports = formatPhoneNumber;
