<script lang="ts">
	import '../app.postcss';
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/all.css';

	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../app.postcss';

	import { Toast } from '@skeletonlabs/skeleton';

</script>

<slot />

<Toast />
