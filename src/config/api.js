// Reads the backend URL from an environment variable so the same code
// works locally (pointing at localhost:4000) and once deployed
// (pointing at your live Render backend URL).
//
// Set this in a .env file at the project root:
//   VITE_API_URL=http://localhost:4000
// or, once deployed:
//   VITE_API_URL=https://your-backend-url.onrender.com
export const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";