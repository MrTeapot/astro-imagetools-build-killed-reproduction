import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import { astroImageTools } from "astro-imagetools";

// https://astro.build/config
export default defineConfig({
	integrations: [preact(), astroImageTools],
});
