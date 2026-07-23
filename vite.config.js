import { defineConfig } from "vite";
import { resolve } from "path";

// Multi-page static site. Each HTML file is its own entry point so that
// `npm run build` outputs all of them (not just index.html).
export default defineConfig({
  root: ".",
  server: {
    open: true, // auto-open the browser on `npm run dev`
    port: 5173,
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        services: resolve(__dirname, "services.html"),
        portfolio: resolve(__dirname, "portfolio.html"),
        contact: resolve(__dirname, "contact.html"),
        why: resolve(__dirname, "why-graystonite.html"),
      },
    },
  },
});
