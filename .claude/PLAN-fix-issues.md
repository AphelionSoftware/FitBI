# Fix Outstanding Issues — FitBI Frontend

**How to resume:** Read this file, find the first unchecked `- [ ]` item, and continue from there.
Each task names the exact file(s) to touch. Mark `- [x]` immediately after finishing each step, then commit.

---

## Issues Found

### 1. Bug — Pinia getter/action name conflict (`exerciseStore.js`)
`getExerciseByID` is declared as both a getter and an action. In Pinia the action shadows the getter, making the getter unreachable. The getter is renamed to `exerciseById` (camelCase noun, per `vue.md`); the action is renamed to `loadExerciseByID` to clarify it is a side-effect action that sets `ExerciseItem`.
- Files: `src/stores/exerciseStore.js`, `src/router/index.js`

### 2. Dead/empty files
Three files contain no implementation:
- `src/api/sync.js` — comment only; no callers
- `src/token.js` — empty export; retained for backward-compat that no longer exists
- `src/components/FitPaneWeight.vue` — stub (`<q-layout />`); no callers

### 3. Layout component in wrong directory and misnamed
Per `quasar.md`: layouts live in `src/layouts/` with a `Layout` suffix.
`src/components/FitLayoutPrimary.vue` → `src/layouts/MainLayout.vue`
Callers: `src/router/index.js` (3 import statements).

### 4. Page components in wrong directory
Per `quasar.md`: pages live in `src/pages/`. Current locations:

| Current | Target |
|---------|--------|
| `src/components/Error404Page.vue` | `src/pages/Error404Page.vue` |
| `src/components/IndexPage.vue` | `src/pages/IndexPage.vue` |
| `src/components/pages/FitWeightPage.vue` | `src/pages/FitWeightPage.vue` |
| `src/components/pages/FitExercisesPage.vue` | `src/pages/FitExercisesPage.vue` |
| `src/components/pages/FitMeasurementsPage.vue` | `src/pages/FitMeasurementsPage.vue` |
| `src/components/pages/kb/ExerciseEditPage.vue` | `src/pages/kb/ExerciseEditPage.vue` |

Callers: `src/router/index.js` (all 6), `src/pages/IndexPage.vue` imports `FitWeightPage`.
After move, `src/components/pages/` directory (and `kb/` subdir) becomes empty and is deleted.

### 5. Routes have no `name` properties
Per `quasar.md`: "Route name: camelCase — `home`, `trailDetail`, `budgetOverview`"
All routes in `src/router/index.js` are missing `name:` keys.

### 6. Route parameter `exerciseid` is not camelCase
`:exerciseid` violates the camelCase path-param convention. Must be `:exerciseId`.
Callers: `src/router/index.js` (`beforeEnter` reads `to.params.exerciseid`),
`src/pages/FitExercisesPage.vue` (uses string concat navigation).

### 7. Navigation uses string concatenation instead of named route
`FitExercisesPage.vue`: `router.push('/kb/exercise-edit/' + id)` must become
`router.push({ name: 'exerciseEdit', params: { exerciseId: id } })`.
Depends on fix 5 (route names) and fix 6 (param rename).

---

## Fix Checklist

- [x] **Fix 1** — Rename getter `getExerciseByID` → `exerciseById` and action `getExerciseByID` → `loadExerciseByID` in `exerciseStore.js`; update call site in `router/index.js`
- [x] **Fix 2** — Delete `src/api/sync.js`, `src/token.js`, `src/components/FitPaneWeight.vue`
- [x] **Fix 3** — Move `src/components/FitLayoutPrimary.vue` → `src/layouts/MainLayout.vue` (rename, update `name` property inside); update 3 imports in `router/index.js`
- [x] **Fix 4** — Create `src/pages/` and `src/pages/kb/`; move 6 page components; update router imports; delete empty `src/components/pages/`
- [x] **Fix 5** — Add `name:` property to every route in `router/index.js` (camelCase)
- [x] **Fix 6** — Rename `:exerciseid` → `:exerciseId` in route path and `beforeEnter`; update `router/index.js`
- [x] **Fix 7** — Replace string-concat navigation in `FitExercisesPage.vue` with named-route object
