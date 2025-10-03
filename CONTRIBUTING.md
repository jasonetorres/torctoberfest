# Contributing to TORC Toolbelt

Thank you for your interest in contributing to TORC Toolbelt! This guide will walk you through the entire process, from finding an issue to getting your pull request merged.

## Table of Contents

- [Getting Started](#getting-started)
- [Finding an Issue](#finding-an-issue)
- [Setting Up Your Environment](#setting-up-your-environment)
- [Making Changes](#making-changes)
- [Submitting a Pull Request](#submitting-a-pull-request)
- [Code Standards](#code-standards)
- [Review Process](#review-process)
- [Hacktoberfest Guidelines](#hacktoberfest-guidelines)

## Getting Started

### Prerequisites

- A GitHub account
- Git installed on your computer
- Node.js (v18 or higher) and npm installed
- A code editor (VS Code, Sublime, etc.)

### First Time Contributors

If this is your first time contributing to open source, welcome! We recommend starting with issues labeled `good first issue`. These are specifically designed to help you learn the contribution process.

## Finding an Issue

1. Browse the [Issues page](../../issues)
2. Filter by labels to match your skill level:
   - `good first issue` - Great for first-time contributors
   - `beginner` - Requires basic coding knowledge
   - `intermediate` - More complex features
   - `advanced` - Challenging architectural work
3. Look for the `hacktoberfest` label for Hacktoberfest-eligible issues
4. Comment on the issue to express interest before starting work

## Setting Up Your Environment

### Step 1: Fork the Repository

Click the "Fork" button at the top right of this repository. This creates your own copy of the project.

### Step 2: Clone Your Fork

```bash
# Replace YOUR-USERNAME with your GitHub username
git clone https://github.com/YOUR-USERNAME/torc-toolbelt.git
cd torc-toolbelt
```

### Step 3: Add Upstream Remote

This allows you to keep your fork updated with the main repository:

```bash
git remote add upstream https://github.com/ORIGINAL-OWNER/torc-toolbelt.git
```

### Step 4: Install Dependencies

```bash
npm install
```

### Step 5: Verify Setup

```bash
# Run tests to make sure everything works
npm test
```

## Making Changes

### Step 1: Create a New Branch

Always create a new branch for your changes. Never work directly on `main`.

```bash
git checkout -b descriptive-branch-name
```

Branch naming conventions:
- `fix/issue-description` for bug fixes
- `feat/feature-name` for new features
- `docs/what-you-changed` for documentation updates
- `test/what-you-tested` for adding tests

### Step 2: Make Your Changes

- Write clear, readable code
- Follow existing code style and conventions
- Add comments where necessary (but prefer self-documenting code)
- Include tests for new functionality
- Update documentation if needed

### Step 3: Test Your Changes

```bash
# Run all tests
npm test

# Run linter
npm run lint

# Type check (if applicable)
npm run typecheck
```

### Step 4: Commit Your Changes

Write clear, descriptive commit messages:

```bash
git add .
git commit -m "Add unit converter utility for temperature

- Implements Celsius to Fahrenheit conversion
- Implements Fahrenheit to Celsius conversion
- Includes input validation
- Adds comprehensive test suite"
```

Commit message guidelines:
- Use present tense ("Add feature" not "Added feature")
- First line should be 50 characters or less
- Add detailed description if needed after a blank line
- Reference issue numbers when applicable: "Fixes #123"

### Step 5: Push to Your Fork

```bash
git push origin your-branch-name
```

## Submitting a Pull Request

### Step 1: Create the Pull Request

1. Go to your fork on GitHub
2. Click "Compare & pull request"
3. Fill out the PR template with:
   - Clear title describing what you did
   - Description of changes
   - Issue number it addresses
   - Screenshots (if UI changes)
   - Testing steps

### Step 2: PR Template

Your PR should include:

```markdown
## Description
Brief description of what this PR does

## Related Issue
Fixes #(issue number)

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Code refactoring

## Testing
- [ ] Tests pass locally
- [ ] Added new tests for new functionality
- [ ] Manual testing completed

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No breaking changes
```

### Step 3: Wait for Review

A maintainer will review your PR. They may:
- Approve and merge it immediately
- Request changes
- Ask questions for clarification

Be patient and responsive to feedback!

## Code Standards

### JavaScript/TypeScript Style

- Use ES6+ syntax
- Prefer `const` over `let`, avoid `var`
- Use arrow functions for callbacks
- Use template literals for string interpolation
- Add JSDoc comments for functions:

```javascript
/**
 * Converts Celsius to Fahrenheit
 * @param {number} celsius - Temperature in Celsius
 * @returns {number} Temperature in Fahrenheit
 */
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}
```

### File Organization

- One utility per file
- Place related utilities in appropriate subdirectories
- Include a README.md in each utility directory
- Add tests in the `tests/` directory mirroring the source structure

### Testing

- Write tests for all new functionality
- Aim for high code coverage
- Test edge cases and error conditions
- Use descriptive test names

### Documentation

- Update README.md if adding new utilities
- Include usage examples
- Document parameters and return values
- Add inline comments for complex logic

## Review Process

1. **Initial Review**: A maintainer will review within 24-48 hours
2. **Feedback**: If changes are requested, make them and push to the same branch
3. **Approval**: Once approved, your PR will be merged
4. **Recognition**: You'll be added to AUTHORS.md

## Hacktoberfest Guidelines

To ensure your PR counts for Hacktoberfest:

### Quality Standards

- PRs must be meaningful contributions, not spam
- No simple typo fixes (unless part of a larger documentation improvement)
- Code must work and pass all tests
- Follow all guidelines in this document

### What Counts

✅ **Valid Contributions:**
- New utility functions with tests
- Bug fixes with test coverage
- Documentation improvements
- Refactoring existing code
- Adding test coverage
- Setting up CI/CD

❌ **Invalid Contributions:**
- Adding whitespace or formatting changes only
- Deleting code without reason
- Making irrelevant changes
- Copying code without attribution
- Automated or bot-generated PRs

### Disqualification

PRs may be marked as `invalid` or `spam` if they:
- Don't follow contribution guidelines
- Are low-quality or unhelpful
- Are copy-pasted without understanding
- Intentionally game the system

## Need Help?

- Comment on the issue you're working on
- Open a discussion in the [Discussions tab](../../discussions)
- Ask questions in your PR
- Review closed PRs for examples

## Code of Conduct

All contributors must follow our [Code of Conduct](CODE_OF_CONDUCT.md). Be respectful, inclusive, and constructive.

---

Thank you for contributing to TORC Toolbelt! Your efforts help make this project better for everyone.
