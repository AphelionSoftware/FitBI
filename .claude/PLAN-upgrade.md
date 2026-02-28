# Upgrade Plan — FitBI Full Stack

**How to resume:** Read this file, find the first unchecked `- [ ]` item, and continue from there.
Each task names the exact file(s) to touch. Mark `- [x]` immediately after finishing each step, then commit.

See `UPGRADE.md` for the rationale and before/after code patterns for every change below.

---

## Phase 1 — Backend cleanup

- [x] `FitAPI.Functions/FitAPIFunctions/FitAPIFunctions.csproj` — net8.0, v4 isolated worker packages, OutputType Exe
- [x] `FitAPI.Functions/FitAPIFunctions/host.json` — version 2.0 format
- [x] `FitAPI.Functions/FitAPIFunctions/Program.cs` — created; HostBuilder entry point
- [x] `FitAPI.Functions/FitAPIFunctions/Core.cs` — instance class, ILogger<T>, HttpRequestData/ResponseData, Environment.GetEnvironmentVariable, Microsoft.Data.SqlClient
- [x] `FitAPI.Functions/FitAPIFunctions/Init.cs` — same as above
- [x] `FitAPI.Functions/FitAPIFunctions/LatestTimestamps.cs` — same as above
- [x] `FitAPI.Functions/FitAPIFunctions/mergeClasses/*.cs` — all 14 merge class files migrated to v4 API
- [x] `FitAPI.Functions/FitAPIFunctions/helpers/SqlMapperTvpExtension.cs` — Microsoft.Data.SqlClient, nullable annotations
- [ ] `FitAPI.Functions/FitAPIFunctions/local.settings.json` — verify format is v4 isolated; must contain `FUNCTIONS_WORKER_RUNTIME: dotnet-isolated`, `FitDB_conn`, `sp_Core`, `sp_Init`, `sp_LatestTimestamps`, and all `sp_merge_*` keys. Add `Encrypt=false;TrustServerCertificate=True` to the connection string for local dev.
- [ ] `TemplateCreator/Properties/AssemblyInfo.cs` — delete this file; SDK-style projects auto-generate assembly attributes and keeping it causes duplicate attribute compile errors

---

## Phase 2 — T4 template updates

These templates regenerate source files. Until they are updated, running "Run Custom Tool" in Visual Studio will overwrite the v4-compatible `.cs` and `.js` files with old code.

- [ ] `FitAPI.Functions/FitAPIFunctions/mergeClasses/_mergeClassCreate.tt` — update generated class from `public static class` to instance class with `ILogger<T>` constructor; replace `TraceWriter`, `HttpRequestMessage`/`HttpResponseMessage`, `ConfigurationManager`, `System.Data.SqlClient` with their v4 equivalents (see `mergeClasses/mergeWeightMeasurement.cs` as the target pattern)
- [ ] `FitAPI.Functions/FitAPIFunctions/jsGen/store/_storeGenerator.tt` — change generated output from Vuex module (`state/mutations/actions/getters`) to Pinia store (`defineStore` with `state()`, `actions`, `getters`). Output file paths should change from `src/vuex/modules/*/` to `src/stores/`.
- [ ] `FitAPI.Functions/FitAPIFunctions/jsGen/store/_actionGenerator.tt` — if actions are generated separately from store state, merge into the Pinia store file or delete if `_storeGenerator.tt` covers both
- [ ] `FitAPI.Functions/FitAPIFunctions/jsGen/api/_apiGenerator.tt` — update generated axios calls to use axios 1.x patterns; remove any `azure-mobile-apps-client` imports; ensure generated files use `import.meta.env.VITE_*` for the base URL
- [ ] `FitAPI.Functions/FitAPIFunctions/jsGen/api/_mergePaths.tt` — update imports and axios usage in generated merge API files
- [ ] `FitAPI.Functions/FitAPIFunctions/SchemaClasses/_SchemaGen.tt` — check for any `System.Data.SqlClient` or `System.Configuration` references; replace with `Microsoft.Data.SqlClient` and `Environment.GetEnvironmentVariable`

---

## Phase 3 — Frontend: build system and bootstrap

- [ ] Delete `FitBi.Quasar/build/` directory — old Webpack 2 build scripts; Quasar 2 + Vite replaces entirely
- [ ] Delete `FitBi.Quasar/config/` directory — old Webpack dev/prod config; Quasar 2 uses `quasar.config.js` instead
- [ ] Create `FitBi.Quasar/.nvmrc` — single line: `20`
- [ ] Create `FitBi.Quasar/quasar.config.js` — Quasar 2 Vite config (see template in `UPGRADE.md` §3.1); register boot files `axios`, `firebase`, `pinia`; set `vueRouterMode: 'history'`; reference `@quasar/extras` for icons and fonts
- [ ] Create `FitBi.Quasar/src/boot/` directory
- [ ] Create `FitBi.Quasar/src/boot/axios.js` — create and export a configured axios instance; use `import.meta.env.VITE_API_BASE_URL` and `import.meta.env.VITE_API_KEY` for the base URL and auth key
- [ ] Create `FitBi.Quasar/src/boot/pinia.js` — `import { createPinia } from 'pinia'; export default ({ app }) => { app.use(createPinia()) }`
- [ ] Create `FitBi.Quasar/src/boot/firebase.js` — initialise Firebase app with modular API (`initializeApp`); export `db` and `auth` instances using `import.meta.env.VITE_FIREBASE_*` vars
- [ ] Rewrite `FitBi.Quasar/src/main.js` — Quasar 2 / Vue 3 bootstrap is handled by the framework; `main.js` should only export the root `App` component and any app-level plugins not covered by boot files. Follow the Quasar 2 entry point convention.
- [ ] Move `FitBi.Quasar/src/index.html` → `FitBi.Quasar/index.html` — Vite expects `index.html` at the project root, not inside `src/`

---

## Phase 4 — Frontend: router

- [ ] Rewrite `FitBi.Quasar/src/router.js` — replace `new Router({ ... })` with `createRouter({ history: createWebHistory(), routes })` (see `UPGRADE.md` §3.4); route names camelCase, paths kebab-case per `quasar.md`
- [ ] Search all `.vue` files for `this.$router` and `this.$route` — replace with `useRouter()` and `useRoute()` composables from `vue-router`

---

## Phase 5 — Frontend: Vuex → Pinia

- [ ] Create `FitBi.Quasar/src/stores/` directory
- [ ] Rewrite `src/vuex/modules/Core/CoreStore.js` + `CoreActions.js` → `src/stores/core.js` — Pinia `defineStore('core', { state, getters, actions })`
- [ ] Rewrite `src/vuex/modules/Exercise/ExerciseStore.js` + `ExerciseActions.js` → `src/stores/exercise.js`
- [ ] Rewrite `src/vuex/modules/Program/ProgramStore.js` + `ProgramActions.js` → `src/stores/program.js`
- [ ] Rewrite `src/vuex/modules/Stats/StatsStore.js` + `StatsActions.js` → `src/stores/stats.js`
- [ ] Rewrite `src/vuex/modules/weight-measurement.js` → `src/stores/weightMeasurement.js`
- [ ] Delete `src/vuex/` directory entirely once all stores are migrated and references updated
- [ ] Delete `src/helpers/vuex-map-fields/` directory — no longer needed with Pinia

---

## Phase 6 — Frontend: Firebase 3 → 11

- [ ] Audit Firebase usage: `grep -r "import firebase\|from 'firebase'" FitBi.Quasar/src/` — list every file
- [ ] Rewrite `src/token.js` — replace namespace API (`firebase.auth()`) with modular API (`getAuth`, `signInWithEmailAndPassword`, etc.); import from `firebase/auth`
- [ ] Update `src/api/sync.js` — replace any Firebase Realtime Database or Firestore namespace calls with modular equivalents (`getDatabase`/`ref`/`onValue` or `getFirestore`/`collection`/`onSnapshot`)
- [ ] Update `src/api/api.js` — remove `azure-mobile-apps-client` entirely; all sync operations move to direct axios calls to `FitAPI.Functions` endpoints
- [ ] Remove `azure-mobile-apps-client` from any remaining imports across `src/`

---

## Phase 7 — Frontend: Vue component migration

Audit each file for Vue 2-specific APIs before editing. Key patterns: `Vue.use`, `this.$set`, `$listeners`, `$children`, `filters`, `beforeDestroy`/`destroyed`, `new Vue`.

- [ ] `src/App.vue`
- [ ] `src/components/fit-layout-primary.vue`
- [ ] `src/components/fit-pane-weight.vue`
- [ ] `src/components/pages/fit-exercises.vue`
- [ ] `src/components/pages/fit-measurements.vue`
- [ ] `src/components/pages/fit-weight.vue`
- [ ] `src/components/pages/kb/exercise.edit.vue`
- [ ] `src/components/single-measure.vue`
- [ ] `src/components/Error404.vue`
- [ ] `src/components/Index.vue`
- [ ] Rename component files to PascalCase per `vue.md` (e.g. `fit-layout-primary.vue` → `FitLayoutPrimary.vue`) and update all imports
- [ ] Rename page components with `Page` suffix per `quasar.md` (e.g. `fit-weight.vue` → `FitWeightPage.vue`)

---

## Phase 8 — Frontend: API layer and library replacements

- [ ] Update `src/api/coreSetup.js` — replace axios 0.17 patterns with axios 1.x; use the shared axios instance from `src/boot/axios.js`
- [ ] Update `src/api/initSetup.js` — same
- [ ] Update `src/api/mergeExercise.js` — same
- [ ] Update `src/api/mergeProgram.js` — same
- [ ] Update `src/api/mergeStats.js` — same
- [ ] Replace `moment` with `dayjs`: `grep -r "moment" FitBi.Quasar/src/` to find all usages; swap `import moment from 'moment'` → `import dayjs from 'dayjs'`; `moment(x).format(y)` → `dayjs(x).format(y)`
- [ ] Replace `underscore` / `_.` calls with native JS equivalents: `grep -r "underscore\|import _\b" FitBi.Quasar/src/`

---

## Phase 9 — Security: credentials

- [ ] Audit `src/config.js` — list every hardcoded value (API keys, user IDs, function access codes)
- [ ] Create `FitBi.Quasar/.env.example` — one `VITE_*` key per hardcoded value, with a placeholder value and comment
- [ ] Update `src/config.js` — replace every hardcoded value with `import.meta.env.VITE_*`; the file may reduce to just re-exports or be deleted entirely
- [ ] Add `FitBi.Quasar/.env` to `.gitignore` (root `.gitignore` or `FitBi.Quasar/.gitignore`)

---

## Phase 10 — Frontend: linting

- [ ] Create `FitBi.Quasar/eslint.config.js`:
  ```js
  import vueQuasarConfig from '../.linters/eslint-vue-quasar.js'
  export default [...vueQuasarConfig]
  ```
- [ ] Run `npm run lint` from `FitBi.Quasar/` and fix all reported errors

---

## Phase 11 — CI/CD

- [ ] Create `.github/workflows/ci.yml` — three jobs: `backend` (ubuntu, dotnet 8, `dotnet build`), `frontend` (ubuntu, node 20, `npm ci && npm run build`), `template-creator` (windows-latest, dotnet 8, `dotnet build`). See full YAML in `UPGRADE.md` §5.
- [ ] Create `.github/workflows/docker.yml` (optional) — build and push the `FitBi.Quasar` Docker image on merge to `main`

---

## Completion checklist

- [ ] All phases above complete
- [ ] `dotnet build FitAPI.Functions/FitAPIFunctions.sln` passes on Linux
- [ ] `npm ci && npm run build` passes in `FitBi.Quasar/`
- [ ] `dotnet build TemplateCreator/TemplateCreator.csproj` passes on Windows
- [ ] No secrets committed (`git log -p | grep -i "key\|secret\|password\|token"` returns nothing sensitive)
- [ ] CI green on the PR branch
