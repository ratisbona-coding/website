import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	base: '/SecretRabbitMeetingBeTheChange/',
	server: {
		fs: {
			allow: [
				"slicemachine.config.json",
				"static/secret.7z"
			]
		}
	}
};

export default config;
