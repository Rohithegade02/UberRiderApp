export const validatePhoneNumber = (phone: string) => {
  // Basic validation for 10-digit Indian phone number
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phone);
};
