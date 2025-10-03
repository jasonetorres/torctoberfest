/**
 * Temperature Conversion Utilities
 * Provides functions for converting between Celsius and Fahrenheit
 */

/**
 * Converts Celsius to Fahrenheit
 * @param {number} celsius - Temperature in Celsius
 * @returns {number} Temperature in Fahrenheit
 * @throws {TypeError} If input is not a number
 */
export function celsiusToFahrenheit(celsius) {
  if (typeof celsius !== 'number' || isNaN(celsius)) {
    throw new TypeError('Input must be a valid number');
  }
  return (celsius * 9/5) + 32;
}

/**
 * Converts Fahrenheit to Celsius
 * @param {number} fahrenheit - Temperature in Fahrenheit
 * @returns {number} Temperature in Celsius
 * @throws {TypeError} If input is not a number
 */
export function fahrenheitToCelsius(fahrenheit) {
  if (typeof fahrenheit !== 'number' || isNaN(fahrenheit)) {
    throw new TypeError('Input must be a valid number');
  }
  return (fahrenheit - 32) * 5/9;
}

/**
 * Converts Celsius to Kelvin
 * @param {number} celsius - Temperature in Celsius
 * @returns {number} Temperature in Kelvin
 * @throws {TypeError} If input is not a number
 */
export function celsiusToKelvin(celsius) {
  if (typeof celsius !== 'number' || isNaN(celsius)) {
    throw new TypeError('Input must be a valid number');
  }
  return celsius + 273.15;
}

/**
 * Converts Kelvin to Celsius
 * @param {number} kelvin - Temperature in Kelvin
 * @returns {number} Temperature in Celsius
 * @throws {TypeError} If input is not a number
 * @throws {RangeError} If temperature is below absolute zero
 */
export function kelvinToCelsius(kelvin) {
  if (typeof kelvin !== 'number' || isNaN(kelvin)) {
    throw new TypeError('Input must be a valid number');
  }
  if (kelvin < 0) {
    throw new RangeError('Temperature cannot be below absolute zero');
  }
  return kelvin - 273.15;
}

// Example usage:
// import { celsiusToFahrenheit, fahrenheitToCelsius } from './temperature.js';
//
// const tempF = celsiusToFahrenheit(25);
// console.log(tempF); // 77
//
// const tempC = fahrenheitToCelsius(77);
// console.log(tempC); // 25
