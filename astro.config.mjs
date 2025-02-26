// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

import node from '@astrojs/node';

import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), db()],

  adapter: node({
    mode: 'standalone'
  })
});
