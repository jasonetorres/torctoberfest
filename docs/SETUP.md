# Setup Guide

Complete guide to setting up the TORC Toolbelt development environment.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Git**: Version control system
  - Download: https://git-scm.com/
  - Verify: `git --version`

- **Node.js**: JavaScript runtime (v18 or higher)
  - Download: https://nodejs.org/
  - Verify: `node --version`

- **npm**: Package manager (comes with Node.js)
  - Verify: `npm --version`

- **Code Editor**: We recommend VS Code
  - Download: https://code.visualstudio.com/

## Installation Steps

### 1. Fork the Repository

1. Go to the [TORC Toolbelt repository](https://github.com/YOUR-ORG/torc-toolbelt)
2. Click the "Fork" button in the top right
3. This creates your own copy of the repository

### 2. Clone Your Fork

```bash
# Replace YOUR-USERNAME with your GitHub username
git clone https://github.com/YOUR-USERNAME/torc-toolbelt.git

# Navigate into the directory
cd torc-toolbelt
```

### 3. Add Upstream Remote

This allows you to keep your fork synchronized with the main repository:

```bash
git remote add upstream https://github.com/ORIGINAL-OWNER/torc-toolbelt.git

# Verify remotes
git remote -v
```

You should see:
```
origin    https://github.com/YOUR-USERNAME/torc-toolbelt.git (fetch)
origin    https://github.com/YOUR-USERNAME/torc-toolbelt.git (push)
upstream  https://github.com/ORIGINAL-OWNER/torc-toolbelt.git (fetch)
upstream  https://github.com/ORIGINAL-OWNER/torc-toolbelt.git (push)
```

### 4. Install Dependencies

```bash
npm install
```

This installs all required packages defined in `package.json`.

### 5. Verify Installation

Run the test suite to ensure everything is working:

```bash
npm test
```

All tests should pass (or show as pending if not yet implemented).

## Development Workflow

### Creating a New Branch

Always create a new branch for your work:

```bash
# Update your main branch first
git checkout main
git pull upstream main

# Create and switch to a new branch
git checkout -b feature/your-feature-name
```

### Making Changes

1. Make your code changes
2. Test your changes locally
3. Run linter to check code style

```bash
# Run tests
npm test

# Run linter
npm run lint

# Run type checking
npm run typecheck
```

### Committing Changes

```bash
# Stage your changes
git add .

# Commit with a descriptive message
git commit -m "Add temperature converter utility

- Implements Celsius to Fahrenheit conversion
- Includes input validation
- Adds comprehensive tests"
```

### Pushing Changes

```bash
# Push to your fork
git push origin feature/your-feature-name
```

### Creating a Pull Request

1. Go to your fork on GitHub
2. Click "Compare & pull request"
3. Fill out the PR template
4. Submit the PR

## Keeping Your Fork Updated

Regularly sync your fork with the upstream repository:

```bash
# Fetch upstream changes
git fetch upstream

# Switch to your main branch
git checkout main

# Merge upstream changes
git merge upstream/main

# Push to your fork
git push origin main
```

## VS Code Setup (Recommended)

### Recommended Extensions

- ESLint
- Prettier
- GitLens
- JavaScript and TypeScript Nightly

### Settings

Create `.vscode/settings.json` in your project:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Troubleshooting

### npm install fails

Try clearing the cache:
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Tests fail on fresh clone

Ensure you're using Node.js v18 or higher:
```bash
node --version
```

### Git push fails

Ensure you're pushing to your fork, not the upstream:
```bash
git remote -v
```

If `origin` points to the wrong repository, update it:
```bash
git remote set-url origin https://github.com/YOUR-USERNAME/torc-toolbelt.git
```

## Getting Help

- Check existing [Issues](../../issues)
- Start a [Discussion](../../discussions)
- Review [Contributing Guidelines](../CONTRIBUTING.md)
- Comment on the issue you're working on

## Next Steps

Now that you're set up:

1. Browse [open issues](../../issues)
2. Find one labeled `good first issue`
3. Comment that you'd like to work on it
4. Start coding!

Happy contributing!
