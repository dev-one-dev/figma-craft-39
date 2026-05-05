# Git Commit Conventions

All commits must follow the [Conventional Commits v1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) specification.

## Format

```
<type>[optional scope]: <description>
```

## Types

| Type | When to use |
|---|---|
| `feat` | New feature |
| `fix` | Bug fix |
| `refactor` | Code restructure without behaviour change |
| `style` | Formatting, whitespace, lint fixes |
| `test` | Adding or updating tests |
| `docs` | Documentation only |
| `chore` | Build process, dependencies, config |
| `perf` | Performance improvement |
| `ci` | CI/CD pipeline changes |

## Scope (optional)

Use the route name, component name, or module in lowercase:

```
feat(widget): add vote count animation
fix(footer): correct swapped privacy and terms links
perf(ca): lazy-load pricing and footer SVGs
style(header): fix spacing on mobile nav drawer
```

## Rules

- Use **present tense**: `add feature` not `added feature`
- Use **lowercase** for the description
- Keep the description **concise** (under 72 characters)
- Breaking changes must append `!` after the type/scope:

```
feat(auth)!: replace anonymous sessions with Supabase Auth
```

## Examples

```
feat(widget): add similar ideas list to AI preview step
fix(footer): swap /privacy and /terms link labels
fix(layout): replace overflow-x-hidden with overflow-x-clip on main
perf(ca): add loading=lazy to InfoCards and Footer images
perf(hero): add poster and preload=metadata to hero video
refactor(widget): extract useMotionCapabilities to shared hook
docs(readme): add project overview and getting started guide
chore(deps): remove unused react-query and recharts packages
fix(root): mount Toaster so widget error toasts are visible
feat(root): add favicon using logo-mark.svg
```
