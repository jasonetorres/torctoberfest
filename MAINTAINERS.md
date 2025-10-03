# Maintainer Guide

Guide for maintaining the TORC Toolbelt repository, especially during Hacktoberfest.

## Table of Contents

- [Responsibilities](#responsibilities)
- [Issue Management](#issue-management)
- [Pull Request Review](#pull-request-review)
- [Hacktoberfest Management](#hacktoberfest-management)
- [Communication Guidelines](#communication-guidelines)
- [Quality Standards](#quality-standards)

## Responsibilities

As a maintainer, you are responsible for:

- Triaging and labeling issues
- Reviewing and merging pull requests
- Providing constructive feedback to contributors
- Maintaining code quality standards
- Fostering a welcoming community
- Managing Hacktoberfest participation
- Keeping documentation up to date

## Issue Management

### Creating Issues

When creating new issues:

1. **Use appropriate templates**
   - Choose the right difficulty level template
   - Fill out all sections completely

2. **Write clear descriptions**
   - Explain what needs to be done
   - Provide context and examples
   - List acceptance criteria
   - Estimate time required

3. **Add proper labels**
   - Difficulty level: `good first issue`, `beginner`, `intermediate`, `advanced`
   - Type: `bug`, `feature`, `documentation`, `enhancement`
   - Event: `hacktoberfest` (if eligible)
   - Status: `help wanted`, `blocked`, etc.

### Labeling Strategy

**Difficulty Labels:**
- `good first issue` - Process-focused tasks for first-time contributors
- `beginner` - Small coding tasks requiring basic skills
- `intermediate` - Feature implementation requiring planning
- `advanced` - Complex architectural work

**Type Labels:**
- `bug` - Something isn't working
- `feature` - New functionality
- `enhancement` - Improve existing functionality
- `documentation` - Documentation improvements
- `testing` - Test coverage improvements
- `infrastructure` - CI/CD, tooling, etc.

**Status Labels:**
- `help wanted` - Actively seeking contributors
- `blocked` - Waiting on dependencies
- `in progress` - Someone is working on it
- `needs review` - Ready for maintainer review

**Special Labels:**
- `hacktoberfest` - Counts toward Hacktoberfest
- `invalid` - Not a valid contribution
- `spam` - Spam PR
- `duplicate` - Duplicate issue/PR

### Triaging Issues

**Daily tasks:**

1. Review new issues
2. Add appropriate labels
3. Respond to questions
4. Close duplicates or invalid issues
5. Update issue status as needed

**Weekly tasks:**

1. Review stale issues (no activity for 7+ days)
2. Check if claimed issues have progress
3. Reassign abandoned issues
4. Update documentation based on common questions

## Pull Request Review

### Review Timeline

Aim to provide initial feedback within:

- Good first issues: 24 hours
- Beginner issues: 24-48 hours
- Intermediate issues: 48-72 hours
- Advanced issues: 3-5 days

### Review Checklist

For every PR, check:

**Code Quality**
- [ ] Code follows project style guidelines
- [ ] No unnecessary code or comments
- [ ] Proper error handling
- [ ] Input validation where needed
- [ ] No security vulnerabilities

**Documentation**
- [ ] JSDoc comments on all functions
- [ ] Usage examples included
- [ ] README updated if needed
- [ ] Clear commit messages

**Testing**
- [ ] Tests included for new functionality
- [ ] All tests pass
- [ ] Edge cases covered
- [ ] No broken functionality

**Process**
- [ ] PR template filled out
- [ ] Issue reference included
- [ ] One issue per PR (focused changes)
- [ ] Clean commit history

### Providing Feedback

**Be constructive:**
```markdown
Great work on this utility! A few suggestions:

1. Could you add JSDoc comments to the helper function?
2. Let's add a test case for empty string input
3. Consider renaming `temp` to `temperature` for clarity

Once these are addressed, this will be ready to merge!
```

**Be specific:**
```markdown
On line 23, we should validate the input before processing:

```javascript
if (typeof input !== 'string') {
  throw new TypeError('Input must be a string');
}
```

This prevents runtime errors with invalid input.
```

**Be encouraging:**
```markdown
This is a solid first contribution! Welcome to open source!

The logic looks good. Just a couple small things to clean up and we're good to go.
```

### Approving PRs

Before merging:

1. All CI checks pass
2. Code review approved
3. No merge conflicts
4. Acceptance criteria met
5. Documentation updated

After merging:

1. Thank the contributor
2. Close related issue
3. Add contributor to AUTHORS.md (if first contribution)
4. Update project board/milestones

## Hacktoberfest Management

### Preparation (Before October)

1. **Populate issues**
   - Create 20-30 issues across all difficulty levels
   - Ensure clear descriptions and acceptance criteria
   - Add `hacktoberfest` label

2. **Update documentation**
   - Review all docs for accuracy
   - Update HACKTOBERFEST.md
   - Ensure setup guide is current

3. **Test workflows**
   - Verify CI/CD pipelines work
   - Test issue templates
   - Confirm labels are configured

### During Hacktoberfest (October)

1. **Daily monitoring**
   - Check for new issues and PRs
   - Respond to comments quickly
   - Merge approved PRs promptly
   - Mark spam/invalid PRs immediately

2. **Quality control**
   - Watch for spam PRs
   - Ensure contributions are meaningful
   - Mark low-quality work as `invalid`
   - Block repeat offenders if necessary

3. **Community engagement**
   - Welcome new contributors
   - Answer questions promptly
   - Celebrate contributions
   - Share progress updates

### Handling Spam

**Identifying spam:**
- Whitespace-only changes
- Meaningless commits
- Automated/bot PRs
- Copied code without understanding
- Multiple low-quality PRs from same user

**Response:**
1. Mark PR with `spam` or `invalid` label
2. Close immediately with explanation
3. Report to Hacktoberfest if severe
4. Block user if repeated behavior

**Example comment:**
```markdown
This PR does not constitute a meaningful contribution and has been marked as spam.

Please review our [Contributing Guidelines](CONTRIBUTING.md) and [Hacktoberfest Guide](HACKTOBERFEST.md) for information on what makes a valid contribution.

Repeated spam submissions may result in being blocked from this repository.
```

### Managing High Volume

**If overwhelmed:**

1. **Prioritize**
   - Review good first issues first
   - Fast-track well-written PRs
   - Delegate reviews to trusted contributors

2. **Set expectations**
   - Update README with current response times
   - Pin an issue about high volume
   - Be transparent about delays

3. **Recruit help**
   - Ask experienced contributors to help review
   - Give temporary maintainer access if needed
   - Share the load with team members

## Communication Guidelines

### Tone

- Professional but friendly
- Encouraging and supportive
- Patient with newcomers
- Clear and concise
- Constructive, not critical

### Response Templates

**Welcoming first-time contributor:**
```markdown
Welcome to open source, @username! This is a great first contribution.

I've left a few suggestions in the review. Don't hesitate to ask if anything is unclear!
```

**Requesting changes:**
```markdown
Thanks for the contribution! This is on the right track.

Could you please make the following changes:
1. [Specific change]
2. [Specific change]

Let me know if you have questions!
```

**Approving and merging:**
```markdown
Excellent work, @username! This is exactly what we needed.

Merging now. Thanks for contributing to TORC Toolbelt! 🎉

Your name will be added to AUTHORS.md shortly.
```

**Marking as spam:**
```markdown
This PR appears to be spam or does not constitute a meaningful contribution.

Valid contributions include:
- New utility functions with tests
- Bug fixes with proper documentation
- Meaningful documentation improvements

Please review our [Contributing Guidelines](CONTRIBUTING.md) before submitting future PRs.
```

## Quality Standards

### Code Standards

- Follows ESLint configuration
- Proper JSDoc comments
- Meaningful variable names
- Error handling included
- Input validation where needed

### Test Standards

- Tests for all new functionality
- Edge cases covered
- Error conditions tested
- Clear test descriptions

### Documentation Standards

- All functions documented
- Usage examples provided
- README updated for new utilities
- Clear and concise writing

## Tools and Automation

### GitHub Actions

Monitor CI/CD workflows:
- Check for failures
- Update workflows as needed
- Add new checks when beneficial

### Issue/PR Templates

Keep templates up to date:
- Revise based on common questions
- Add helpful examples
- Improve clarity

### Labels

Maintain consistent labeling:
- Review label usage monthly
- Add new labels if needed
- Ensure labels are descriptive

## Recognition

Celebrate contributions:

- Thank contributors publicly
- Share highlights in discussions
- Add contributors to AUTHORS.md
- Consider "contributor of the month"

## Conflict Resolution

If conflicts arise:

1. Stay calm and professional
2. Focus on facts, not personalities
3. Refer to Code of Conduct
4. Give benefit of the doubt
5. Escalate to senior maintainers if needed

## Burnout Prevention

Maintaining is demanding:

- Set boundaries on response times
- Take breaks during high-volume periods
- Share responsibilities with team
- Don't feel obligated to respond immediately
- It's okay to close invalid issues/PRs quickly

## Resources

- [GitHub Docs - Maintaining Projects](https://docs.github.com/en/communities)
- [Hacktoberfest Maintainer Resources](https://hacktoberfest.com/participation/#maintainers)
- [Open Source Guides](https://opensource.guide/)

---

Thank you for maintaining TORC Toolbelt! Your work makes this community possible.
