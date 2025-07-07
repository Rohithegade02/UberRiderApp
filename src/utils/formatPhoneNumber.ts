/**
 * Format phone number with country code
 * @param {string} phoneNumber - Raw phone number
 * @param {string} countryCode - Country code (e.g., '+91' for India)
 * @returns {string} - Formatted phone number
 */
export function formatPhoneNumber(phoneNumber: string, countryCode: string) {
  // Ensure countryCode starts with '+'
  const prefix = countryCode.startsWith('+') ? countryCode : `+${countryCode}`;
  return `${prefix}${phoneNumber}`;
}
