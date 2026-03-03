// Azure Function access tokens are now passed as the x-functions-key header
// via the axios instance in src/boot/axios.js (VITE_API_KEY env var).
// This file is retained for backward-compatibility and may be removed once
// all callers are updated.
export const token = {}
