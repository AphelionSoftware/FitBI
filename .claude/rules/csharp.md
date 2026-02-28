# C# Naming Standards

## Types

- **Classes, structs, records, enums**: PascalCase — `UserProfile`, `WeightMeasurement`, `HttpStatusCode`
- **Interfaces**: `I` prefix + PascalCase — `IFitRepository`, `IUserService`, `IDataStore`
- **Abstract base classes**: no special prefix — `FunctionBase`, `MeasurementBase`
- **Generic type parameters**: single `T` for unconstrained; descriptive `TKey`, `TValue`, `TEntity` when the role matters

```csharp
// Correct
public class WeightMeasurement { }
public interface IFitRepository { }
public class Repository<TEntity> where TEntity : class { }
```

## Methods

- **PascalCase** for all methods — `GetUser()`, `ExecuteQuery()`, `ParseResponse()`
- Async methods carry an `Async` suffix — `GetUserAsync()`, `ExecuteQueryAsync()`
- Boolean-returning methods start with a verb that implies a yes/no answer — `IsValid()`, `HasPermission()`, `CanDelete()`
- Factory methods: `Create`, `From`, `Build` — `CreateResponse()`, `FromJson()`

```csharp
// Correct
public async Task<User> GetUserAsync(int userId) { }
public bool IsActive() { }
public static WeightMeasurement FromJson(string json) { }
```

## Properties

- **PascalCase** — `FirstName`, `CreatedAt`, `IsDeleted`
- Boolean properties: `Is`, `Has`, `Can`, `Should` prefix — `IsLoading`, `HasSubscription`
- Never abbreviate unless the abbreviation is universally understood (`Id`, `Url`, `Http`)

## Fields

- Private instance fields: `_camelCase` — `_logger`, `_connectionString`, `_fitRepository`
- Private static fields: `s_camelCase` — `s_instance`, `s_cache`
- Constants (`const`) and static readonly: PascalCase — `MaxRetries`, `DefaultTimeout`

```csharp
private readonly ILogger<Core> _logger;
private readonly string _connectionString;
private const int MaxRetries = 3;
private static readonly TimeSpan DefaultTimeout = TimeSpan.FromSeconds(30);
```

## Parameters and Local Variables

- **camelCase** — `userId`, `connectionString`, `cancellationToken`
- Loop variables: single letter is fine for trivial iteration (`i`, `j`); use a descriptive name otherwise
- Avoid single-letter names outside loops — `e` for exceptions is acceptable, `x` is not

## Events and Delegates

- Events: PascalCase, past tense for completed actions — `DataLoaded`, `RequestCompleted`
- Event handler parameters: `sender` and `e` by convention — `object sender, EventArgs e`
- Custom delegate types: PascalCase with `Handler` or `Callback` suffix — `DataLoadedHandler`

## Namespaces

- PascalCase, period-separated, mirroring the folder path — `FitAPIFunctions.Schema`, `FitAPIFunctions.Helpers`
- Do not use underscores or abbreviations in namespace segments
- Root namespace matches the project/assembly name — `FitAPIFunctions`, `DBWRite`

## Files

- One type per file — filename matches the type name exactly: `WeightMeasurement.cs`, `IFitRepository.cs`
- Partial classes: suffix with the purpose of the partial — `WeightMeasurement.Validation.cs`
- No filename abbreviations — `WeightMeasurementRepository.cs` not `WMRepo.cs`

## Azure Functions (v4 Isolated Worker)

- Function class name: PascalCase, matches the domain — `Core`, `Init`, `LatestTimestamps`, `MergeWeightMeasurement`
- `[Function("X")]` attribute value matches the class name exactly
- Entry method: `Run` for a single-operation function; use a descriptive verb for multi-method classes
- Logger field: `_logger` injected via constructor — `ILogger<ClassName> logger`
- Return type: `Task<HttpResponseData>` for async HTTP functions; `HttpResponseData` for sync

```csharp
// Correct
public class WeightMeasurement
{
    private readonly ILogger<WeightMeasurement> _logger;

    public WeightMeasurement(ILogger<WeightMeasurement> logger) => _logger = logger;

    [Function("WeightMeasurement")]
    public async Task<HttpResponseData> Run(
        [HttpTrigger(AuthorizationLevel.Function, "post", Route = "merge/WeightMeasurement")]
        HttpRequestData req)
    { }
}
```

## Dapper

- Stored procedure name strings: match the database object exactly — `"API.merge_Stats_WeightMeasurement"`
- Anonymous parameter objects: property names match the SP parameter names exactly (no `@` prefix) — `new { UserID = userId }`
- Column name lists for TVPs: explicit `List<string>` in the same order as the TVP definition

```csharp
// Correct
conn.QueryMultiple("API.sp_Init", new { UserID = userId }, commandType: CommandType.StoredProcedure);
```

## Exception Handling

- Custom exception types: PascalCase with `Exception` suffix — `FitApiException`, `DatabaseConnectionException`
- Catch the most specific type possible — avoid bare `catch (Exception ex)` except at the function boundary
- Log before or at the catch site, not both — pick one level to avoid duplicate log entries

## Nullability

- Enable `<Nullable>enable</Nullable>` in all new SDK-style projects (already set in FitAPIFunctions and TemplateCreator)
- Use `!` (null-forgiving) only when the value is guaranteed non-null by logic not visible to the compiler — `Environment.GetEnvironmentVariable("KEY")!`
- Prefer `?.` and `??` over null checks where the intent is clear — `settings?.ConnectionString ?? DefaultConnection`

## async / await

- Every async method returns `Task` or `Task<T>` — never `async void` except for event handlers
- Do not mix `.Result` or `.Wait()` with `await` — always `await` all the way up
- `CancellationToken` parameter last, named `cancellationToken` — `GetUserAsync(int id, CancellationToken cancellationToken = default)`
