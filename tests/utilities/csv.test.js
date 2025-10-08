/**
 * Unit Tests for CSV Parser Utility
 * Run with: npm test or vitest
 */

import { describe, expect, test } from 'vitest';
import { parseCSV, objectsToCSV } from '../../utilities/converters/csv.js';

describe('parseCSV', () => {
  
  describe('Basic Functionality', () => {
    test('should parse simple CSV with headers', () => {
      const csv = 'name,age,city\nJohn,25,NYC\nJane,30,LA';
      const result = parseCSV(csv);
      
      expect(result).toEqual([
        { name: 'John', age: '25', city: 'NYC' },
        { name: 'Jane', age: '30', city: 'LA' }
      ]);
    });

    test('should handle empty CSV string', () => {
      expect(parseCSV('')).toEqual([]);
      expect(parseCSV('   ')).toEqual([]);
    });

    test('should handle headers only', () => {
      const csv = 'name,age,city';
      const result = parseCSV(csv);
      expect(result).toEqual([]);
    });

    test('should handle single data row', () => {
      const csv = 'name,age\nJohn,25';
      const result = parseCSV(csv);
      expect(result).toEqual([{ name: 'John', age: '25' }]);
    });
  });

  describe('Quoted Values', () => {
    test('should handle quoted values with commas', () => {
      const csv = 'name,description\nJohn,"Hello, World"\nJane,"Hi there"';
      const result = parseCSV(csv);
      
      expect(result).toEqual([
        { name: 'John', description: 'Hello, World' },
        { name: 'Jane', description: 'Hi there' }
      ]);
    });

    test('should handle escaped quotes (double quotes)', () => {
      const csv = 'name,quote\nJohn,"He said ""Hello"""\nJane,"She said ""Hi"""';
      const result = parseCSV(csv);
      
      expect(result).toEqual([
        { name: 'John', quote: 'He said "Hello"' },
        { name: 'Jane', quote: 'She said "Hi"' }
      ]);
    });

    test('should handle quotes with special characters', () => {
      const csv = 'name,description\nJohn,"Contains; special, chars"\nJane,"Simple text"';
      const result = parseCSV(csv);
      
      expect(result).toEqual([
        { name: 'John', description: 'Contains; special, chars' },
        { name: 'Jane', description: 'Simple text' }
      ]);
    });

    test('should handle empty quoted fields', () => {
      const csv = 'name,middle,last\nJohn,"",Doe\nJane,,Smith';
      const result = parseCSV(csv);
      
      expect(result).toEqual([
        { name: 'John', middle: '', last: 'Doe' },
        { name: 'Jane', middle: '', last: 'Smith' }
      ]);
    });
  });

  describe('Custom Delimiters', () => {
    test('should handle semicolon delimiter', () => {
      const csv = 'name;age;city\nJohn;25;NYC\nJane;30;LA';
      const result = parseCSV(csv, { delimiter: ';' });
      
      expect(result).toEqual([
        { name: 'John', age: '25', city: 'NYC' },
        { name: 'Jane', age: '30', city: 'LA' }
      ]);
    });

    test('should handle tab delimiter', () => {
      const csv = 'name\tage\tcity\nJohn\t25\tNYC\nJane\t30\tLA';
      const result = parseCSV(csv, { delimiter: '\t' });
      
      expect(result).toEqual([
        { name: 'John', age: '25', city: 'NYC' },
        { name: 'Jane', age: '30', city: 'LA' }
      ]);
    });

    test('should handle pipe delimiter', () => {
      const csv = 'name|age|city\nJohn|25|NYC\nJane|30|LA';
      const result = parseCSV(csv, { delimiter: '|' });
      
      expect(result).toEqual([
        { name: 'John', age: '25', city: 'NYC' },
        { name: 'Jane', age: '30', city: 'LA' }
      ]);
    });
  });

  describe('Different Line Endings', () => {
    test('should handle Windows line endings (\\r\\n)', () => {
      const csv = 'name,age\r\nJohn,25\r\nJane,30';
      const result = parseCSV(csv);
      
      expect(result).toEqual([
        { name: 'John', age: '25' },
        { name: 'Jane', age: '30' }
      ]);
    });

    test('should handle Mac line endings (\\r)', () => {
      const csv = 'name,age\rJohn,25\rJane,30';
      const result = parseCSV(csv);
      
      expect(result).toEqual([
        { name: 'John', age: '25' },
        { name: 'Jane', age: '30' }
      ]);
    });

    test('should handle mixed line endings', () => {
      // Test each line ending type separately to ensure robust parsing
      const csv1 = 'name,age\r\nJohn,25\r\nJane,30'; // Windows
      const csv2 = 'name,age\rJohn,25\rJane,30'; // Mac classic
      const csv3 = 'name,age\nJohn,25\nJane,30'; // Unix
      
      const expected = [
        { name: 'John', age: '25' },
        { name: 'Jane', age: '30' }
      ];
      
      expect(parseCSV(csv1)).toEqual(expected);
      expect(parseCSV(csv2)).toEqual(expected);
      expect(parseCSV(csv3)).toEqual(expected);
    });
  });

  describe('Whitespace Handling', () => {
    test('should trim whitespace by default', () => {
      const csv = 'name , age , city \n John , 25 , NYC \n Jane , 30 , LA ';
      const result = parseCSV(csv);
      
      expect(result).toEqual([
        { name: 'John', age: '25', city: 'NYC' },
        { name: 'Jane', age: '30', city: 'LA' }
      ]);
    });

    test('should preserve whitespace when trimWhitespace=false', () => {
      const csv = 'name , age \n John , 25 ';
      const result = parseCSV(csv, { trimWhitespace: false });
      
      expect(result).toEqual([
        { 'name ': ' John ', ' age ': ' 25 ' }
      ]);
    });
  });

  describe('Empty Lines Handling', () => {
    test('should skip empty lines by default', () => {
      const csv = 'name,age\n\nJohn,25\n\n\nJane,30\n\n';
      const result = parseCSV(csv);
      
      expect(result).toEqual([
        { name: 'John', age: '25' },
        { name: 'Jane', age: '30' }
      ]);
    });

    test('should preserve empty lines when skipEmptyLines=false', () => {
      const csv = 'name,age\n\nJohn,25\n\nJane,30';
      const result = parseCSV(csv, { skipEmptyLines: false });
      
      expect(result).toEqual([
        { name: '', age: '' },
        { name: 'John', age: '25' },
        { name: '', age: '' },
        { name: 'Jane', age: '30' }
      ]);
    });
  });

  describe('Missing Fields', () => {
    test('should handle missing fields at end of row', () => {
      const csv = 'name,age,city\nJohn,25\nJane,30,LA';
      const result = parseCSV(csv);
      
      expect(result).toEqual([
        { name: 'John', age: '25', city: '' },
        { name: 'Jane', age: '30', city: 'LA' }
      ]);
    });

    test('should handle missing fields in middle of row', () => {
      const csv = 'name,age,city\nJohn,,NYC\nJane,30,';
      const result = parseCSV(csv);
      
      expect(result).toEqual([
        { name: 'John', age: '', city: 'NYC' },
        { name: 'Jane', age: '30', city: '' }
      ]);
    });
  });

  describe('Error Handling', () => {
    test('should throw error for non-string input', () => {
      expect(() => parseCSV(null)).toThrow(TypeError);
      expect(() => parseCSV(123)).toThrow(TypeError);
      expect(() => parseCSV({})).toThrow(TypeError);
    });
  });

  describe('Custom Options', () => {
    test('should handle custom quote character', () => {
      const csv = "name,description\nJohn,'Hello, World'\nJane,'Hi there'";
      const result = parseCSV(csv, { quote: "'" });
      
      expect(result).toEqual([
        { name: 'John', description: 'Hello, World' },
        { name: 'Jane', description: 'Hi there' }
      ]);
    });

    test('should handle all custom options together', () => {
      const csv = "name;'desc;ription'\nJohn;'Hello; World'\nJane;'Hi there'";
      const result = parseCSV(csv, { 
        delimiter: ';', 
        quote: "'", 
        trimWhitespace: false 
      });
      
      expect(result).toEqual([
        { name: 'John', 'desc;ription': 'Hello; World' },
        { name: 'Jane', 'desc;ription': 'Hi there' }
      ]);
    });
  });
});

describe('objectsToCSV', () => {
  
  describe('Basic Functionality', () => {
    test('should convert objects to CSV', () => {
      const data = [
        { name: 'John', age: 25, city: 'NYC' },
        { name: 'Jane', age: 30, city: 'LA' }
      ];
      const result = objectsToCSV(data);
      
      expect(result).toBe('name,age,city\nJohn,25,NYC\nJane,30,LA');
    });

    test('should handle empty array', () => {
      expect(objectsToCSV([])).toBe('');
    });

    test('should handle single object', () => {
      const data = [{ name: 'John', age: 25 }];
      const result = objectsToCSV(data);
      
      expect(result).toBe('name,age\nJohn,25');
    });
  });

  describe('Quoting', () => {
    test('should quote fields containing delimiter', () => {
      const data = [
        { name: 'John', description: 'Hello, World' }
      ];
      const result = objectsToCSV(data);
      
      expect(result).toBe('name,description\nJohn,"Hello, World"');
    });

    test('should escape quotes in fields', () => {
      const data = [
        { name: 'John', quote: 'He said "Hello"' }
      ];
      const result = objectsToCSV(data);
      
      expect(result).toBe('name,quote\nJohn,"He said ""Hello"""');
    });

    test('should always quote when alwaysQuote=true', () => {
      const data = [{ name: 'John', age: 25 }];
      const result = objectsToCSV(data, { alwaysQuote: true });
      
      expect(result).toBe('"name","age"\n"John","25"');
    });
  });

  describe('Custom Delimiters', () => {
    test('should use custom delimiter', () => {
      const data = [{ name: 'John', age: 25 }];
      const result = objectsToCSV(data, { delimiter: ';' });
      
      expect(result).toBe('name;age\nJohn;25');
    });
  });

  describe('Error Handling', () => {
    test('should handle null/undefined values', () => {
      const data = [
        { name: 'John', age: null, city: undefined }
      ];
      const result = objectsToCSV(data);
      
      expect(result).toBe('name,age,city\nJohn,,');
    });
  });
});

describe('Round Trip Tests', () => {
  test('should maintain data integrity in parse -> convert cycle', () => {
    const originalData = [
      { name: 'John', age: 25, city: 'NYC' },
      { name: 'Jane', age: 30, city: 'LA' }
    ];
    
    const csvString = objectsToCSV(originalData);
    const parsedData = parseCSV(csvString);
    
    expect(parsedData).toEqual([
      { name: 'John', age: '25', city: 'NYC' },
      { name: 'Jane', age: '30', city: 'LA' }
    ]);
  });

  test('should handle complex data with quotes and commas', () => {
    const originalData = [
      { name: 'John', description: 'Hello, "World"' },
      { name: 'Jane', description: 'Hi there' }
    ];
    
    const csvString = objectsToCSV(originalData);
    const parsedData = parseCSV(csvString);
    
    expect(parsedData).toEqual(originalData);
  });
});