// All values must be provided via environment variables.
// Copy .env.example to .env and fill in your values.
// Never commit .env to version control.
export const config = {
  API: import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:7071/api',
  UserID: import.meta.env.VITE_DEFAULT_USER_ID ?? 1
}
