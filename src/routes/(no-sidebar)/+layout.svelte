<script>
	import Footer from '../(no-sidebar)/Footer.svelte';
	import Navbar from '../(dashboard)//dashboard/Navbar.svelte';

	import '../../app.pcss';
	export let data;
	const { user } = data;
</script>

<header
	class="fixed top-0 z-40 mx-auto w-full flex-none border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-800"
>
	<Navbar data={user} />
</header>
<div class="mx-auto max-w-screen-2xl pt-[70px]">
	<slot />
	<Footer />
</div>
