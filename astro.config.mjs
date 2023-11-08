import { defineConfig } from 'astro/config';
import alpinejs from "@astrojs/alpinejs";
import tailwind from "@astrojs/tailwind";
import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
  site: 'https://desouttermx.netlify.app/',
  base: '/',
  output: "server",
  adapter: netlify(),
  integrations: [alpinejs(), tailwind()]
});