import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";

// Anchored to this file's own folder (not the CWD), since this is invoked
// via `--config` from the repo root. Without this, a relative root/outDir
// would resolve against the CWD and build the wrong app into the wrong place.
const dir = fileURLToPath(new URL(".", import.meta.url));

// Standalone build: root is this folder, base is relative so the built
// dist/ here can be copied and deployed on its own, on any static host,
// without depending on the rest of the portfolio.
export default defineConfig({
  root: dir,
  base: "./",
  plugins: [react(), tailwindcss()],
  build: {
    outDir: `${dir}dist`,
    emptyOutDir: true,
  },
});
