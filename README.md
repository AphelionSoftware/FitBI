# FitBI — Fit-Track

A full-stack fitness tracking application.

| Component | Technology | Purpose |
|-----------|-----------|---------|
| **FitBi.Quasar** | Vue 3, Quasar 2, Vite, Pinia | Web frontend (SPA) |
| **FitAPI.Functions** | .NET 8, Azure Functions v4 Isolated | REST API backend |
| **Database/FitBI.DB** | SQL Server SSDT | Schema, stored procedures |
| **TemplateCreator** | .NET 8 WinForms, SQL Server SMO | Code generation utility (Windows only) |

---

## Prerequisites

Install these tools before attempting any component build.

### All platforms

| Tool | Minimum version | Install |
|------|----------------|---------|
| Git | 2.x | https://git-scm.com |
| .NET SDK | 8.0 | https://dotnet.microsoft.com/download/dotnet/8 |
| Node.js | 20 LTS | https://nodejs.org or `nvm use 20` |
| npm | 10+ | bundled with Node 20 |

### Backend / database (additional)

| Tool | Notes |
|------|-------|
| Azure Functions Core Tools v4 | `npm install -g azure-functions-core-tools@4 --unsafe-perm true` |
| SQL Server 2019+ or Azure SQL | Local: SQL Server Express / Developer; remote: Azure SQL |
| Azurite (local storage emulator) | `npm install -g azurite` — required for local Functions host |

### TemplateCreator (Windows only)

| Tool | Notes |
|------|-------|
| Visual Studio 2022 | Community or higher; install the **ASP.NET and Azure development** and **.NET desktop development** workloads |
| SQL Server Management Studio (SSMS) | Optional; useful for inspecting schema before regenerating code |

---

## 1. Clone the repository

```bash
git clone https://github.com/MarkGStacey/FitBI.git
cd FitBI
```

---

## 2. Database — FitBI.DB (SSDT)

The database project lives in `Database/FitBI.DB/FitBI.DB/`.

### Option A — Deploy with Visual Studio (recommended)

1. Open `Database/FitBI.DB/FitBI.DB.sln` in Visual Studio 2022.
2. In **Solution Explorer**, right-click the `FitBI.DB` project → **Publish**.
3. Set the **Target database connection** to your local SQL Server instance (e.g. `.\SQL2019` or `localhost`).
4. Set **Database name** to `FitBI`.
5. Click **Publish**. SSDT will create the database and all objects (schemas, tables, stored procedures, TVPs).

### Option B — Deploy with `SqlPackage` CLI

```bash
# Install SqlPackage
dotnet tool install -g microsoft.sqlpackage

# Build the DACPAC
dotnet build Database/FitBI.DB/FitBI.DB/FitBI.DB.sqlproj

# Publish to a local SQL Server instance
sqlpackage /Action:Publish \
           /SourceFile:"Database/FitBI.DB/FitBI.DB/bin/Debug/FitBI.DB.dacpac" \
           /TargetServerName:"localhost" \
           /TargetDatabaseName:"FitBI" \
           /TargetTrustServerCertificate:true
```

### Required SQL Server settings

- Enable **SQL Server Authentication** (mixed mode) or use Windows Authentication and update the connection string accordingly.
- Create a login with `db_owner` on the `FitBI` database, or use `sa` for local development.
- Confirm the following schemas exist after deployment: `API`, `Core`, `Exercise`, `Program`, `Stats`.

---

## 3. Backend — FitAPI.Functions

### 3.1 Configure local settings

The Functions host reads secrets from `local.settings.json`, which is **not committed** (it is gitignored).
Create it at `FitAPI.Functions/FitAPIFunctions/local.settings.json`:

```json
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "UseDevelopmentStorage=true",
    "FUNCTIONS_WORKER_RUNTIME": "dotnet-isolated",
    "FitDB_conn": "Server=localhost;Database=FitDB;User Id=sa;Password=<your-password>;Encrypt=false;TrustServerCertificate=True;",
    "sp_Core": "API.sp_Core",
    "sp_Init": "API.sp_Init",
    "sp_LatestTimestamps": "API.sp_LatestTimestamps",
    "sp_Latest_Updates": "API.sp_Latest_Updates"
  },
  "Host": {
    "LocalHttpPort": 7071,
    "CORS": "*",
    "CORSCredentials": false
  }
}
```

Update `FitDB_conn` with your SQL Server credentials. For **Azure SQL**, set `Encrypt=true;TrustServerCertificate=False;`.

### 3.2 Start Azurite (local storage emulator)

Azure Functions requires a storage account. For local development, run Azurite in a separate terminal:

```bash
azurite --location ~/.azurite --debug ~/.azurite/debug.log
```

### 3.3 Build and run

```bash
cd FitAPI.Functions

# Restore NuGet packages
dotnet restore FitAPIFunctions.sln

# Build
dotnet build FitAPIFunctions.sln --configuration Debug

# Run the Functions host (hot reload)
cd FitAPIFunctions
func start
```

The API will be available at `http://localhost:7071/api`.

### 3.4 Verify endpoints

```bash
# Core lookup data (replace 1 with your UserID)
curl http://localhost:7071/api/setup/Core/1

# Init data
curl http://localhost:7071/api/setup/Init/1
```

Both should return JSON. A `500` response typically means the connection string or stored procedure name is wrong.

### 3.5 Publish to Azure

```bash
cd FitAPI.Functions/FitAPIFunctions

# Publish to an existing Function App
func azure functionapp publish <your-function-app-name> --dotnet-isolated
```

Set all `local.settings.json` values as **Application Settings** in the Azure Portal before publishing.

---

## 4. Frontend — FitBi.Quasar

### 4.1 Install Node version

```bash
cd FitBi.Quasar

# Using nvm (recommended)
nvm install   # reads .nvmrc (Node 20)
nvm use

# Verify
node --version  # should print v20.x.x
```

### 4.2 Install the Quasar CLI

```bash
npm install -g @quasar/cli
```

### 4.3 Install dependencies

```bash
npm ci
```

### 4.4 Configure environment variables

The frontend uses Vite `VITE_*` environment variables. **Never commit real values.**

```bash
cp .env.example .env
```

Edit `.env` and fill in every placeholder:

```dotenv
# Azure Functions API base URL (no trailing slash)
VITE_API_BASE_URL=http://localhost:7071/api

# Azure Functions host key (leave blank for local dev if CORS is open)
VITE_API_KEY=

# Firebase project credentials
# Obtain from Firebase Console → Project Settings → Your apps → Web app → Config
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_DATABASE_URL=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=

# Default user ID to load on startup
VITE_DEFAULT_USER_ID=1
```

For development against the local Functions host, set `VITE_API_BASE_URL=http://localhost:7071/api` and leave `VITE_API_KEY` empty (CORS is open in `local.settings.json`).

For production, point `VITE_API_BASE_URL` to your deployed Azure Function App URL and set `VITE_API_KEY` to a valid Function host key.

### 4.5 Run the development server

```bash
quasar dev
```

Opens at `http://localhost:8080` with hot module replacement.

### 4.6 Lint

```bash
npm run lint
```

### 4.7 Production build

```bash
quasar build
```

Output goes to `dist/spa/`. This directory contains the static files to deploy.

### 4.8 Docker build (optional)

```bash
cd FitBi.Quasar

docker build \
  --build-arg VITE_API_BASE_URL=https://fitapifunctions.azurewebsites.net/api \
  -t fitbi-quasar:local .

docker run -p 8080:8080 fitbi-quasar:local
```

The container serves the SPA on port 8080 via `serve`.

---

## 5. TemplateCreator (Windows only)

TemplateCreator is a WinForms utility that connects to SQL Server via SMO and runs the T4 templates (`*.tt`) in `FitAPI.Functions/FitAPIFunctions/` to regenerate boilerplate C# merge classes and JavaScript Pinia store/API files.

**You only need this tool when the database schema changes.** For normal development it is not required.

### 5.1 Build

```powershell
cd TemplateCreator
dotnet build TemplateCreator.csproj --configuration Release
```

Or open `TemplateCreator.sln` in Visual Studio 2022 and build from the IDE.

### 5.2 Run

1. Update the SQL Server instance name inside each `.tt` file if it differs from `.\\SQL2017`.
2. Run the built executable. It connects to SQL Server, reads the live schema, and writes regenerated files back to the repository.
3. After running, check `git diff` — changed files are the ones that need to be committed.

### 5.3 T4 templates overview

| Template | Generates | Output location |
|----------|----------|----------------|
| `mergeClasses/_mergeClassCreate.tt` | `merge*.cs` Azure Function classes | `FitAPI.Functions/FitAPIFunctions/mergeClasses/` |
| `SchemaClasses/_SchemaGen.tt` | `*.cs` POCO schema classes | `FitAPI.Functions/FitAPIFunctions/SchemaClasses/` |
| `jsGen/store/_storeGenerator.tt` | `*Store.js` Pinia stores | `FitBi.Quasar/src/stores/` |
| `jsGen/api/_apiGenerator.tt` | `coreSetup.js`, `initSetup.js` | `FitBi.Quasar/src/api/` |
| `jsGen/api/_mergePaths.tt` | `merge*.js` API call files | `FitBi.Quasar/src/api/` |

---

## 6. Running everything together

Start each process in a separate terminal in this order:

```
Terminal 1 — Storage emulator
  azurite --location ~/.azurite

Terminal 2 — Azure Functions API  (http://localhost:7071)
  cd FitAPI.Functions/FitAPIFunctions && func start

Terminal 3 — Quasar frontend  (http://localhost:8080)
  cd FitBi.Quasar && quasar dev
```

Open `http://localhost:8080` in your browser.

---

## 7. Project structure

```
FitBI/
├── .claude/               # Claude AI rules and upgrade plan
│   ├── PLAN-upgrade.md    # Restartable upgrade checklist
│   └── rules/             # Per-technology naming conventions
├── .github/workflows/     # CI/CD (ci.yml, docker.yml)
├── .linters/              # Shared ESLint and commitlint configs
├── Database/
│   └── FitBI.DB/          # SQL Server SSDT project
├── FitAPI.Functions/
│   └── FitAPIFunctions/
│       ├── Core.cs         # /setup/Core/:userID endpoint
│       ├── Init.cs         # /setup/Init/:userID endpoint
│       ├── LatestTimestamps.cs
│       ├── mergeClasses/   # One .cs per schema table (T4-generated)
│       ├── SchemaClasses/  # POCO classes (T4-generated)
│       ├── jsGen/          # T4 templates for frontend code generation
│       ├── host.json
│       ├── local.settings.json   # Git-ignored; create from template above
│       └── Program.cs      # HostBuilder entry point
├── FitBi.Quasar/
│   ├── .env.example        # Copy to .env and fill in values
│   ├── quasar.config.js    # Quasar 2 + Vite configuration
│   ├── index.html          # Vite HTML entry point
│   └── src/
│       ├── api/            # Axios calls to FitAPI.Functions
│       ├── boot/           # axios.js, firebase.js, pinia.js
│       ├── components/     # Vue components and pages
│       ├── router/         # Vue Router 4 configuration
│       └── stores/         # Pinia stores (one per schema domain)
├── TemplateCreator/        # WinForms SMO code generation utility
├── CLAUDE.md               # Claude AI project instructions
└── UPGRADE.md              # Migration rationale and code patterns
```

---

## 8. Environment variables reference

### FitAPI.Functions — `local.settings.json` → Azure App Settings

| Key | Description |
|-----|-------------|
| `FUNCTIONS_WORKER_RUNTIME` | Must be `dotnet-isolated` |
| `AzureWebJobsStorage` | Storage connection string (`UseDevelopmentStorage=true` locally) |
| `FitDB_conn` | SQL Server connection string |
| `sp_Core` | Stored procedure name for Core lookup data |
| `sp_Init` | Stored procedure name for Init data |
| `sp_LatestTimestamps` | Stored procedure for timestamp sync |
| `sp_Latest_Updates` | Stored procedure for update sync |

### FitBi.Quasar — `.env` (VITE_ prefix required by Vite)

| Key | Description |
|-----|-------------|
| `VITE_API_BASE_URL` | Base URL of the FitAPI.Functions endpoint (no trailing slash) |
| `VITE_API_KEY` | Azure Functions host key sent as `x-functions-key` header |
| `VITE_DEFAULT_USER_ID` | UserID passed to API calls on startup |
| `VITE_FIREBASE_API_KEY` | Firebase project API key |
| `VITE_FIREBASE_AUTH_DOMAIN` | Firebase auth domain |
| `VITE_FIREBASE_DATABASE_URL` | Firebase Realtime Database URL |
| `VITE_FIREBASE_PROJECT_ID` | Firebase project ID |
| `VITE_FIREBASE_STORAGE_BUCKET` | Firebase storage bucket |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Firebase Cloud Messaging sender ID |
| `VITE_FIREBASE_APP_ID` | Firebase app ID |

---

## 9. CI/CD

GitHub Actions workflows run automatically on push and pull request.

| Workflow | Trigger | Jobs |
|----------|---------|------|
| `ci.yml` | Push / PR to `master` | `backend` (ubuntu, dotnet 8), `frontend` (ubuntu, node 20), `template-creator` (windows, dotnet 8) |
| `docker.yml` | Push to `master` | Build and push `fitbi-quasar` image to Docker Hub |

Required GitHub Secrets for CI:

```
AZURE_FUNCTION_API_KEY
FIREBASE_API_KEY
FIREBASE_AUTH_DOMAIN
FIREBASE_DATABASE_URL
FIREBASE_PROJECT_ID
FIREBASE_STORAGE_BUCKET
FIREBASE_MESSAGING_SENDER_ID
FIREBASE_APP_ID
DOCKERHUB_USERNAME      (docker.yml only)
DOCKERHUB_TOKEN         (docker.yml only)
```

---

## 10. Common problems

### `func start` fails: "No job functions found"
The Functions host cannot discover functions if the build output is stale. Run `dotnet build` first, then `func start`.

### `func start` fails: "The listener for function X was unable to start"
Usually a port conflict on 7071. Kill any existing process on that port:
```bash
# macOS / Linux
lsof -ti:7071 | xargs kill -9
# Windows
netstat -ano | findstr :7071   # note the PID, then:
taskkill /PID <pid> /F
```

### SQL connection errors in Functions
- Confirm SQL Server is running and `FitDB` exists.
- For `Microsoft.Data.SqlClient` on Linux/macOS: add `TrustServerCertificate=True` to the connection string.
- If using Windows Authentication on Linux, switch to SQL Authentication.

### Quasar dev server: "Cannot find module 'quasar'"
Run `npm ci` from inside `FitBi.Quasar/`, not the repo root.

### `quasar` command not found
```bash
npm install -g @quasar/cli
```

### Vite build error: "VITE_* is not defined"
The `.env` file is missing or in the wrong directory. It must be at `FitBi.Quasar/.env` (same level as `package.json`).

### Docker build: blank page after startup
The SPA uses `createWebHistory()` (HTML5 history mode). The `serve` command in the Dockerfile uses `-s` (SPA mode) which rewrites all 404s to `index.html`. If deploying behind a reverse proxy (nginx, Caddy), add the equivalent rewrite rule.
