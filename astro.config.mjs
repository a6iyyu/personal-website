import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import node from "@astrojs/node";
import svelte from "@astrojs/svelte";

export default defineConfig({
  integrations: [tailwind(), react(), svelte()],
  server: {
    port: 3000,
  },
  output: "server",
  adapter: node({
    mode: "middleware",
  }),
});