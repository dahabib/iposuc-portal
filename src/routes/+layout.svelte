<script>
	import '../app.pcss';
	import modeobserver from './utils/modeobserver';
	import { onMount } from 'svelte';

	onMount(modeobserver);
</script>

<slot />
