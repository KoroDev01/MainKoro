import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Netlify (racine) : VITE_BASE_PATH=/  →  https://korodev.netlify.app/
// GitHub Pages     : VITE_BASE_PATH=/MainKoro/  →  https://korodev01.github.io/MainKoro/
const base = process.env.VITE_BASE_PATH ?? "/";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  base,
});
