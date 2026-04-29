// Standalone Vite config used ONLY for building a static SPA bundle for
// GitHub Pages. The normal `vite.config.ts` (TanStack Start) is what runs
// inside Lovable's preview/dev. This file is invoked by `bun run build:static`.
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";

// Set BASE_PATH at build time, e.g. "/my-repo/" for project pages.
// Defaults to "/" so it also works on a custom domain or user/organization pages.
const base = process.env.BASE_PATH ?? "/";

export default defineConfig({
  base,
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
