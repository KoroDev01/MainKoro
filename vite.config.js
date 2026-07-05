import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Production : https://korodev01.github.io/MainKoro/
export default defineConfig(({ command }) => ({
  plugins: [tailwindcss(), react()],
  base: command === "build" ? "/MainKoro/" : "/",
}));
