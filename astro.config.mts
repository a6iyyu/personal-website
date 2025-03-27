import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: {
    port: 3500,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});