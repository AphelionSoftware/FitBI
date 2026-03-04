# Outstanding Issues Plan

**How to resume:** Read this file, find the first unchecked `- [ ]` item, and continue from there.
Each task names the exact file(s) to touch. Mark `- [x]` immediately after finishing each step, then commit.

---

## Issue 1 — FitExercisesPage.vue: `$router` in template

**File:** `FitBi.Quasar/src/components/pages/FitExercisesPage.vue`
**Problem:** Line 10 uses `$router.push(...)` directly in the template. Per Phase 4 rules,
`$router` / `$route` template globals must be replaced with `useRouter()` / `useRoute()` composables.
**Fix:** Add `useRouter()` to `setup()`, expose a `navigateToEdit(id)` method, call it from the template.

- [x] Edit `FitBi.Quasar/src/components/pages/FitExercisesPage.vue`
- [x] Commit: `fix(frontend): replace $router template global with useRouter composable`

---

## Issue 2 — Error404.vue: Vue 2 Options API

**File:** `FitBi.Quasar/src/components/Error404.vue`
**Problem:** Uses Vue 2 `data()` and `methods` options. Must be Composition API (`<script setup>`).
**Fix:** Convert to `<script setup>` using `const canGoBack = window.history.length > 1`
and `function goBack() { window.history.go(-1) }`.

- [x] Edit `FitBi.Quasar/src/components/Error404.vue`
- [x] Commit: `fix(frontend): convert Error404 to script setup`

---

## Issue 3 — Index.vue: dead Vue 2 lifecycle code

**File:** `FitBi.Quasar/src/components/Index.vue`
**Problem:** Uses Vue 2-style `mounted()`, `this.$nextTick()`, `beforeUnmount()`, and `methods`
to attach an empty `move()` no-op to `mousemove`/`touchmove`. The handler does nothing — it is
pure dead code.
**Fix:** Remove the `mounted`, `beforeUnmount`, and `methods` blocks entirely. Convert the
remaining component (just a named wrapper with one child component) to `<script setup>`.

- [x] Edit `FitBi.Quasar/src/components/Index.vue`
- [x] Commit: `fix(frontend): remove dead lifecycle code and convert Index to script setup`

---

## Issue 4 — ExerciseEditPage.vue: `beforeRouteLeave` as Options API

**File:** `FitBi.Quasar/src/components/pages/kb/ExerciseEditPage.vue`
**Problem:** Mixes Composition API `setup()` with the Options API navigation guard
`beforeRouteLeave(to, from, next)`. In Vue Router 4, `next(false)` is deprecated. The
composable-equivalent is `onBeforeRouteLeave` from `vue-router`.
**Fix:** Import `onBeforeRouteLeave` from `vue-router`, move the guard logic inside `setup()`,
replace `next(false)` with `return false` and remove the `next()` calls.

- [x] Edit `FitBi.Quasar/src/components/pages/kb/ExerciseEditPage.vue`
- [x] Commit: `fix(frontend): replace beforeRouteLeave option with onBeforeRouteLeave composable`

---

## Issue 5 — docker.yml: hardcoded `VITE_API_BASE_URL`

**File:** `.github/workflows/docker.yml`
**Problem:** Line 27 hard-codes `VITE_API_BASE_URL=https://fitapifunctions.azurewebsites.net/api`
as a Docker build-arg. This bakes the URL into every image and cannot be changed at runtime without
rebuilding — and it leaks the backend endpoint publicly in CI logs.
**Fix:** Replace the literal value with `${{ secrets.VITE_API_BASE_URL }}` so it comes from
a GitHub Actions repository secret (same pattern as the other secrets already used).

- [x] Edit `.github/workflows/docker.yml`
- [x] Commit: `fix(ci): source VITE_API_BASE_URL from secret in Docker build`

---

## Issue 6 — ci.yml: missing lint step

**File:** `.github/workflows/ci.yml`
**Problem:** The frontend job installs dependencies and builds but never runs `npm run lint`.
Phase 10 of the upgrade plan requires lint to pass as part of CI.
**Fix:** Add a `Lint` step between `Install dependencies` and `Build`. Lint does not need the
`VITE_*` environment variables so no extra env block is needed.

- [x] Edit `.github/workflows/ci.yml`
- [x] Commit: `fix(ci): add npm run lint step to frontend job`

---

## Issue 7 — PLAN-upgrade.md: mark Phase 10 lint item done

**File:** `.claude/PLAN-upgrade.md`
**Problem:** The `- [ ] Run npm run lint …` item is still unchecked now that linting is wired
into CI and the code issues that would cause lint failures are fixed.
**Fix:** Mark the item checked.

- [x] Edit `.claude/PLAN-upgrade.md`
- [x] Commit: `chore: mark Phase 10 lint task complete in upgrade plan`

---

## Completion checklist

- [x] All 7 issues above fixed and committed
- [x] `FitBi.Quasar/src/components/pages/FitExercisesPage.vue` — no `$router` in template
- [x] `FitBi.Quasar/src/components/Error404.vue` — `<script setup>`
- [x] `FitBi.Quasar/src/components/Index.vue` — `<script setup>`, no dead lifecycle code
- [x] `FitBi.Quasar/src/components/pages/kb/ExerciseEditPage.vue` — `onBeforeRouteLeave` inside `setup()`
- [x] `.github/workflows/docker.yml` — no hardcoded URL in build-args
- [x] `.github/workflows/ci.yml` — lint step present in frontend job
- [x] `.claude/PLAN-upgrade.md` — Phase 10 lint item checked
