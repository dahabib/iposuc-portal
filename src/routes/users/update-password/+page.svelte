<script lang="ts">
	import { Label, Input, Button, Card } from 'flowbite-svelte';
	import MetaTag from '../../utils/MetaTag.svelte';

	const title = 'Update your password';
	const site = {
		name: 'IPOSUC',
		img: '/favicon.png',
		link: '/',
		imgAlt: 'IPOSUC Logo'
	};
	const btnTitle = 'Update Password';
	const labelClass = 'mb-2 dark:text-white';
	const inputClass = 'border outline-none dark:border-gray-600 dark:bg-gray-700';

	const path: string = '/users/update-password';
	const description: string = 'Update password - IPOSUC Portal';
	const metaTitle: string = 'IPOSUC - Update password';
	const subtitle: string = 'Update password';

	export let mainClass = 'bg-gray-50 dark:bg-gray-900 w-full';
	export let mainDivClass =
		'flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900';
	export let siteLinkClass =
		'flex flex-col space-y-4 items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white';
	export let siteImgClass = 'h-20';
	export let cardH1Class = 'text-2xl font-bold text-gray-900 dark:text-white';

	import { enhance } from '$app/forms';
	import type { Actions } from '@sveltejs/kit';
	import type { ActionData } from '../../login/$types';
	import { toast } from '@zerodevx/svelte-toast';
	export let form: ActionData;

	if (form?.message) {
		toast.push(form?.message, {
			theme: {
				'--toastColor': 'mintcream',
				'--toastBackground': 'rgba(240, 22, 56, 0.9)',
				'--toastBarBackground': 'rgba(161, 11, 35, 0.9)'
			}
		});
	}
</script>

<MetaTag {path} {description} title={metaTitle} {subtitle} />

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
			<form class="mt-8 space-y-6" method="post" action="?/changePassword" use:enhance>
				<div>
					<Label for="currentPassword" class={labelClass}>Current Password</Label>
					<Input
						type="password"
						name="currentPassword"
						id="currentPassword"
						placeholder="********"
						required
						class={inputClass}
					/>
				</div>
				<div>
					<Label for="password" class={labelClass}>New password</Label>
					<Input
						type="password"
						name="password"
						id="password"
						placeholder="••••••••"
						required
						class={inputClass}
					/>
				</div>
				<div>
					<Label for="confirm-password" class={labelClass}>Confirm password</Label>
					<Input
						type="password"
						name="confirm-password"
						id="confirm-password"
						placeholder="••••••••"
						required
						class={inputClass}
					/>
				</div>
				<Button type="submit">{btnTitle}</Button>
			</form>
		</Card>
	</div>
</main>
