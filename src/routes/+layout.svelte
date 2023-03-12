<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/all.css';

	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../app.postcss';

	import { Toast } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import { pwaInfo } from 'virtual:pwa-info';


	let ReloadPrompt
	onMount(async () => {
		pwaInfo && (ReloadPrompt = (await import('$lib/ReloadPrompt.svelte')).default)
	})

	$: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : ''

</script>

<svelte:head>
    {@html webManifest}
</svelte:head>

<slot />

{#if ReloadPrompt}
	<svelte:component this={ReloadPrompt} />
{/if}

<Toast />
