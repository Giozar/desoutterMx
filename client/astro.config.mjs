import { defineConfig } from 'astro/config';
import alpinejs from "@astrojs/alpinejs";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  base: '/',
  // output: "server",
  integrations: [alpinejs(), tailwind()]
});