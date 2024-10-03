<script lang="ts">
	import { DarkMode, NavBrand, NavHamburger, NavLi, NavUl, Navbar } from 'flowbite-svelte';
	import UserMenu from '../../utils/widgets/UserMenu.svelte';
	import Users from '../../data/users.json';
	export let data;
	const { name, role } = data;
</script>

<Navbar
	class="fixed start-0 top-0 z-20 w-full border-b border-gray-200 px-2 py-1 dark:border-gray-700 sm:px-4"
	color="dark"
>
	<NavBrand href="/">
		<img src="/favicon.png" class="me-3 h-6 sm:h-9" alt="IPOSUC Logo" />
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">IPOSUC</span>
	</NavBrand>
	<NavHamburger />
	<NavUl class="">
		<NavLi href="/" active={true}>Home</NavLi>
		<NavLi href="/posts">Posts</NavLi>
		<NavLi href="/about-us">About</NavLi>
		<NavLi href="/committee">Committee</NavLi>
		<NavLi href="/contact">Contact</NavLi>
	</NavUl>
	<div class="py-4">
		<DarkMode />
		<UserMenu {name} {role} />
	</div>
</Navbar>
