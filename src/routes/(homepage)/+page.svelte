<script lang="ts">
	import MetaTag from '../utils/MetaTag.svelte';

	const path: string = '/';
	const description: string = 'Blog Posts - IPOSUC';
	const title: string = 'Posts - IPOSUC';
	const subtitle: string = 'Pricing';
</script>

<MetaTag {path} {description} {title} {subtitle} />

<main class="mx-auto bg-gray-50 dark:bg-gray-900">
	<div class="container mx-auto px-4 pt-24 dark:bg-gray-900 md:pt-32 lg:px-0">
		<section
			class="grid grid-cols-1 space-y-12 pt-9 md:grid-cols-2 md:gap-6 md:gap-x-6 md:space-y-0 lg:grid-cols-3"
		></section>
	</div>
</main>
