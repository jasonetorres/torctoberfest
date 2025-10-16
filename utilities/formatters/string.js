/**
 * String Capitalization Utility
 * Provides functions for capitalizing strings in different ways
 */

/**
 * Capitalizes only the first letter of a string
 * @param {string} str - The string to capitalize
 * @returns {string} String with first letter capitalized, rest unchanged
 * @throws {TypeError} When input is not a string
 * 
 * @example
 * capitalizeFirst('hello world'); // 'Hello world'
 * capitalizeFirst('HELLO WORLD'); // 'HELLO WORLD'
 * capitalizeFirst('hello'); // 'Hello'
 * capitalizeFirst(''); // ''
 */
export function capitalizeFirst(str) {
  // Input validation
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }

  // Handle empty string
  if (str.length === 0) {
    return str;
  }

  // Capitalize first character and keep rest unchanged
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Capitalizes the first letter of each word in a string
 * Words are separated by whitespace characters
 * @param {string} str - The string to capitalize
 * @returns {string} String with first letter of each word capitalized
 * @throws {TypeError} When input is not a string
 * 
 * @example
 * capitalizeWords('hello world'); // 'Hello World'
 * capitalizeWords('hello-world test'); // 'Hello-world Test'
 * capitalizeWords('  hello   world  '); // '  Hello   World  '
 * capitalizeWords(''); // ''
 */
export function capitalizeWords(str) {
  // Input validation
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }

  // Handle empty string
  if (str.length === 0) {
    return str;
  }

  // Split by whitespace, capitalize first letter of each word, preserve rest
  return str.replace(/(?:^|\s)(\S)/g, (match, firstChar) => {
    return match.replace(firstChar, firstChar.toUpperCase());
  });
}

/**
 * Converts entire string to uppercase
 * @param {string} str - The string to capitalize
 * @returns {string} String converted to uppercase
 * @throws {TypeError} When input is not a string
 * 
 * @example
 * capitalizeAll('hello world'); // 'HELLO WORLD'
 * capitalizeAll('Hello World'); // 'HELLO WORLD'
 * capitalizeAll('HELLO WORLD'); // 'HELLO WORLD'
 * capitalizeAll(''); // ''
 */
export function capitalizeAll(str) {
  // Input validation
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }

  // Convert entire string to uppercase
  return str.toUpperCase();
}

// Usage examples:
// import { capitalizeFirst, capitalizeWords, capitalizeAll } from './string.js';
//
// console.log(capitalizeFirst('hello world')); // 'Hello world'
// console.log(capitalizeWords('hello world')); // 'Hello World'
// console.log(capitalizeAll('hello world')); // 'HELLO WORLD'