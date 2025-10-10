/**
 * CSV Parser Utility
 * 
 * Parses CSV strings into JavaScript objects with support for quoted values,
 * custom delimiters, and proper handling of edge cases.
 */

/**
 * Parses a CSV string into an array of JavaScript objects.
 * 
 * @param {string} csvString - The CSV string to parse
 * @param {Object} [options={}] - Parsing options
 * @param {string} [options.delimiter=','] - Field delimiter (default: comma)
 * @param {string} [options.quote='"'] - Quote character (default: double quote)
 * @param {boolean} [options.skipEmptyLines=true] - Skip empty lines (default: true)
 * @param {boolean} [options.trimWhitespace=true] - Trim whitespace from fields (default: true)
 * @returns {Object[]} Array of objects where keys are column headers
 * 
 * @example
 * // Basic CSV parsing
 * const csv = 'name,age,city\nJohn,25,NYC\nJane,30,LA';
 * const result = parseCSV(csv);
 * // Returns: [
 * //   { name: 'John', age: '25', city: 'NYC' },
 * //   { name: 'Jane', age: '30', city: 'LA' }
 * // ]
 * 
 * @example
 * // CSV with quoted values containing commas
 * const csv = 'name,description\nJohn,"Hello, World"\nJane,"Hi there"';
 * const result = parseCSV(csv);
 * // Returns: [
 * //   { name: 'John', description: 'Hello, World' },
 * //   { name: 'Jane', description: 'Hi there' }
 * // ]
 * 
 * @example
 * // Custom delimiter (semicolon)
 * const csv = 'name;age;city\nJohn;25;NYC\nJane;30;LA';
 * const result = parseCSV(csv, { delimiter: ';' });
 */
function parseCSV(csvString, options = {}) {
    const {
        delimiter = ',',
        quote = '"',
        skipEmptyLines = true,
        trimWhitespace = true
    } = options;

    // Input validation
    if (typeof csvString !== 'string') {
        throw new TypeError('CSV input must be a string');
    }

    if (!csvString.trim()) {
        return [];
    }

    // Split into lines - handle different line endings
    const lines = csvString.split(/\r?\n|\r/);
    
    // Filter empty lines if requested
    const processedLines = skipEmptyLines 
        ? lines.filter(line => line.trim() !== '')
        : lines;

    if (processedLines.length === 0) {
        return [];
    }

    // Parse header row
    const headers = parseCSVLine(processedLines[0], delimiter, quote, trimWhitespace);
    
    if (headers.length === 0) {
        return [];
    }

    // Parse data rows
    const result = [];
    for (let i = 1; i < processedLines.length; i++) {
        const fields = parseCSVLine(processedLines[i], delimiter, quote, trimWhitespace);
        
        // Skip lines that don't have any fields
        if (fields.length === 0) continue;
        
        // Create object from fields
        const row = {};
        headers.forEach((header, index) => {
            row[header] = fields[index] || ''; // Use empty string for missing fields
        });
        
        result.push(row);
    }

    return result;
}

/**
 * Parses a single CSV line handling quoted values and delimiters.
 * 
 * @param {string} line - The CSV line to parse
 * @param {string} delimiter - Field delimiter
 * @param {string} quote - Quote character
 * @param {boolean} trimWhitespace - Whether to trim whitespace
 * @returns {string[]} Array of field values
 */
function parseCSVLine(line, delimiter, quote, trimWhitespace) {
    const fields = [];
    let current = '';
    let inQuotes = false;
    let i = 0;

    while (i < line.length) {
        const char = line[i];
        const nextChar = line[i + 1];

        if (char === quote) {
            if (inQuotes && nextChar === quote) {
                // Escaped quote (double quote)
                current += quote;
                i += 2; // Skip both quotes
            } else {
                // Start or end of quoted field
                inQuotes = !inQuotes;
                i++;
            }
        } else if (char === delimiter && !inQuotes) {
            // Field separator outside quotes
            fields.push(trimWhitespace ? current.trim() : current);
            current = '';
            i++;
        } else {
            // Regular character
            current += char;
            i++;
        }
    }

    // Add the last field
    fields.push(trimWhitespace ? current.trim() : current);
    
    return fields;
}

/**
 * Converts an array of objects back to CSV string.
 * 
 * @param {Object[]} data - Array of objects to convert
 * @param {Object} [options={}] - Conversion options
 * @param {string} [options.delimiter=','] - Field delimiter
 * @param {string} [options.quote='"'] - Quote character
 * @param {boolean} [options.alwaysQuote=false] - Always quote fields
 * @returns {string} CSV string
 * 
 * @example
 * const data = [
 *   { name: 'John', age: 25, city: 'NYC' },
 *   { name: 'Jane', age: 30, city: 'LA' }
 * ];
 * const csv = objectsToCSV(data);
 * // Returns: 'name,age,city\nJohn,25,NYC\nJane,30,LA'
 */
function objectsToCSV(data, options = {}) {
    const {
        delimiter = ',',
        quote = '"',
        alwaysQuote = false
    } = options;

    if (!Array.isArray(data) || data.length === 0) {
        return '';
    }

    // Get headers from first object
    const headers = Object.keys(data[0]);
    
    // Create header line
    const headerLine = headers.map(header => 
        formatCSVField(header, delimiter, quote, alwaysQuote)
    ).join(delimiter);

    // Create data lines
    const dataLines = data.map(row => 
        headers.map(header => 
            formatCSVField(String(row[header] || ''), delimiter, quote, alwaysQuote)
        ).join(delimiter)
    );

    return [headerLine, ...dataLines].join('\n');
}

/**
 * Formats a field for CSV output, adding quotes if necessary.
 * 
 * @param {string} field - Field value to format
 * @param {string} delimiter - Field delimiter
 * @param {string} quote - Quote character
 * @param {boolean} alwaysQuote - Always add quotes
 * @returns {string} Formatted field
 */
function formatCSVField(field, delimiter, quote, alwaysQuote) {
    // Check if field needs quoting
    const needsQuoting = alwaysQuote || 
        field.includes(delimiter) || 
        field.includes(quote) || 
        field.includes('\n') || 
        field.includes('\r');

    if (needsQuoting) {
        // Escape existing quotes by doubling them
        const escapedField = field.replace(new RegExp(quote, 'g'), quote + quote);
        return quote + escapedField + quote;
    }

    return field;
}

// Export functions
export { parseCSV, objectsToCSV };