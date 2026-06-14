import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Proxy /api to the local Express backend during development so the
  // frontend can use the same relative path it uses in production.
  server: {
    proxy: {
      "/api": "http://localhost:5000",
    },
  },
});
