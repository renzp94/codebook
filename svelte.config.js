import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from 'svelte-adapter-deno';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [vitePreprocess()],
	onwarn: (warning, handler) => {
		if(warning.code === "a11y-click-events-have-key-events"){
			return
		}
		handler(warning)
	},
	kit: {
		adapter: adapter()
	}
};

export default config;
