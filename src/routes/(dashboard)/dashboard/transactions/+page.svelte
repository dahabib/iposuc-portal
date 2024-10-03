<script lang="ts">
	import { onMount, type ComponentType } from 'svelte';
	import { sineIn } from 'svelte/easing';
	import MetaTag from '../../../utils/MetaTag.svelte';
	import Product from '../posts/Post.svelte';
	import Transactions from '../../../utils/dashboard/Transactions.svelte';
	// import { PageData } from '../$types';

	let hidden: boolean = true; // modal control
	let drawerComponent: ComponentType = Product; // drawer component

	const toggle = (component: ComponentType) => {
		drawerComponent = component;
		hidden = !hidden;
	};

	const path: string = '/dashboard/transactions';
	const description: string = 'Transactions - IPOSUC Dashboard';
	const title: string = 'Transactions - IPOSUC';
	const subtitle: string = 'Transactions';
	let transitionParams = {
		x: 320,
		duration: 200,
		easing: sineIn
	};

	// export let data: PageData;

	// let chartOptions = chart_options_func(false);
	// chartOptions.series = data.series;

	// let dark = false;

	// function handler(ev: Event) {
	// 	if ('detail' in ev) {
	// 		chartOptions = chart_options_func(ev.detail);
	// 		chartOptions.series = data.series;
	// 		dark = !!ev.detail;
	// 	}
	// }

	// onMount(() => {
	// 	document.addEventListener('dark', handler);
	// 	return () => document.removeEventListener('dark', handler);
	// });

	// function chart_options_func(detail: unknown): any {
	// 	throw new Error('Function not implemented.');
	// }
</script>

<MetaTag {path} {description} {title} {subtitle} />

<main class="p-4">
	<Transactions />
</main>
