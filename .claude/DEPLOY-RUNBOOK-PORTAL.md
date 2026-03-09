# FitBI Deployment Runbook — Azure Portal (UI)

A sequential checklist for a first-time deployment of FitBI using the Azure Portal.
Work top to bottom. Tick each box when done.

> Prefer the command line? See `DEPLOY-RUNBOOK.md` for the Azure CLI version.

---

## Prerequisites

- [ ] Azure account with permission to create resources — [portal.azure.com](https://portal.azure.com)
- [ ] [Vercel account](https://vercel.com) (free tier is sufficient)
- [ ] GitHub repository already contains the workflows from the deployment plan

---

## 1 — Choose your resource names

Fill these in before starting. Names marked ⚠️ must be globally unique across all of Azure.

| Placeholder | Your chosen value | Constraint |
|-------------|-------------------|------------|
| `<your-region>` | | e.g. Australia East, East US, West Europe |
| `<sql-server-name>` ⚠️ | | lowercase letters, numbers, hyphens; e.g. `fitbi-sql` |
| `<sql-admin-password>` | | Store securely — needed again in Steps 7 and 9 |
| `<function-app-name>` ⚠️ | | e.g. `fitapifunctions` → `fitapifunctions.azurewebsites.net` |
| `<storage-account-name>` ⚠️ | | 3–24 lowercase alphanumeric only; e.g. `fitbistorage` |
| `<vercel-domain>` | | e.g. `https://fitbi.vercel.app` — known after Step 10 |

---

## 2 — Create a Resource Group

A resource group keeps all FitBI resources together so they're easy to manage and delete.

1. In the Azure Portal, click **Create a resource** (top-left **+** button)
2. Search for **Resource group** → **Create**
3. Fill in:
   - **Subscription**: your subscription
   - **Resource group name**: `fitbi-rg`
   - **Region**: `<your-region>`
4. Click **Review + create** → **Create**

- [ ] Resource group `fitbi-rg` created

---

## 3 — Create Azure SQL Server

1. Click **Create a resource** → search **SQL server** (the server, not the database) → **Create**
2. Fill in:
   - **Subscription** / **Resource group**: `fitbi-rg`
   - **Server name**: `<sql-server-name>` ⚠️
   - **Location**: `<your-region>`
   - **Authentication method**: SQL authentication
   - **Server admin login**: `fitbiadmin`
   - **Password** / **Confirm password**: `<sql-admin-password>`
3. Click **Review + create** → **Create**

- [ ] SQL Server created

---

## 4 — Allow Azure services through the SQL Server firewall

The Function App and GitHub Actions runner both need to reach the SQL Server.

1. Go to the SQL Server resource → left menu **Security** → **Networking**
2. Under **Firewall rules**, toggle **Allow Azure services and resources to access this server** → **On**
3. Click **Save**

- [ ] Firewall rule saved

---

## 5 — Create the FitBI database

1. Inside the SQL Server resource, click **+ Create database** (or go to **Create a resource** → **SQL Database**)
2. Fill in:
   - **Resource group**: `fitbi-rg`
   - **Database name**: `FitBI`
   - **Server**: `<sql-server-name>`
   - **Want to use SQL elastic pool?**: No
   - **Compute + storage**: click **Configure database** → select **Basic** tier (5 DTUs, ~$5/month)
3. Click **Review + create** → **Create**

- [ ] FitBI database created

---

## 6 — Deploy the database schema

The schema must exist before the Function App can serve requests.

**Option A — Visual Studio (recommended for first deploy):**
1. Open the `FitBI.DB` SSDT project in Visual Studio
2. Right-click the project → **Publish**
3. Click **Edit** next to the connection string, set:
   - **Server name**: `<sql-server-name>.database.windows.net`
   - **Authentication**: SQL Server Authentication
   - **Login**: `fitbiadmin` / **Password**: `<sql-admin-password>`
   - **Database name**: `FitBI`
4. Click **Publish**

**Option B — GitHub Actions (after Step 9 adds the secret):**
- GitHub → Actions → **Deploy Database** → **Run workflow**

- [ ] Schema deployed (tables, stored procedures, schemas visible in the database)

---

## 7 — Create a Storage Account

Azure Functions requires a storage account for its runtime (job host state, durable timers).

1. Click **Create a resource** → search **Storage account** → **Create**
2. Fill in:
   - **Resource group**: `fitbi-rg`
   - **Storage account name**: `<storage-account-name>` ⚠️
   - **Region**: `<your-region>`
   - **Performance**: Standard
   - **Redundancy**: Locally-redundant storage (LRS)
3. Click **Review + create** → **Create**

- [ ] Storage account created

---

## 8 — Create the Function App

1. Click **Create a resource** → search **Function App** → **Create**
2. On the **Basics** tab:
   - **Resource group**: `fitbi-rg`
   - **Function App name**: `<function-app-name>` ⚠️
   - **Do you want to deploy code or container image?**: Code
   - **Runtime stack**: .NET
   - **Version**: 8 (LTS) Isolated
   - **Region**: `<your-region>`
   - **Operating System**: Windows
   - **Hosting plan**: Consumption (Serverless)
3. On the **Storage** tab:
   - **Storage account**: `<storage-account-name>`
4. Click **Review + create** → **Create**

- [ ] Function App created

---

## 9 — Configure Function App settings

The app reads four values from environment variables at runtime.

1. Go to the Function App resource → left menu **Settings** → **Environment variables**
2. Click **+ Add** for each of the following (use the **App settings** tab):

| Name | Value |
|------|-------|
| `FitDB_conn` | `Server=tcp:<sql-server-name>.database.windows.net,1433;Initial Catalog=FitBI;Persist Security Info=False;User ID=fitbiadmin;Password=<sql-admin-password>;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;` |
| `sp_Core` | `API.sp_Core` |
| `sp_Init` | `API.sp_Init` |
| `sp_LatestTimestamps` | `API.sp_LatestTimestamps` |

3. Click **Apply** → **Confirm**

> `FUNCTIONS_WORKER_RUNTIME` and `AzureWebJobsStorage` are already set automatically — do not add or change them.

- [ ] All four app settings saved

---

## 10 — Download the publish profile for GitHub Actions

1. Go to the Function App resource → **Overview** tab
2. Click **Get publish profile** (toolbar button or the link near the essentials panel)
3. A `.PublishSettings` XML file downloads — open it and copy **the entire file contents**

- [ ] Publish profile XML copied

---

## 11 — Get the Function App host key

GitHub Actions needs this key to authenticate calls to the deployed API.

1. Go to the Function App resource → left menu **Functions** → **App keys**
2. Copy the value next to `_master`, **or** click **+ Add** to create a named key (e.g. `github-actions`)
3. Copy the key value

- [ ] Host key copied

---

## 12 — Add GitHub Secrets

Go to: **GitHub repository → Settings → Secrets and variables → Actions → New repository secret**

### Azure secrets

| Secret name | Value |
|-------------|-------|
| `AZURE_FUNCTION_PUBLISH_PROFILE` | Full XML content from Step 10 |
| `AZURE_SQL_CONNECTION_STRING` | Same connection string as `FitDB_conn` in Step 9 |
| `VITE_API_BASE_URL` | `https://<function-app-name>.azurewebsites.net/api` |
| `AZURE_FUNCTION_API_KEY` | Host key from Step 11 |

### Firebase secrets

Find these in [Firebase Console](https://console.firebase.google.com) → Project Settings → Your apps → Web app → SDK setup and configuration → Config object.

| Secret name | Firebase config field |
|-------------|----------------------|
| `FIREBASE_API_KEY` | `apiKey` |
| `FIREBASE_AUTH_DOMAIN` | `authDomain` |
| `FIREBASE_DATABASE_URL` | `databaseURL` |
| `FIREBASE_PROJECT_ID` | `projectId` |
| `FIREBASE_STORAGE_BUCKET` | `storageBucket` |
| `FIREBASE_MESSAGING_SENDER_ID` | `messagingSenderId` |
| `FIREBASE_APP_ID` | `appId` |

- [ ] `AZURE_FUNCTION_PUBLISH_PROFILE` added
- [ ] `AZURE_SQL_CONNECTION_STRING` added
- [ ] `VITE_API_BASE_URL` added
- [ ] `AZURE_FUNCTION_API_KEY` added
- [ ] All `FIREBASE_*` secrets added

---

## 13 — Set up Vercel project

1. Log in to [vercel.com](https://vercel.com) → **Add New Project**
2. Import the GitHub repository
3. Configure the project:
   - **Root Directory**: `FitBi.Quasar`
   - **Framework Preset**: Other
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/spa`
   - **Install Command**: `npm ci`
4. Expand **Environment Variables** and add each of the following:

| Name | Value |
|------|-------|
| `VITE_API_BASE_URL` | `https://<function-app-name>.azurewebsites.net/api` |
| `VITE_API_KEY` | Azure Function host key (same as `AZURE_FUNCTION_API_KEY`) |
| `VITE_DEFAULT_USER_ID` | your default user ID |
| `VITE_FIREBASE_API_KEY` | Firebase `apiKey` |
| `VITE_FIREBASE_AUTH_DOMAIN` | Firebase `authDomain` |
| `VITE_FIREBASE_DATABASE_URL` | Firebase `databaseURL` |
| `VITE_FIREBASE_PROJECT_ID` | Firebase `projectId` |
| `VITE_FIREBASE_STORAGE_BUCKET` | Firebase `storageBucket` |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Firebase `messagingSenderId` |
| `VITE_FIREBASE_APP_ID` | Firebase `appId` |

5. Click **Deploy** — this first deploy runs in Vercel directly; subsequent deploys go through GitHub Actions
6. Note the live URL shown after deploy (e.g. `https://fitbi.vercel.app`) — this is `<vercel-domain>`

- [ ] Vercel project created and first deploy succeeded

---

## 14 — Add Vercel secrets to GitHub

1. In Vercel → **Account Settings** → **Tokens** → **Create Token** — copy the value
2. In Vercel → **Project Settings** → **General** → copy **Project ID** and **Team ID** (or Account ID if personal)

Add to GitHub Secrets:

| Secret name | Where to find it |
|-------------|-----------------|
| `VERCEL_TOKEN` | Vercel → Account Settings → Tokens |
| `VERCEL_ORG_ID` | Vercel → Project Settings → General → Team/Account ID |
| `VERCEL_PROJECT_ID` | Vercel → Project Settings → General → Project ID |

- [ ] `VERCEL_TOKEN` added
- [ ] `VERCEL_ORG_ID` added
- [ ] `VERCEL_PROJECT_ID` added

---

## 15 — Configure CORS on the Function App

The Quasar SPA on Vercel makes requests to the Function App — CORS must allow the Vercel domain.

1. Go to the Function App resource → left menu **API** → **CORS**
2. If `*` (wildcard) appears in the list, select it and click **Delete**
3. Under **Allowed Origins**, click **+ Add** and enter `<vercel-domain>` (e.g. `https://fitbi.vercel.app`)
4. If you have a custom domain on Vercel, add that too
5. Ensure **Enable Access-Control-Allow-Credentials** is checked if the app sends auth headers
6. Click **Save**

- [ ] Wildcard `*` removed (if it was present)
- [ ] Vercel domain added to allowed origins
- [ ] CORS saved

---

## 16 — Trigger and verify deployments

- [ ] Push a commit to `master` (or trigger each workflow manually from the Actions tab)
- [ ] **Deploy Frontend** workflow passes → Vercel site loads at `<vercel-domain>`
- [ ] **Deploy API** workflow passes → Function App overview shows functions listed
- [ ] **Deploy Database** workflow passes (or already done via Visual Studio in Step 6)
- [ ] Smoke test: open `<vercel-domain>`, log in, verify data loads correctly from the API

---

## All GitHub Secrets — summary

| Secret | Used by workflow |
|--------|-----------------|
| `VERCEL_TOKEN` | `deploy-frontend.yml` |
| `VERCEL_ORG_ID` | `deploy-frontend.yml` |
| `VERCEL_PROJECT_ID` | `deploy-frontend.yml` |
| `VITE_API_BASE_URL` | `deploy-frontend.yml`, `ci.yml` |
| `AZURE_FUNCTION_API_KEY` | `deploy-frontend.yml`, `ci.yml` |
| `FIREBASE_API_KEY` | `deploy-frontend.yml`, `ci.yml` |
| `FIREBASE_AUTH_DOMAIN` | `deploy-frontend.yml`, `ci.yml` |
| `FIREBASE_DATABASE_URL` | `deploy-frontend.yml`, `ci.yml` |
| `FIREBASE_PROJECT_ID` | `deploy-frontend.yml`, `ci.yml` |
| `FIREBASE_STORAGE_BUCKET` | `deploy-frontend.yml`, `ci.yml` |
| `FIREBASE_MESSAGING_SENDER_ID` | `deploy-frontend.yml`, `ci.yml` |
| `FIREBASE_APP_ID` | `deploy-frontend.yml`, `ci.yml` |
| `AZURE_FUNCTION_PUBLISH_PROFILE` | `deploy-api.yml` |
| `AZURE_SQL_CONNECTION_STRING` | `deploy-database.yml` |
