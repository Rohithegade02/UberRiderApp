import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

// Store confirmation object globally
let confirmationResult: FirebaseAuthTypes.ConfirmationResult | null = null;

interface OTPResponse {
  success: boolean;
  confirmation?: FirebaseAuthTypes.ConfirmationResult;
  message?: string;
  error?: string;
  code?: string;
}

interface VerifyResponse {
  success: boolean;
  user?: FirebaseAuthTypes.User;
  message?: string;
  error?: string;
  code?: string;
}

/**
 * Send OTP to phone number
 * @param {string} phoneNumber - Phone number with country code
 * @returns {Promise<OTPResponse>} - Returns confirmation object
 */
export const sendOTP = async (phoneNumber: string): Promise<OTPResponse> => {
  try {
    // Validate phone number format
    if (!phoneNumber || !phoneNumber.startsWith('+')) {
      throw new Error(
        'Phone number must include country code (e.g., +1234567890)',
      );
    }

    // Send verification code
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);

    confirmationResult = confirmation;

    return {
      success: true,
      confirmation,
      message: 'OTP sent successfully',
    };
  } catch (error: any) {
    console.error('Error sending OTP:', error);

    // Handle specific Firebase errors
    let errorMessage = 'Failed to send OTP';

    if (error.code === 'auth/invalid-phone-number') {
      errorMessage = 'Invalid phone number format';
    } else if (error.code === 'auth/missing-phone-number') {
      errorMessage = 'Phone number is required';
    } else if (error.code === 'auth/quota-exceeded') {
      errorMessage = 'SMS quota exceeded. Please try again later';
    } else if (error.code === 'auth/user-disabled') {
      errorMessage = 'User account has been disabled';
    } else if (error.code === 'auth/operation-not-allowed') {
      errorMessage = 'Phone authentication is not enabled';
    } else if (error.code === 'auth/too-many-requests') {
      errorMessage = 'Too many attempts. Please try again later';
    } else {
      errorMessage = error.message || 'Failed to send OTP';
    }

    return {
      success: false,
      error: errorMessage,
      code: error.code,
    };
  }
};

/**
 * Verify OTP code
 * @param {string} code - 6-digit OTP code
 * @returns {Promise<VerifyResponse>} - Returns user credential or error
 */
export const verifyOTP = async (code: string): Promise<VerifyResponse> => {
  try {
    if (!confirmationResult) {
      throw new Error('No verification in progress. Please request OTP first.');
    }
    if (!code || code.length !== 6) {
      throw new Error('Please enter a valid 6-digit code');
    }

    // Confirm the code
    const credential = await confirmationResult.confirm(code);

    // Clear confirmation object
    confirmationResult = null;

    return {
      success: true,
      user: credential?.user,
      message: 'Phone number verified successfully',
    };
  } catch (error: any) {
    console.error('Error verifying OTP:', error);

    let errorMessage = 'Invalid verification code';

    if (error.code === 'auth/invalid-verification-code') {
      errorMessage = 'Invalid verification code';
    } else if (error.code === 'auth/session-expired') {
      errorMessage = 'Verification code has expired. Please request a new one';
      confirmationResult = null; // Clear expired confirmation
    } else if (error.code === 'auth/too-many-requests') {
      errorMessage = 'Too many failed attempts. Please try again later';
    } else {
      errorMessage = error.message || 'Verification failed';
    }

    return {
      success: false,
      error: errorMessage,
      code: error.code,
    };
  }
};

/**
 * Resend OTP to the same phone number
 * @param {string} phoneNumber - Phone number to resend OTP to
 * @returns {Promise<OTPResponse>} - Returns confirmation object
 */
export const resendOTP = async (phoneNumber: string): Promise<OTPResponse> => {
  try {
    if (!phoneNumber) {
      throw new Error('Phone number is required for resending OTP');
    }

    // Send new OTP
    return await sendOTP(phoneNumber);
  } catch (error: any) {
    console.error('Error resending OTP:', error);
    return {
      success: false,
      error: 'Failed to resend OTP',
    };
  }
};

/**
 * Cancel current verification
 */
export const cancelVerification = (): void => {
  confirmationResult = null;
};

/**
 * Format phone number with country code
 * @param {string} phoneNumber - Raw phone number
 * @param {string} countryCode - Country code (e.g., '+91' for India)
 * @returns {string} - Formatted phone number
 */
export const formatPhoneNumber = (
  phoneNumber: string,
  countryCode: string = '+91',
): string => {
  // Remove any non-digit characters
  const cleanNumber = phoneNumber.replace(/\D/g, '');

  // Add country code if not present
  if (!phoneNumber.startsWith('+')) {
    return `${countryCode}${cleanNumber}`;
  }

  return phoneNumber;
};
