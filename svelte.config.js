import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const basePath = process.argv.includes('dev') ? '' : process.env.BASE_PATH;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({ fallback: '404.html' }),
		paths: { base: basePath }
	}
};

export default config;
