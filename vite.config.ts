import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit'
import { defineConfig } from 'vite';

export default defineConfig({
	define: {
		__DATE__: `'${new Date().toISOString()}'`,
		__RELOAD_SW__: false,
	},

	plugins: [
		sveltekit(),
	    SvelteKitPWA({      
			registerType: 'autoUpdate',
			manifest: {
				// TODO: Update once I understand which icons are needed
				icons: [
					{
						src: '/android/android-launchericon-192-192.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: '/android/android-launchericon-512-512.png',
						sizes: '512x512',
						type: 'image/png'
					}
					]
			},
			devOptions: {
				enabled: true,
				type: 'module',
				navigateFallback: '/',
			},
		})
	]
});
