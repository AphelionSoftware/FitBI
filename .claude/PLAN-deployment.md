# Deployment Infrastructure Plan — FitBI Full Stack

**How to resume:** Read this file, find the first unchecked `- [ ]` item, and continue from there.
Each task names the exact file(s) to touch. Mark `- [x]` immediately after finishing each step, then commit.

---

## Services Architecture

FitBI is deployed across four services. The table below maps each component to its host and explains why.

| Component | Host | Why |
|-----------|------|-----|
| **FitBi.Quasar** (SPA) | **Vercel** | Replaces Docker Hub + self-hosted container. Vercel has native Vite support, free global CDN, automatic preview deployments on PRs, and zero-ops for a static SPA. |
| **FitAPI.Functions** (.NET 8) | **Azure Functions** (Consumption plan) | Azure Functions v4 Isolated Worker is Azure-native; the existing `fitapifunctions.azurewebsites.net` endpoint is already in production. Stays on Azure. |
| **Database** (SQL Server) | **Azure SQL Database** | SSDT project targets `SqlAzureV12DatabaseSchemaProvider`. Azure SQL is the natural pairing. Stays on Azure. |
| **Authentication** | **Firebase** | Already integrated via modular Firebase 11 SDK in `src/boot/firebase.js`. No changes needed. |

### Supporting Azure resources (already exist, document only)

| Resource | Purpose |
|----------|---------|
| Azure Storage Account | Required by Azure Functions runtime (job host, durable state) |
| Azure Application Insights | Telemetry; referenced in `host.json` sampling settings |

---

## Phase 1 — Vercel frontend

### One-time Vercel project setup (manual, done once per environment)

1. Log in to [vercel.com](https://vercel.com) and import the GitHub repository.
2. Set **Root Directory** → `FitBi.Quasar`
3. Set **Framework Preset** → Other (Quasar wraps Vite; let `vercel.json` control the build)
4. Set **Build Command** → `npm run build`
5. Set **Output Directory** → `dist/spa`
6. Set **Install Command** → `npm ci`
7. Add **Environment Variables** in Vercel project settings (mirror the values from GitHub Secrets):
   - `VITE_API_BASE_URL`
   - `VITE_API_KEY`
   - `VITE_DEFAULT_USER_ID`
   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_DATABASE_URL`
   - `VITE_FIREBASE_PROJECT_ID`
   - `VITE_FIREBASE_STORAGE_BUCKET`
   - `VITE_FIREBASE_MESSAGING_SENDER_ID`
   - `VITE_FIREBASE_APP_ID`
8. Note the **Project ID** and **Org ID** from Vercel → Project Settings → General → Project ID (also visible in `.vercel/project.json` after `vercel link`).
9. Generate a **Vercel personal access token** → Account Settings → Tokens.

### GitHub Secrets to add (frontend)

| Secret | Value |
|--------|-------|
| `VERCEL_TOKEN` | Vercel personal access token |
| `VERCEL_ORG_ID` | Vercel team/user ID (visible in Project Settings) |
| `VERCEL_PROJECT_ID` | Vercel project ID |
| `VITE_API_BASE_URL` | `https://fitapifunctions.azurewebsites.net/api` |

> `AZURE_FUNCTION_API_KEY` and all `FIREBASE_*` secrets are already present from Phase 11 of the upgrade.

### Files created in this phase

- [x] `FitBi.Quasar/vercel.json` — SPA output directory + vue-router history-mode rewrites
- [x] `.github/workflows/deploy-frontend.yml` — builds SPA with GitHub secrets, creates Vercel prebuilt output, deploys on merge to master
- [x] `.github/workflows/docker.yml` — **deleted**; superseded by `deploy-frontend.yml`

---

## Phase 2 — Azure Functions deployment pipeline

### One-time Azure setup (manual, done once per environment)

1. In the Azure Portal, navigate to the **fitapifunctions** Function App.
2. Download the **Publish Profile** → Overview → Get publish profile → save the XML.
3. Add the full XML content as GitHub Secret `AZURE_FUNCTION_PUBLISH_PROFILE`.
4. Verify **App Settings** in the Function App contain:
   - `FitDB_conn` — Azure SQL connection string
   - `sp_Core`, `sp_Init`, `sp_LatestTimestamps` — stored procedure names
   - All `sp_merge_*` keys from the merge function classes
   - `FUNCTIONS_WORKER_RUNTIME` = `dotnet-isolated`

### GitHub Secrets to add (API)

| Secret | Value |
|--------|-------|
| `AZURE_FUNCTION_PUBLISH_PROFILE` | Full XML content from Azure Portal → Function App → Get publish profile |

### Files created in this phase

- [x] `.github/workflows/deploy-api.yml` — publishes .NET 8 project and deploys to Azure Functions on merge to master

---

## Phase 3 — Database schema deployment pipeline

### One-time Azure setup (manual, done once per environment)

1. In the Azure Portal, locate the **Azure SQL Server** that hosts the FitBI database.
2. Create a **deployment login** with `db_owner` permission on the FitBI database (or use the server admin).
3. Ensure the server firewall allows connections from Azure Services (toggle: "Allow Azure services and resources to access this server").
4. Construct the connection string:
   ```
   Server=tcp:<server>.database.windows.net,1433;Initial Catalog=<dbname>;Persist Security Info=False;User ID=<login>;Password=<password>;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;
   ```
5. Add this as GitHub Secret `AZURE_SQL_CONNECTION_STRING`.

> **⚠️ Data loss warning:** The deployment workflow uses `/p:BlockOnPossibleDataLoss=false` to allow schema changes that could drop columns. Review every database PR carefully before merging to master. Change to `true` if you want CI to block on destructive changes.

### SSDT build note

The `FitBI.DB.sqlproj` uses the traditional SSDT format (`SqlAzureV12DatabaseSchemaProvider`).
Building it requires MSBuild with the SSDT workload, which is present on `windows-latest` GitHub runners (Visual Studio 2022 + SSDT). Cross-platform builds require migrating to the `Microsoft.Build.Sql` SDK — consider this as a follow-up chore.

### GitHub Secrets to add (database)

| Secret | Value |
|--------|-------|
| `AZURE_SQL_CONNECTION_STRING` | Full ADO.NET connection string with `db_owner` permissions |

### Files created in this phase

- [x] `.github/workflows/deploy-database.yml` — builds dacpac on Windows, deploys to Azure SQL on merge to master (when `Database/**` changes) or manual trigger

---

## Phase 4 — CORS configuration (manual, Azure Portal)

When the frontend moves from Docker (arbitrary domain) to Vercel, Azure Functions must explicitly allow the Vercel domain.

1. In the Azure Portal → **fitapifunctions** Function App → **CORS**.
2. Remove `*` if present (wildcard allows everything — insecure in production).
3. Add the Vercel production domain: `https://<project>.vercel.app`
4. If a custom domain is used on Vercel, add that too.
5. Ensure **Enable Access-Control-Allow-Credentials** is checked if cookies or auth headers are sent.

---

## Phase 5 — Secrets inventory

Complete list of GitHub Actions secrets required across all workflows:

| Secret | Used by | Notes |
|--------|---------|-------|
| `VERCEL_TOKEN` | `deploy-frontend.yml` | Vercel personal access token |
| `VERCEL_ORG_ID` | `deploy-frontend.yml` | Vercel user or team ID |
| `VERCEL_PROJECT_ID` | `deploy-frontend.yml` | Vercel project ID |
| `VITE_API_BASE_URL` | `deploy-frontend.yml`, `ci.yml` | Azure Functions base URL |
| `AZURE_FUNCTION_API_KEY` | `deploy-frontend.yml`, `ci.yml` | Azure Functions host key |
| `FIREBASE_API_KEY` | `deploy-frontend.yml`, `ci.yml` | Firebase web API key |
| `FIREBASE_AUTH_DOMAIN` | `deploy-frontend.yml`, `ci.yml` | Firebase auth domain |
| `FIREBASE_DATABASE_URL` | `deploy-frontend.yml`, `ci.yml` | Firebase RTDB URL |
| `FIREBASE_PROJECT_ID` | `deploy-frontend.yml`, `ci.yml` | Firebase project ID |
| `FIREBASE_STORAGE_BUCKET` | `deploy-frontend.yml`, `ci.yml` | Firebase storage bucket |
| `FIREBASE_MESSAGING_SENDER_ID` | `deploy-frontend.yml`, `ci.yml` | Firebase messaging sender |
| `FIREBASE_APP_ID` | `deploy-frontend.yml`, `ci.yml` | Firebase app ID |
| `AZURE_FUNCTION_PUBLISH_PROFILE` | `deploy-api.yml` | XML publish profile from Azure Portal |
| `AZURE_SQL_CONNECTION_STRING` | `deploy-database.yml` | ADO.NET connection string (db_owner) |
| `DOCKERHUB_USERNAME` | ~~`docker.yml`~~ | **No longer needed** — Docker workflow removed |
| `DOCKERHUB_TOKEN` | ~~`docker.yml`~~ | **No longer needed** — Docker workflow removed |

---

## Completion checklist

- [x] `FitBi.Quasar/vercel.json` created
- [x] `.github/workflows/deploy-frontend.yml` created
- [x] `.github/workflows/deploy-api.yml` created
- [x] `.github/workflows/deploy-database.yml` created
- [x] `.github/workflows/docker.yml` deleted
- [ ] Vercel project created and linked to GitHub repo (manual)
- [ ] GitHub Secrets added: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`, `VITE_API_BASE_URL` (manual)
- [ ] Azure Function publish profile downloaded and added as `AZURE_FUNCTION_PUBLISH_PROFILE` (manual)
- [ ] Azure SQL connection string added as `AZURE_SQL_CONNECTION_STRING` (manual)
- [ ] Azure Functions CORS configured to allow Vercel domain (manual)
- [ ] First deployment to Vercel succeeds
- [ ] First deployment to Azure Functions succeeds
- [ ] First database dacpac deployment succeeds (or confirmed already deployed via VS)
