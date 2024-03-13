import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";
import partytown from "@astrojs/partytown";

export default defineConfig({
  integrations: [tailwind(), svelte(), mdx(), partytown()],
  server: {
    port: 3000,
  },
  output: "server",
  adapter: vercel(),
});