// @ts-check
import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import node from "@astrojs/node";
import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), db(), react()],

  adapter: node({
    mode: "standalone",
  }),

  vite: {
    plugins: [tailwindcss()],
  },
});
