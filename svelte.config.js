import adapter from '@sveltejs/adapter-static';
//import { vitePreprocess } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({ fallback: 'index.html', pages: "./www/ofapi"}),
		paths: { base: '/ofapi' },
		prerender: { entries: [] }
		
	}
};

export default config;
