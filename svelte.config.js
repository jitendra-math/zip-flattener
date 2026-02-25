import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// vitePreprocess allows us to use PostCSS (Tailwind) in Svelte components
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto will choose the environment automatically (Vercel, Netlify, etc.)
		adapter: adapter(),
		
		// Alias setup to make imports cleaner
		alias: {
			$lib: './src/lib',
			$components: './src/lib/components',
			$utils: './src/lib/utils'
		}
	}
};

export default config;
