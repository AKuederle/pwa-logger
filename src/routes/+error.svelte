<script>
	import { page } from '$app/stores';
</script>

<h1>{$page.status}: {$page.error?.message}</h1>
<a href="/" class="btn variant-filled">Go back home</a>
