// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
/// <reference types="vite-plugin-pwa/client" />
/// <reference types="vite-plugin-pwa/info" />
declare const __DATE__: string;
declare const __RELOAD_SW__: boolean;
declare global {
	namespace App {
		interface Locals {
			userid: string;
			buildDate: string;
			periodicUpdates: boolean;
		}
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
