# FitBI Deployment Runbook — Manual Steps

A sequential checklist for a first-time deployment of FitBI.
Work top to bottom. Tick each box when done.

---

## Prerequisites

- [ ] [Azure CLI](https://aka.ms/installazurecli) installed — `az --version`
- [ ] Logged in to Azure — `az login`
- [ ] Azure subscription with permission to create resources
- [ ] [Vercel account](https://vercel.com) (free tier is sufficient)
- [ ] GitHub repository already contains the workflows from the deployment plan

---

## 1 — Choose your resource names

Fill these in before running any commands. Names marked ⚠️ must be globally unique across all of Azure.

| Placeholder | Your chosen value | Constraint |
|-------------|-------------------|------------|
| `<your-region>` | | e.g. `australiaeast`, `eastus`, `westeurope` |
| `<sql-server-name>` ⚠️ | | lowercase letters, numbers, hyphens; e.g. `fitbi-sql` |
| `<sql-admin-password>` | | Store this securely — you'll need it for GitHub Secrets |
| `<function-app-name>` ⚠️ | | e.g. `fitapifunctions` → `fitapifunctions.azurewebsites.net` |
| `<storage-account-name>` ⚠️ | | 3–24 lowercase alphanumeric only; e.g. `fitbistorage` |
| `<vercel-project-name>` | | the slug shown in Vercel project settings |

---

## 2 — Create Azure resource group

```bash
az group create \
  --name fitbi-rg \
  --location <your-region>
```

- [ ] Resource group created

---

## 3 — Create Azure SQL Server and database

```bash
az sql server create \
  --resource-group fitbi-rg \
  --name <sql-server-name> \
  --location <your-region> \
  --admin-user fitbiadmin \
  --admin-password "<sql-admin-password>"

az sql server firewall-rule create \
  --resource-group fitbi-rg \
  --server <sql-server-name> \
  --name AllowAzureServices \
  --start-ip-address 0.0.0.0 \
  --end-ip-address 0.0.0.0

az sql db create \
  --resource-group fitbi-rg \
  --server <sql-server-name> \
  --name FitBI \
  --tier Basic \
  --capacity 5
```

- [ ] SQL Server created
- [ ] Firewall rule added (allows GitHub Actions and Function App to connect)
- [ ] FitBI database created

---

## 4 — Deploy the database schema

**Option A — GitHub Actions (after Step 9 below adds the secret):**
- Go to GitHub → Actions → **Deploy Database** → Run workflow manually

**Option B — Visual Studio (can do right now):**
- Right-click `FitBI.DB` project → **Publish**
- Connection string: `Server=tcp:<sql-server-name>.database.windows.net,1433;Initial Catalog=FitBI;Persist Security Info=False;User ID=fitbiadmin;Password=<sql-admin-password>;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;`
- Click **Publish**

> ⚠️ Schema must be deployed before the Function App can serve any requests.

- [ ] Database schema deployed (all tables, stored procedures, schemas exist in FitBI database)

---

## 5 — Create Azure Storage Account

```bash
az storage account create \
  --resource-group fitbi-rg \
  --name <storage-account-name> \
  --location <your-region> \
  --sku Standard_LRS
```

- [ ] Storage account created

---

## 6 — Create Azure Function App

```bash
az functionapp create \
  --resource-group fitbi-rg \
  --name <function-app-name> \
  --storage-account <storage-account-name> \
  --consumption-plan-location <your-region> \
  --runtime dotnet-isolated \
  --runtime-version 8 \
  --functions-version 4 \
  --os-type Windows
```

- [ ] Function App created

---

## 7 — Configure Function App settings

```bash
az functionapp config appsettings set \
  --resource-group fitbi-rg \
  --name <function-app-name> \
  --settings \
    "FitDB_conn=Server=tcp:<sql-server-name>.database.windows.net,1433;Initial Catalog=FitBI;Persist Security Info=False;User ID=fitbiadmin;Password=<sql-admin-password>;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;" \
    "sp_Core=API.sp_Core" \
    "sp_Init=API.sp_Init" \
    "sp_LatestTimestamps=API.sp_LatestTimestamps"
```

> `FUNCTIONS_WORKER_RUNTIME` and `AzureWebJobsStorage` are already set by the previous step.

- [ ] App settings configured

---

## 8 — Download the publish profile

- Azure Portal → search for `<function-app-name>` → **Function App**
- Overview tab → **Get publish profile** → download the file
- Copy the entire XML content of the downloaded file

- [ ] Publish profile XML copied to clipboard / saved

---

## 9 — Add GitHub Secrets

Go to: GitHub repository → Settings → Secrets and variables → Actions → **New repository secret**

Add each of the following:

### Azure secrets

| Secret name | Value |
|-------------|-------|
| `AZURE_FUNCTION_PUBLISH_PROFILE` | Full XML content from Step 8 |
| `AZURE_SQL_CONNECTION_STRING` | `Server=tcp:<sql-server-name>.database.windows.net,1433;Initial Catalog=FitBI;Persist Security Info=False;User ID=fitbiadmin;Password=<sql-admin-password>;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;` |
| `VITE_API_BASE_URL` | `https://<function-app-name>.azurewebsites.net/api` |
| `AZURE_FUNCTION_API_KEY` | Function App host key (Portal → Function App → App keys → `_master` or create a named key) |

### Firebase secrets (from Firebase Console → Project Settings → Your apps → Web app config)

| Secret name | Value |
|-------------|-------|
| `FIREBASE_API_KEY` | `apiKey` value |
| `FIREBASE_AUTH_DOMAIN` | `authDomain` value |
| `FIREBASE_DATABASE_URL` | `databaseURL` value |
| `FIREBASE_PROJECT_ID` | `projectId` value |
| `FIREBASE_STORAGE_BUCKET` | `storageBucket` value |
| `FIREBASE_MESSAGING_SENDER_ID` | `messagingSenderId` value |
| `FIREBASE_APP_ID` | `appId` value |

- [ ] `AZURE_FUNCTION_PUBLISH_PROFILE` added
- [ ] `AZURE_SQL_CONNECTION_STRING` added
- [ ] `VITE_API_BASE_URL` added
- [ ] `AZURE_FUNCTION_API_KEY` added
- [ ] All `FIREBASE_*` secrets added

---

## 10 — Set up Vercel project

1. Log in to [vercel.com](https://vercel.com)
2. **Add New Project** → import the GitHub repository
3. Set **Root Directory** → `FitBi.Quasar`
4. Set **Framework Preset** → Other
5. Set **Build Command** → `npm run build`
6. Set **Output Directory** → `dist/spa`
7. Set **Install Command** → `npm ci`
8. Add all `VITE_*` environment variables (same values as the GitHub Secrets above):
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
9. Click **Deploy** (first deploy; subsequent ones are handled by GitHub Actions)
10. Note your **Vercel domain**: `https://<project>.vercel.app`

- [ ] Vercel project created and deployed

---

## 11 — Add Vercel secrets to GitHub

After Step 10, go to Vercel → Project Settings to get the IDs:

| Secret name | Where to find it |
|-------------|-----------------|
| `VERCEL_TOKEN` | Vercel → Account Settings → Tokens → Create |
| `VERCEL_ORG_ID` | Vercel → Project Settings → General → Team ID (or Account ID if personal) |
| `VERCEL_PROJECT_ID` | Vercel → Project Settings → General → Project ID |

- [ ] `VERCEL_TOKEN` added to GitHub Secrets
- [ ] `VERCEL_ORG_ID` added to GitHub Secrets
- [ ] `VERCEL_PROJECT_ID` added to GitHub Secrets

---

## 12 — Configure CORS on the Function App

The Quasar SPA running on Vercel needs to call the Azure Function App. CORS must be explicitly allowed.

```bash
az functionapp cors add \
  --resource-group fitbi-rg \
  --name <function-app-name> \
  --allowed-origins "https://<project>.vercel.app"
```

If using a custom domain on Vercel, add that too:

```bash
az functionapp cors add \
  --resource-group fitbi-rg \
  --name <function-app-name> \
  --allowed-origins "https://yourdomain.com"
```

> Remove the wildcard `*` if it was set: Azure Portal → Function App → CORS → delete `*`.

- [ ] Vercel domain added to CORS allowed origins
- [ ] Wildcard `*` removed (if present)

---

## 13 — Trigger and verify deployments

- [ ] Push a commit to `master` (or trigger workflows manually from Actions tab)
- [ ] **Deploy Frontend** workflow passes → Vercel site loads
- [ ] **Deploy API** workflow passes → Function App responds to a test request
- [ ] **Deploy Database** workflow passes (or confirmed deployed via Visual Studio)
- [ ] End-to-end smoke test: open the Vercel URL, log in, verify data loads from the API

---

## Summary — all GitHub Secrets at a glance

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
