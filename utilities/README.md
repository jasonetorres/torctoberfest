# Utilities

This directory contains all the utility scripts and tools in the TORC Toolbelt.

## Directory Structure

- **converters/** - Unit converters, format converters, data transformation tools
- **validators/** - Input validation utilities, data verification tools
- **formatters/** - Text formatting, data formatting, string manipulation utilities
- **automation/** - Automation scripts, task runners, workflow helpers

## Adding a New Utility

When adding a new utility:

1. Choose the appropriate subdirectory
2. Create a new file with a descriptive name
3. Include JSDoc comments for all functions
4. Add usage examples in comments
5. Create corresponding tests in the `tests/` directory
6. Update this README with your utility

## Utility Template

```javascript
/**
 * Brief description of what this utility does
 * @param {type} paramName - Parameter description
 * @returns {type} Return value description
 */
export function utilityName(paramName) {
  // Implementation
  return result;
}

// Example usage:
// const result = utilityName('example');
// console.log(result); // Expected output
```

## Available Utilities

### Converters
- `temperature.js` - Temperature conversion utilities

### Validators
- Coming soon! Check the issues for ways to contribute.

### Formatters
- Coming soon! Check the issues for ways to contribute.

### Automation
- Coming soon! Check the issues for ways to contribute.

---

Want to add a utility? Check out our [Contributing Guidelines](../CONTRIBUTING.md)!
