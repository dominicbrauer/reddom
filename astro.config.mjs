// @ts-check
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';

import db from '@astrojs/db';

export default defineConfig({
  site: "https://reddom.dominicbrauer.dev",
  output: "server",

  devToolbar: {
      enabled: false
	},

  adapter: node({
      mode: 'standalone'
	}),

  integrations: [db()]
});