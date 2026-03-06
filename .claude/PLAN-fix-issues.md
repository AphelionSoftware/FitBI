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

## Round 2 Issues (found during review pass)

### 8. Critical — App initialization never called
`loadCoreData()` and `loadInitData()` in `src/api/api.js` are exported but never called anywhere.
The app starts with all stores empty; users see no data.
Fix: add `src/boot/init.js` that calls both on startup using `config.UserID`; register it in `quasar.config.js`.
Files: `src/boot/init.js` (new), `quasar.config.js`

### 9. Bug — Dead navigation links in MainLayout.vue
Sidebar has two links with no matching route:
- `:to="'/record/eat'"` — no route defined
- `:to="'/program/calendar'"` — no route defined
Both navigate to `Error404Page`. Remove the sidebar items until those features are built.
File: `src/layouts/MainLayout.vue`

### 10. Dead code — IndexPage.vue never routed
`src/pages/IndexPage.vue` is not referenced in the router. It also nests a `<q-page>` inside
another `<q-page>` (via `FitWeightPage`) which is invalid Quasar. Delete the file.
File: `src/pages/IndexPage.vue`

### 11. Convention — Store state properties are PascalCase, must be camelCase
All five stores use PascalCase for state properties (`Exercise`, `ExerciseItem`, `ExerciseList`, …).
Per `vue.md`: state properties must be camelCase. This requires a rename in each store and
updating all callers. External references are limited: only `ExerciseEditPage.vue` accesses state
directly (`store.ExerciseItem`, `store.Exercise[id]`). All other callers go through actions/getters.
Files (one commit per store, then one commit for external callers):
`src/stores/coreStore.js`, `src/stores/exerciseStore.js`, `src/stores/programStore.js`,
`src/stores/statsStore.js`, `src/stores/weightMeasurementStore.js`,
`src/pages/kb/ExerciseEditPage.vue`

### 12. Convention — Action names contain underscores
`setExercise_SportList` and `setWorkout_ExerciseList` violate camelCase.
Must be `setExerciseSportList` / `setWorkoutExerciseList`.
Callers: `src/api/initSetup.js`
Files: `src/stores/exerciseStore.js`, `src/stores/programStore.js`, `src/api/initSetup.js`

### 13. Convention — Getter names use verb-first (`getXxx`) not noun/adjective
Per `vue.md`: "Getters: camelCase noun/adjective — `filteredTrails`, `isAuthenticated`".
Affects all stores. The `exerciseById` getter introduced in Fix 1 is already correct.
All `getXxx` / `getXxxAll` getters need to be renamed (e.g., `getExerciseAll` → `allExercises`).
Callers must be updated; main one is `FitExercisesPage.vue` (`exerciseStore.getExerciseAll`).
Files: all 5 stores + any component using a getter directly.

### 14. Minor bug — ExerciseEditPage.vue confirm message is misleading
The `onBeforeRouteLeave` guard shows "you have unsaved changes!" but if the user confirms,
it calls `saveExercise()` and leaves — so changes ARE saved. The message should read
"Save changes and leave?" or split into a real save/discard choice.
File: `src/pages/kb/ExerciseEditPage.vue`

---

## Fix Checklist

- [x] **Fix 1** — Rename getter `getExerciseByID` → `exerciseById` and action `getExerciseByID` → `loadExerciseByID` in `exerciseStore.js`; update call site in `router/index.js`
- [x] **Fix 2** — Delete `src/api/sync.js`, `src/token.js`, `src/components/FitPaneWeight.vue`
- [x] **Fix 3** — Move `src/components/FitLayoutPrimary.vue` → `src/layouts/MainLayout.vue` (rename, update `name` property inside); update 3 imports in `router/index.js`
- [x] **Fix 4** — Create `src/pages/` and `src/pages/kb/`; move 6 page components; update router imports; delete empty `src/components/pages/`
- [x] **Fix 5** — Add `name:` property to every route in `router/index.js` (camelCase)
- [x] **Fix 6** — Rename `:exerciseid` → `:exerciseId` in route path and `beforeEnter`; update `router/index.js`
- [x] **Fix 7** — Replace string-concat navigation in `FitExercisesPage.vue` with named-route object
- [x] **Fix 8** — Add `src/boot/init.js` that calls `loadCoreData` and `loadInitData`; register in `quasar.config.js`
- [x] **Fix 9** — Remove dead sidebar items (`/record/eat`, `/program/calendar`) from `MainLayout.vue`
- [x] **Fix 10** — Delete `src/pages/IndexPage.vue`
- [x] **Fix 11** — Rename all store state to camelCase in all 5 stores; update `ExerciseEditPage.vue`
- [x] **Fix 12** — Rename `setExercise_SportList` → `setExerciseSportList` and `setWorkout_ExerciseList` → `setWorkoutExerciseList`; update `initSetup.js`
- [x] **Fix 13** — Rename all `getXxx`/`getXxxAll` getters to noun/adjective form across all stores; update callers
- [x] **Fix 14** — Fix misleading confirm message in `ExerciseEditPage.vue`

---

## Round 3 Issues (found during second review pass)

### 15. Bug — No error handling in init boot file
`src/boot/init.js` calls two async API endpoints during app startup with no try/catch.
If either call fails (network error, server down, bad credentials), the unhandled rejection
crashes the Quasar boot chain and the app never loads. Must wrap in try/catch and log.
File: `src/boot/init.js`

### 16. Convention — `bodyfatunit`, `bodyfatpercent`, `bodyfat` are not camelCase
`weightMeasurementStore.js` state has `bodyfatunit` (should be `bodyFatUnit`) and getters
`bodyfatpercent` / `bodyfat` (should be `bodyFatPercent` / `bodyFat`). No external callers.
File: `src/stores/weightMeasurementStore.js`

### 17. Convention — Underscore function names in merge API files
`mergeExercise_Sport` in `mergeExercise.js` and `mergeWorkout_Exercise` in `mergeProgram.js`
use underscores. No callers yet; safe to rename. The `/* eslint camelcase: 0 */` disable
comment in each file also becomes unnecessary after the rename.
Files: `src/api/mergeExercise.js`, `src/api/mergeProgram.js`

### 18. Code quality — Duplicate text-align styling in FitWeightPage.vue
The `rightcolumn` div has both `style="text-align:right"` (inline) and CSS class `.colRight`
which also sets `text-align: right`. The inline style is redundant.
File: `src/pages/FitWeightPage.vue`

### 19. Dead code — main.js is comment-only
`src/main.js` contains only comments explaining that Quasar handles the entry point.
It serves no functional purpose; delete it.
File: `src/main.js`

### 20. Bug — `/weight` and `/measurements` routes render without layout
Routes `weight` and `measurements` map directly to page components with no `MainLayout`
wrapper. Users reaching these paths get a page with no sidebar. They're also unreachable
from the sidebar (no nav links). Move them as children under the root `MainLayout` route.
File: `src/router/index.js`

### 21. Design gap (noted, not auto-fixed) — home route shows empty layout
The `home` route (`/`) renders `MainLayout` with no default child, so `<router-view>`
renders nothing. A redirect to `/record/weigh-in` or a real dashboard page is needed.

### 22. Design gap (noted, not auto-fixed) — `workout` route uses FitWeightPage as placeholder
The `workout` child route reuses `FitWeightPage.vue`. No workout page exists yet.

- [x] **Fix 15** — Wrap `init.js` boot in try/catch so a failed API call degrades gracefully
- [x] **Fix 16** — Rename `bodyfatunit` → `bodyFatUnit`, `bodyfatpercent` → `bodyFatPercent`, `bodyfat` → `bodyFat` in `weightMeasurementStore.js`
- [x] **Fix 17** — Rename `mergeExercise_Sport` → `mergeExerciseSport` and `mergeWorkout_Exercise` → `mergeWorkoutExercise`; remove now-unnecessary `eslint camelcase: 0` comments
- [x] **Fix 18** — Remove redundant `style="text-align:right"` inline style from `FitWeightPage.vue`
- [x] **Fix 19** — Delete comment-only `src/main.js`
- [x] **Fix 20** — Move `weight` and `measurements` routes under the `MainLayout` parent route

---

## Round 4 Bugs (targeted bug review)

### 23. Critical — loadExerciseByID assigns by reference, breaking save detection
`loadExerciseByID` does `this.exerciseItem = this.exercise[id] ?? {}` — a reference copy.
`exerciseItem` and `exercise[id]` are the **same object in memory**. When the user edits
(e.g. `store.exerciseItem.Name = v`) both are mutated identically. In `onBeforeRouteLeave`,
`JSON.stringify(store.exercise[id]) === JSON.stringify(item)` compares the object to
itself — always `true`. Therefore:
- The "Save and leave?" dialog never fires (guard always returns early)
- `saveExercise()` is never called from the guard
- `NeedsSync = true` is never set — edits are never queued for API sync
Fix: deep-clone the exercise object: `this.exerciseItem = id !== undefined ? { ...this.exercise[id] } : {}`
File: `src/stores/exerciseStore.js`

### 24. High — Three MainLayout instances in router cause state reset on navigation
The router has three separate parent routes each using `MainLayout`:
  `/` group, `/record` group, `/kb` group
Navigating between groups (e.g. sidebar click from `/weight` to `/kb/exercises`)
causes Vue Router to unmount and remount `MainLayout`, resetting `leftDrawerOpen`
to `false` — the sidebar snaps shut on every cross-group navigation.
Fix: consolidate all page routes as children of a single root MainLayout route.
File: `src/router/index.js`

### 25. Medium — coreSetup.js silently drops Active, Dates, Time API data
`coreSetup()` calls 6 of the 9 store actions available in `coreStore`. The calls to
`setActiveList`, `setDatesList`, `setTimeList` are missing. Any `Active`, `Dates`,
`Time` data returned by the `/setup/Core` API endpoint is silently ignored.
File: `src/api/coreSetup.js`

### 26. Low — FitWeightPage.vue CSS is unscoped
`<style>` (not `<style scoped>`) makes `.colRight` a global CSS class, polluting the
stylesheet and potentially affecting other components that happen to use the same class name.
File: `src/pages/FitWeightPage.vue`

### 27. Trivial — mergeStats.js has stale `eslint camelcase: 0` disable comment
The comment was needed when mergeExercise.js/mergeProgram.js had underscore function names.
mergeStats.js always had camelCase names, so the comment was never needed and can be removed.
File: `src/api/mergeStats.js`

- [x] **Fix 23** — Clone exercise in `loadExerciseByID`: `{ ...this.exercise[id] }` instead of reference assignment
- [x] **Fix 24** — Flatten all page routes under one root `MainLayout` in `router/index.js`
- [x] **Fix 25** — Add missing `setActiveList`, `setDatesList`, `setTimeList` calls to `coreSetup.js`
- [x] **Fix 26** — Change `<style>` to `<style scoped>` in `FitWeightPage.vue`
- [x] **Fix 27** — Remove stale `/* eslint camelcase: 0 */` from `mergeStats.js`
