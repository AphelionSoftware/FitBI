# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

FitBI is a fitness tracking application ("Fit-Track") consisting of:

| Component | Stack |
|-----------|-------|
| **FitBi.Quasar** | Vue 3, Quasar 2, Vite, Pinia, vue-router 4, Firebase 11, axios 1 |
| **FitAPI.Functions** | .NET 8, Azure Functions v4 Isolated Worker, Dapper, SQL Server |
| **Database** | SQL Server / Azure SQL (SSDT project) |
| **TemplateCreator** | .NET 8 Windows Forms, SQL Server SMO |

## Rules Directory

All conventions live in `.claude/rules/`. Rules are sourced from the shared [dotfiles](https://github.com/MarkGStacey/dotfiles) repository — edit them there first, then pull here.

| File | Governs | Applies to |
|------|---------|-----------|
| `.claude/rules/workflow.md` | Planning before execution, resuming interrupted tasks, todo list discipline | All work |
| `.claude/rules/git.md` | Branch names, Conventional Commits format, PR/MR process, tags | All repos |
| `.claude/rules/csharp.md` | Type/member naming, Azure Functions conventions, Dapper, nullability, async | FitAPI.Functions, TemplateCreator |
| `.claude/rules/vue.md` | Component prefixes (`Base`, `The`), composables (`useXxx`), props, events, Pinia stores | FitBi.Quasar |
| `.claude/rules/quasar.md` | Pages (`XxxPage`), layouts (`XxxLayout`), boot files, env vars | FitBi.Quasar |
| `.claude/rules/supabase.md` | Table/column naming (reference only — project uses SQL Server, not Supabase) | — |
| `.claude/rules/powersync.md` | Sync schema conventions (reference only — not used in this project) | — |
| `.claude/rules/fastapi.md` | Route handler naming, Pydantic suffixes (reference only — backend is .NET) | — |
| `.claude/rules/fastmcp.md` | MCP tool/resource naming (reference only) | — |
| `.claude/rules/astro.md` | Astro component conventions (reference only — no Astro in this project) | — |

## Git Conventions

All commits follow Conventional Commits (`<type>(<scope>): <description>`).
See `.claude/rules/git.md` for the full specification.

The `commitlint.config.js` in `.linters/` can be wired up with Husky to enforce this automatically — see the comment header in that file for setup instructions.

## Linters

Pre-configured linter files live in `.linters/`:

| File | Purpose | Target |
|------|---------|--------|
| `.linters/eslint-vue-quasar.js` | ESLint flat config for Vue/Quasar naming conventions | FitBi.Quasar |
| `.linters/commitlint.config.js` | Commitlint — enforces Conventional Commits | All repos |
| `.linters/ruff.toml` | Ruff — Python linting/formatting (reference only — no Python in this project) | — |

To activate the ESLint config in `FitBi.Quasar`, create `FitBi.Quasar/eslint.config.js`:
```js
import vueQuasarConfig from '../.linters/eslint-vue-quasar.js'
export default [...vueQuasarConfig]
```

## Security

- **Never commit secrets.** API keys, connection strings, and access codes must not appear in source files. Use `.env` files (Vite: `VITE_*` prefix) and Azure App Settings.
- `src/config.js` currently contains hardcoded credentials — these must be moved to env vars before any deployment.
- See `.env.example` (to be created) as a template for required variables.

## Key Upgrade Context

The codebase was upgraded from a ~2018 stack in Feb 2026. See `UPGRADE.md` for the full migration guide, including:
- Azure Functions v1 → v4 isolated worker breaking changes
- Vue 2 → Vue 3 component migration notes
- Vuex → Pinia migration patterns
- Firebase 3 namespace API → Firebase 11 modular API
- T4 template update requirements
