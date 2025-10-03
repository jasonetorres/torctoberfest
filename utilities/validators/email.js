/**
 * Email Validation Utility
 * Provides functions for validating email addresses
 */

/**
 * Validates an email address using a basic regex pattern
 * @param {string} email - Email address to validate
 * @returns {boolean} True if email is valid, false otherwise
 */
export function isValidEmail(email) {
  if (typeof email !== 'string') {
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

/**
 * Validates an email address with stricter rules
 * Checks for common invalid patterns and formats
 * @param {string} email - Email address to validate
 * @returns {boolean} True if email passes strict validation
 */
export function isValidEmailStrict(email) {
  if (!isValidEmail(email)) {
    return false;
  }

  const trimmedEmail = email.trim();

  if (trimmedEmail.length > 254) {
    return false;
  }

  const [localPart, domain] = trimmedEmail.split('@');

  if (localPart.length > 64) {
    return false;
  }

  if (localPart.startsWith('.') || localPart.endsWith('.')) {
    return false;
  }

  if (localPart.includes('..')) {
    return false;
  }

  if (domain.startsWith('-') || domain.endsWith('-')) {
    return false;
  }

  const domainRegex = /^[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return domainRegex.test(domain);
}

// Example usage:
// import { isValidEmail, isValidEmailStrict } from './email.js';
//
// console.log(isValidEmail('user@example.com')); // true
// console.log(isValidEmail('invalid.email')); // false
// console.log(isValidEmailStrict('user@example.com')); // true
// console.log(isValidEmailStrict('.user@example.com')); // false
