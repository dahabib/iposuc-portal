<script lang="ts">
	import { A, Checkbox, Button, Card } from 'flowbite-svelte';
	export let title = 'Create a Free Account';
	export let site = {
		name: 'IPOSUC',
		img: '/favicon.png',
		link: '/',
		imgAlt: 'IPOSUC Logo'
	};
	export let acceptTerms: boolean = true;
	export let btnTitle = 'Create account';
	export let termsLink = '/';
	export let mainClass = 'bg-gray-50 dark:bg-gray-900 w-full';
	export let mainDivClass =
		'flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900';
	export let siteLinkClass =
		'flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white';
	export let siteImgClass = 'mr-4 h-11';
	export let cardH1Class = 'text-2xl font-bold text-gray-900 dark:text-white';
</script>

<main class={mainClass}>
	<div class={mainDivClass}>
		<a href={site.link} class={siteLinkClass}>
			<img src={site.img} class={siteImgClass} alt={site.imgAlt} />
			<span>{site.name}</span>
		</a>
		<!-- Card -->
		<Card class="w-full" size="md" border={false}>
			<h1 class={cardH1Class}>
				{title}
			</h1>
			<form class="mt-8 space-y-6" on:submit|preventDefault>
				<slot />
				{#if acceptTerms}
					<Checkbox class="pt-1" name="accept">
						<span>
							I accept the <A href={termsLink}>Terms and Conditions</A>
						</span>
					</Checkbox>
				{/if}
				<Button type="submit" size="lg">{btnTitle}</Button>
			</form>
		</Card>
	</div>
</main>
