// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [tailwind(), mdx()],
  server: {
    port: 7000,
    open: true,
  },
  site: "https://a6iyyu.vercel.app",
});