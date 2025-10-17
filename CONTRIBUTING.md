# Contributing to The Clan Hearth

Thanks for wanting to contribute! This document contains a short checklist and a few tips for small changes and PRs.

Quick checklist (local)

- Checkout a new branch from `main`:

```bash
git checkout -b fix/your-description
```

- Install exact dependencies and build the production CSS (same as CI):

```bash
npm ci
npm run build:css:prod
```

- Verify there are no build errors and don't commit compiled files under `css/`.

What to include in a PR

- A concise description of the change and why it helps.
- Steps to reproduce (if the PR fixes a bug).
- Any screenshots or GIFs for visual changes.

Small guidelines

- Keep commits small and focused.
- Use descriptive commit messages.
- Keep generated assets out of the repo (`css/*.css` is ignored).

If you're unsure about a change, open an issue or draft PR and we can iterate.

Thank you for contributing — your help improves the project for everyone!
