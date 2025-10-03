# Hacktoberfest Participation Guide

Welcome to TORC Toolbelt's Hacktoberfest participation! This guide provides everything you need to know about contributing during Hacktoberfest.

## What is Hacktoberfest?

Hacktoberfest is an annual celebration of open-source software. It's a month-long event in October that encourages people to contribute to open-source projects.

## How to Participate

### Registration

1. Register at [hacktoberfest.com](https://hacktoberfest.com) between September 15 and October 31
2. You'll unlock a digital badge when you register
3. Level up your badge with each accepted pull request

### Requirements

To complete Hacktoberfest:

- **Submit 6 high-quality pull/merge requests** between October 1 and October 31
- PRs must be made to repositories with the `hacktoberfest` topic
- PRs must be accepted by project maintainers
- PRs can be to any participating GitHub or GitLab project

## Contributing to TORC Toolbelt

### Finding Issues

All Hacktoberfest-eligible issues are labeled with `hacktoberfest`. Filter issues by:

- `good first issue` - Perfect for beginners
- `beginner` - Small, self-contained tasks
- `intermediate` - Feature implementation
- `advanced` - Complex architectural work

### Quality Standards

We value quality over quantity. Your contributions should:

- Solve a real problem
- Include proper documentation
- Have test coverage (when applicable)
- Follow our code style guidelines
- Be meaningful and well-thought-out

### What Counts as a Valid Contribution?

Valid contributions include:

- **Code contributions**
  - New utility functions
  - Bug fixes
  - Performance improvements
  - Refactoring existing code

- **Documentation**
  - Improving existing documentation
  - Writing new guides
  - Adding code examples
  - Translating documentation

- **Testing**
  - Writing unit tests
  - Adding integration tests
  - Improving test coverage

- **Configuration**
  - Adding useful config templates
  - Improving build processes
  - Setting up automation

### What Does NOT Count?

Invalid contributions include:

- **Spam or low-effort PRs**
  - Simple whitespace changes
  - Single-line typo fixes (unless part of larger documentation improvement)
  - Automated or bot-generated PRs
  - Copy-pasted code without understanding

- **Disruptive changes**
  - Breaking changes without discussion
  - Removing code without reason
  - Changes that don't add value

**Note:** Invalid PRs will be marked with `invalid` or `spam` labels and will not count toward Hacktoberfest.

## Step-by-Step Guide

### 1. Choose an Issue

Browse [open issues](../../issues?q=is%3Aissue+is%3Aopen+label%3Ahacktoberfest) and find one that matches your skill level.

### 2. Claim the Issue

Comment on the issue to let maintainers know you're working on it:

```
Hi! I'd like to work on this issue. I plan to [brief description of approach].
```

### 3. Set Up Your Environment

Follow our [Setup Guide](docs/SETUP.md) to:
- Fork the repository
- Clone your fork
- Install dependencies
- Verify your setup

### 4. Create a Branch

```bash
git checkout -b fix/descriptive-branch-name
```

### 5. Make Your Changes

- Write clean, well-documented code
- Follow existing patterns
- Add tests for new functionality
- Run tests locally

### 6. Test Your Changes

```bash
npm test
npm run lint
npm run typecheck
```

### 7. Commit and Push

```bash
git add .
git commit -m "Descriptive commit message"
git push origin your-branch-name
```

### 8. Create Pull Request

- Fill out the PR template completely
- Reference the issue number
- Explain your changes clearly
- Add screenshots if applicable

### 9. Respond to Feedback

- Address review comments promptly
- Ask questions if something is unclear
- Make requested changes
- Be patient and courteous

## Review Timeline

We aim to review PRs within:

- **Good first issues**: 24 hours
- **Beginner issues**: 24-48 hours
- **Intermediate issues**: 48-72 hours
- **Advanced issues**: 3-5 days

## Tips for Success

### Before You Start

- Read the issue description carefully
- Check if someone else is already working on it
- Ask questions if anything is unclear
- Review similar PRs for examples

### While Working

- Keep your PR focused on one issue
- Write clear, self-documenting code
- Add comments for complex logic
- Test edge cases
- Follow the existing code style

### When Submitting

- Use descriptive PR titles
- Fill out the entire PR template
- Include screenshots for UI changes
- Reference the issue number
- Be proud of your work!

### After Submitting

- Watch for review comments
- Respond to feedback constructively
- Be patient - maintainers are volunteers
- Thank reviewers for their time

## Common Mistakes to Avoid

1. **Not reading the contribution guidelines**
   - Always read CONTRIBUTING.md first

2. **Working on claimed issues**
   - Check comments before starting work

3. **Making too many changes in one PR**
   - Keep PRs focused on single issues

4. **Not testing locally**
   - Always run tests before submitting

5. **Ignoring code style**
   - Follow the project's coding standards

6. **Being impatient**
   - Reviews take time, be patient

## Getting Help

If you need help:

- **Issue comments**: Comment on the issue you're working on
- **Discussions**: Use [GitHub Discussions](../../discussions) for questions
- **Discord**: Join the [Hacktoberfest Discord](https://discord.gg/hacktoberfest)
- **Documentation**: Check our [docs folder](docs/)

## Recognition

All contributors are recognized in:

- [AUTHORS.md](AUTHORS.md) - Contributor list
- GitHub contributor graph
- PR acknowledgments
- Community shoutouts

## Code of Conduct

All participants must follow our [Code of Conduct](CODE_OF_CONDUCT.md). We are committed to providing a welcoming and inclusive environment.

Key points:

- Be respectful and inclusive
- Provide constructive feedback
- Accept criticism gracefully
- Focus on what's best for the community
- Welcome newcomers

## Disqualification

You may be disqualified from Hacktoberfest if you:

- Submit spam PRs
- Make low-quality contributions
- Violate the Code of Conduct
- Attempt to game the system
- Harass maintainers or contributors

## Maintainer Guidelines

For maintainers of this repository:

### Labeling Issues

- Add `hacktoberfest` label to all valid issues
- Use difficulty labels (`good first issue`, `beginner`, etc.)
- Add descriptive labels (`bug`, `feature`, `documentation`)

### Reviewing PRs

- Review promptly (within stated timelines)
- Provide constructive feedback
- Use PR templates
- Mark spam/invalid PRs appropriately
- Thank contributors for their work

### Managing Spam

- Mark spam PRs with `spam` or `invalid` label
- Close spam PRs immediately
- Report abusive behavior
- Block repeat offenders

## Resources

- [Hacktoberfest Official Site](https://hacktoberfest.com)
- [Hacktoberfest Discord](https://discord.gg/hacktoberfest)
- [GitHub Hacktoberfest Topic](https://github.com/topics/hacktoberfest)
- [Our Contributing Guide](CONTRIBUTING.md)
- [Our Code of Conduct](CODE_OF_CONDUCT.md)

## FAQ

### Q: How do I find beginner-friendly issues?

Filter issues by the `good first issue` label on our [issues page](../../issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22).

### Q: Can I work on multiple issues at once?

Yes, but we recommend focusing on one at a time, especially if you're new to open source.

### Q: What if I can't finish an issue I claimed?

Comment on the issue to let us know. It's okay to step back if you're stuck or too busy.

### Q: How long do I have to complete an issue?

We don't set strict deadlines, but if there's no activity for 7 days, we may reassign the issue.

### Q: Can I create my own issues?

Yes! If you find a bug or have an idea for improvement, please open an issue.

### Q: What if my PR is rejected?

Learn from the feedback and try again. Every contributor has had PRs rejected.

### Q: Do documentation changes count?

Yes! Good documentation is crucial and absolutely counts toward Hacktoberfest.

---

Ready to contribute? Start by browsing our [open issues](../../issues?q=is%3Aissue+is%3Aopen+label%3Ahacktoberfest)!

Happy Hacktoberfest!
