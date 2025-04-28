import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const sveltePlugins = await sveltekit()

const config: UserConfig = {
	plugins: [...sveltePlugins]
};

export default config;
