/**
 * Validates if a given string is a properly formatted URL with HTTP/HTTPS protocol.
 * 
 * @param {string} url - The URL string to validate
 * @param {boolean} [httpsOnly=false] - Whether to allow only HTTPS URLs
 * @returns {boolean} True if the URL is valid, false otherwise
 * 
 * @example
 * isValidURL('https://www.example.com'); // true
 * isValidURL('http://example.com'); // true
 * isValidURL('ftp://example.com'); // false
 * isValidURL('http://example.com', true); // false (HTTPS only)
 * isValidURL('https://example.com', true); // true
 */
export function isURLValid(url, httpsOnly = false) {
    // Handle edge cases: null, undefined, non-string, empty string
    if (!url || typeof url !== 'string' || !url.trim()) {
        return false;
    }

    try {
        const urlObj = new URL(url.trim());
        
        // Check protocol - only HTTP/HTTPS allowed
        const isHTTP = urlObj.protocol === 'http:';
        const isHTTPS = urlObj.protocol === 'https:';
        
        if (!isHTTP && !isHTTPS) {
            return false;
        }
        
        // If HTTPS only mode, reject HTTP
        if (httpsOnly && !isHTTPS) {
            return false;
        }
        
        // Check hostname exists and is valid
        const hostname = urlObj.hostname;
        if (!hostname) {
            return false;
        }
        
        // Handle edge cases: malformed hostnames
        if (hostname.includes('..') || hostname.startsWith('.') || hostname.endsWith('.')) {
            return false;
        }
        
        // Require valid domain structure (except localhost)
        if (hostname !== 'localhost' && !hostname.includes('.')) {
            return false;
        }

        return true;
        
    } catch {
        // URL constructor throws for invalid URLs
        return false;
    }
}
