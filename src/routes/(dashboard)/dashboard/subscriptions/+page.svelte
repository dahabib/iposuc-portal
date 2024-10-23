<script lang="ts">
	import { onMount, type ComponentType } from 'svelte';
	import { Heading } from 'flowbite-svelte';
	import { sineIn } from 'svelte/easing';
	import MetaTag from '../../../utils/MetaTag.svelte';
	import Product from '../posts/Post.svelte';

	let hidden: boolean = true; // modal control
	let drawerComponent: ComponentType = Product; // drawer component

	const toggle = (component: ComponentType) => {
		drawerComponent = component;
		hidden = !hidden;
	};

	const path: string = '/dashboard/subscriptions';
	const description: string = 'Subscriptions - IPOSUC Dashboard';
	const title: string = 'Subscriptions - IPOSUC';
	const subtitle: string = 'Subscriptions';
	let transitionParams = {
		x: 320,
		duration: 200,
		easing: sineIn
	};

	export let data;
	const { subscriptions } = data;
	console.log(data);
</script>

<MetaTag {path} {description} {title} {subtitle} />

<main class="space-y-2 p-4">
	<Heading tag="h3">Subscriptions</Heading>
	{#if !subscriptions.length}
		<p>No subscriptions found!</p>
	{/if}
</main>
