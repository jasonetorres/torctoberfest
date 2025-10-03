# Issue Examples for Maintainers

This document provides concrete examples of issues at each difficulty level that you can copy and customize for your repository.

## Level 1: Good First Issue

### Example 1: Add Your Profile to AUTHORS.md

```markdown
**Title:** Add your GitHub profile to AUTHORS.md

**Labels:** `good first issue`, `hacktoberfest`, `documentation`

**Description:**

Help us recognize our contributors! Add your GitHub profile link and a brief description to the AUTHORS.md file.

**What to do:**

1. Fork this repository
2. Open the `AUTHORS.md` file
3. Add your information in this format:
   ```
   - [Your Name](https://github.com/yourusername) - Brief description or fun fact
   ```
4. Commit your changes
5. Create a Pull Request

**Expected outcome:**
Your name and profile link appear in the AUTHORS.md file in alphabetical order.

**Acceptance criteria:**
- [ ] Name added in correct format
- [ ] GitHub link is valid
- [ ] Entry is in alphabetical order by first name
- [ ] PR follows the pull request template

This is perfect for your first contribution! If you have any questions, just comment below.
```

### Example 2: Fix Typos in Documentation

```markdown
**Title:** Fix typos in README.md

**Labels:** `good first issue`, `hacktoberfest`, `documentation`

**Description:**

We've identified several typos in our README.md that need to be corrected.

**Typos to fix:**

Line 45: "utilites" should be "utilities"
Line 72: "recieve" should be "receive"
Line 89: "accomodate" should be "accommodate"

**What to do:**

1. Fork the repository
2. Open README.md
3. Fix the typos listed above
4. Commit with message: "Fix typos in README.md"
5. Create a Pull Request

**Acceptance criteria:**
- [ ] All three typos are fixed
- [ ] No new typos introduced
- [ ] PR description references this issue
```

## Level 2: Beginner

### Example 1: Create URL Validator

```markdown
**Title:** Create a URL validation utility

**Labels:** `beginner`, `hacktoberfest`, `enhancement`

**Description:**

We need a utility function to validate URLs. This should check if a given string is a properly formatted URL.

**Technical requirements:**

- Language: JavaScript
- Location: Create new file `utilities/validators/url.js`
- Function name: `isValidUrl(url)`
- Return type: boolean

**Implementation details:**

The function should:
- Accept a string parameter
- Check if the string is a valid URL (http, https protocols)
- Return `true` for valid URLs, `false` otherwise
- Handle edge cases (null, undefined, empty string)

**Example:**

```javascript
export function isValidUrl(url) {
  // Your implementation here
}

// Example usage:
// isValidUrl('https://example.com'); // true
// isValidUrl('not-a-url'); // false
// isValidUrl(''); // false
```

**Acceptance criteria:**

- [ ] Function created in correct location
- [ ] Validates http and https URLs
- [ ] Handles edge cases properly
- [ ] Includes JSDoc comments
- [ ] Includes usage examples in comments

**Estimated time:** 1-2 hours
```

### Example 2: Add String Capitalize Function

```markdown
**Title:** Create string capitalization utility

**Labels:** `beginner`, `hacktoberfest`, `enhancement`

**Description:**

Create a utility to capitalize strings in different ways (first letter, all words, etc.)

**Technical requirements:**

- File: `utilities/formatters/capitalize.js`
- Export three functions:
  - `capitalizeFirst(str)` - Capitalize first letter only
  - `capitalizeWords(str)` - Capitalize first letter of each word
  - `capitalizeAll(str)` - Convert entire string to uppercase

**Example implementation:**

```javascript
export function capitalizeFirst(str) {
  // "hello world" -> "Hello world"
}

export function capitalizeWords(str) {
  // "hello world" -> "Hello World"
}

export function capitalizeAll(str) {
  // "hello world" -> "HELLO WORLD"
}
```

**Acceptance criteria:**

- [ ] All three functions implemented
- [ ] Input validation (handle null, undefined, non-strings)
- [ ] JSDoc comments added
- [ ] Usage examples in comments
- [ ] Follows project code style

**Resources:**
- See `utilities/converters/temperature.js` for function structure example
```

## Level 3: Intermediate

### Example 1: Add CSV Parser Utility

```markdown
**Title:** Implement CSV file parser utility

**Labels:** `intermediate`, `hacktoberfest`, `feature`

**Description:**

Create a utility to parse CSV (Comma-Separated Values) files/strings into JavaScript objects.

**Problem statement:**

Users need an easy way to convert CSV data into usable JavaScript arrays of objects for data processing tasks.

**Proposed solution:**

Create a parser that:
- Accepts CSV string as input
- Returns array of objects where keys are column headers
- Handles quoted values with commas
- Provides options for custom delimiter

**Technical details:**

**File:** `utilities/formatters/csv-parser.js`

**Function signature:**
```javascript
export function parseCSV(csvString, options = {}) {
  // options: { delimiter: ',', headers: true }
}
```

**Implementation steps:**

1. Split CSV string into lines
2. Extract headers from first line
3. Parse each subsequent line
4. Handle quoted values containing delimiters
5. Return array of objects

**Example usage:**
```javascript
const csv = 'name,age,city\nJohn,30,NYC\nJane,25,LA';
const data = parseCSV(csv);
// Result: [
//   { name: 'John', age: '30', city: 'NYC' },
//   { name: 'Jane', age: '25', city: 'LA' }
// ]
```

**Acceptance criteria:**

- [ ] Parses basic CSV correctly
- [ ] Handles quoted values with commas
- [ ] Supports custom delimiter option
- [ ] Includes comprehensive JSDoc
- [ ] Add tests in `tests/csv-parser.test.js`
- [ ] Handles edge cases (empty lines, missing values)

**Estimated time:** 3-5 hours
```

### Example 2: Create Date Formatter Utility

```markdown
**Title:** Build flexible date formatting utility

**Labels:** `intermediate`, `hacktoberfest`, `feature`

**Description:**

Create a utility for formatting dates in various common formats.

**Problem statement:**

Developers frequently need to format dates for display. We need a simple, flexible utility that handles common date formatting patterns.

**Technical details:**

**File:** `utilities/formatters/date-formatter.js`

**Functions to implement:**

```javascript
export function formatDate(date, format) {
  // Formats: 'YYYY-MM-DD', 'MM/DD/YYYY', 'DD-MM-YYYY', etc.
}

export function formatDateTime(date, format) {
  // Includes time: 'YYYY-MM-DD HH:mm:ss'
}

export function formatRelative(date) {
  // "2 hours ago", "3 days ago", "just now"
}
```

**Implementation requirements:**

- Accept Date objects or ISO string
- Support common format tokens (YYYY, MM, DD, HH, mm, ss)
- Calculate relative time differences
- Handle invalid input gracefully

**Testing strategy:**

- Unit tests for each format type
- Test edge cases (invalid dates, future dates)
- Test relative time with various time differences

**Acceptance criteria:**

- [ ] All three functions implemented
- [ ] Supports specified format tokens
- [ ] Comprehensive test coverage
- [ ] JSDoc with examples
- [ ] Error handling for invalid input
- [ ] README.md updated with new utility

**Estimated time:** 4-6 hours
```

## Level 4: Advanced

### Example 1: Set Up CI/CD Pipeline

```markdown
**Title:** Implement GitHub Actions CI/CD pipeline

**Labels:** `advanced`, `hacktoberfest`, `infrastructure`

**Description:**

Set up a comprehensive CI/CD pipeline using GitHub Actions to automate testing, linting, and deployment workflows.

**Problem statement:**

Currently, tests and code quality checks are run manually. We need automated pipelines to:
- Run tests on every PR
- Check code quality
- Enforce code standards
- Automate releases

**Proposed architecture:**

Three GitHub Actions workflows:

1. **PR Checks** (`pr-checks.yml`)
   - Run on: Pull requests to main
   - Jobs: Lint, type check, run tests
   - Block merge if failing

2. **Main Branch** (`main.yml`)
   - Run on: Push to main
   - Jobs: Full test suite, build, deploy docs

3. **Release** (`release.yml`)
   - Run on: Tag push (v*.*.*)
   - Jobs: Build, create GitHub release, publish package

**Technical specification:**

**Workflow 1: PR Checks**
```yaml
name: PR Checks
on:
  pull_request:
    branches: [main]
jobs:
  test:
    # Implement comprehensive checks
```

**Requirements:**
- Node.js matrix testing (versions 18, 20, 22)
- Run on ubuntu-latest
- Cache node_modules
- Upload test coverage reports
- Comment PR with results

**Implementation phases:**

**Phase 1:** Basic test workflow
**Phase 2:** Add linting and type checking
**Phase 3:** Add coverage reporting
**Phase 4:** Implement release automation

**Acceptance criteria:**

- [ ] All three workflows implemented
- [ ] Tests run on multiple Node versions
- [ ] Failing tests block PR merge
- [ ] Coverage reports uploaded to codecov
- [ ] Release workflow creates GitHub releases
- [ ] Documentation for workflows added
- [ ] Badge added to README.md

**Security considerations:**

- Use dependabot for dependency updates
- Implement secret scanning
- Set up CODEOWNERS file

**Documentation requirements:**

- Add `.github/workflows/README.md`
- Document each workflow purpose
- Include badge setup instructions

**Estimated time:** 8-12 hours
```

### Example 2: Design Plugin System

```markdown
**Title:** Create extensible plugin architecture

**Labels:** `advanced`, `hacktoberfest`, `architecture`

**Description:**

Design and implement a plugin system that allows developers to extend TORC Toolbelt functionality.

**Problem statement:**

As the toolbelt grows, we need a way for contributors to add functionality without modifying core code. A plugin system enables:
- Third-party extensions
- Modular architecture
- Easy maintenance
- Community contributions

**Proposed architecture:**

**Core components:**

1. **Plugin Manager** - Discovers, loads, validates plugins
2. **Plugin Interface** - Standard API for plugins
3. **Plugin Registry** - Tracks installed plugins
4. **Lifecycle Hooks** - Before/after execution hooks

**System design:**

```javascript
// Plugin interface
export class Plugin {
  constructor(options) {}
  async initialize() {}
  async execute(context) {}
  async cleanup() {}
}

// Plugin Manager
export class PluginManager {
  async loadPlugin(path) {}
  async executePlugin(name, context) {}
  async listPlugins() {}
}
```

**Technical specification:**

**File structure:**
```
plugins/
├── core/
│   ├── PluginManager.js
│   ├── Plugin.js
│   └── Registry.js
├── examples/
│   └── example-plugin.js
└── README.md
```

**Features:**

- Dynamic plugin loading
- Plugin validation
- Dependency resolution
- Error isolation (one plugin failure doesn't crash system)
- Configuration management
- Plugin versioning

**Implementation strategy:**

**Phase 1:** Core plugin manager and interface
**Phase 2:** Plugin discovery and loading
**Phase 3:** Lifecycle hooks and events
**Phase 4:** Plugin registry and CLI commands
**Phase 5:** Example plugins and documentation

**Testing strategy:**

- Unit tests for core components
- Integration tests for plugin loading
- Example plugin as test case
- Error handling tests

**Acceptance criteria:**

- [ ] Plugin interface defined and documented
- [ ] Plugin manager with load/execute/list functionality
- [ ] Plugin validation and error handling
- [ ] At least 2 example plugins
- [ ] Comprehensive test suite
- [ ] API documentation
- [ ] Plugin development guide
- [ ] CLI commands for plugin management

**Performance considerations:**

- Lazy loading of plugins
- Plugin caching
- Efficient dependency resolution

**Security considerations:**

- Plugin sandboxing
- Permission system
- Code signing (future)

**Documentation requirements:**

- Architecture Decision Record (ADR)
- Plugin development guide
- API reference documentation
- Example plugin walkthrough

**Resources:**

- Research existing plugin systems (Webpack, Rollup, ESLint)
- Review Node.js module loading
- Study dependency injection patterns

**Estimated time:** 12-20 hours

**Discussion:**

Before implementing, please comment with:
1. Your proposed approach
2. Any concerns or alternative designs
3. Questions about requirements
```

## Creating Your Own Issues

Use these examples as templates. For each issue:

1. **Be specific** - Clear requirements prevent confusion
2. **Set expectations** - Time estimates and difficulty levels
3. **Provide context** - Why is this needed?
4. **Include examples** - Show expected input/output
5. **List criteria** - Clear acceptance criteria
6. **Add labels** - Properly categorize with difficulty and hacktoberfest labels
7. **Link resources** - Help contributors find relevant information

## Hacktoberfest Labeling

For issues to count toward Hacktoberfest:

- Add the `hacktoberfest` label to all valid issues
- Ensure issues represent meaningful work
- Avoid creating issues that are too trivial or spam-like
- Review and approve quality contributions quickly
- Mark spam PRs as `invalid` or `spam`

---

Happy issue creating! These examples should give you a solid foundation for populating your repository with quality contribution opportunities.
