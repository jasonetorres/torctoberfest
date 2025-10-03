import { describe, it, expect } from '@jest/globals';
import {
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  celsiusToKelvin,
  kelvinToCelsius
} from '../utilities/converters/temperature.js';

describe('Temperature Conversion Utilities', () => {
  describe('celsiusToFahrenheit', () => {
    it('should convert 0°C to 32°F', () => {
      expect(celsiusToFahrenheit(0)).toBe(32);
    });

    it('should convert 25°C to 77°F', () => {
      expect(celsiusToFahrenheit(25)).toBe(77);
    });

    it('should convert 100°C to 212°F', () => {
      expect(celsiusToFahrenheit(100)).toBe(212);
    });

    it('should handle negative temperatures', () => {
      expect(celsiusToFahrenheit(-40)).toBe(-40);
    });

    it('should throw TypeError for non-numeric input', () => {
      expect(() => celsiusToFahrenheit('25')).toThrow(TypeError);
      expect(() => celsiusToFahrenheit(null)).toThrow(TypeError);
      expect(() => celsiusToFahrenheit(undefined)).toThrow(TypeError);
    });
  });

  describe('fahrenheitToCelsius', () => {
    it('should convert 32°F to 0°C', () => {
      expect(fahrenheitToCelsius(32)).toBe(0);
    });

    it('should convert 77°F to 25°C', () => {
      expect(fahrenheitToCelsius(77)).toBe(25);
    });

    it('should convert 212°F to 100°C', () => {
      expect(fahrenheitToCelsius(212)).toBe(100);
    });

    it('should handle negative temperatures', () => {
      expect(fahrenheitToCelsius(-40)).toBe(-40);
    });

    it('should throw TypeError for non-numeric input', () => {
      expect(() => fahrenheitToCelsius('77')).toThrow(TypeError);
    });
  });

  describe('celsiusToKelvin', () => {
    it('should convert 0°C to 273.15K', () => {
      expect(celsiusToKelvin(0)).toBe(273.15);
    });

    it('should convert 25°C to 298.15K', () => {
      expect(celsiusToKelvin(25)).toBe(298.15);
    });

    it('should convert -273.15°C to 0K (absolute zero)', () => {
      expect(celsiusToKelvin(-273.15)).toBe(0);
    });

    it('should throw TypeError for non-numeric input', () => {
      expect(() => celsiusToKelvin('25')).toThrow(TypeError);
    });
  });

  describe('kelvinToCelsius', () => {
    it('should convert 273.15K to 0°C', () => {
      expect(kelvinToCelsius(273.15)).toBe(0);
    });

    it('should convert 298.15K to 25°C', () => {
      expect(kelvinToCelsius(298.15)).toBe(25);
    });

    it('should convert 0K to -273.15°C (absolute zero)', () => {
      expect(kelvinToCelsius(0)).toBe(-273.15);
    });

    it('should throw RangeError for temperatures below absolute zero', () => {
      expect(() => kelvinToCelsius(-1)).toThrow(RangeError);
    });

    it('should throw TypeError for non-numeric input', () => {
      expect(() => kelvinToCelsius('273.15')).toThrow(TypeError);
    });
  });
});
