<script lang="ts">
	import '../../app.pcss';
	import Footer from '../(dashboard)/dashboard/Footer.svelte';
	import Navbar from './components/Navbar.svelte';
	export let data;
</script>

<Navbar data={data.user} />
<main class="mt-16 min-h-[700px]">
	<slot />
</main>
<Footer />
