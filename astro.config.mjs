import { defineConfig } from 'astro/config';
import alpinejs from "@astrojs/alpinejs";
import tailwind from "@astrojs/tailwind";
import netlify from '@astrojs/netlify/functions';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://desoutter-mx.vercel.app/',
  base: '/',
  output: "server",
  adapter: vercel(),
  integrations: [alpinejs(), tailwind()]
});