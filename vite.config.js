// import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: "/",
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ["router-link"].includes(tag),
          data: () => ({}),
        },
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
      },
    }),
  ],
  resolve: {
    extensions: [
      ".astro",
      ".mjs",
      ".js",
      ".ts",
      ".jsx",
      "tsx",
      ".json",
      ".vue",
    ],
    alias: {
      // "@": fileURLToPath(new URL("src", import.meta.url)),
      "@": "/src/",
    },
  },
  css: {
    loaderOptions: {
      css: {
        modules: {
          auto: () => true,
        },
      },
    },
  },
});