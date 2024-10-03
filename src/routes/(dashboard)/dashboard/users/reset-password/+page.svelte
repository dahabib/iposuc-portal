<script lang="ts">
	import { Button, Card, Label, Input } from 'flowbite-svelte';
	import MetaTag from '../../../../utils/MetaTag.svelte';
	export let title = 'Reset users password';
	export let btnTitle = 'Reset Password';
	export let mainClass = 'bg-gray-50 dark:bg-gray-900 w-full';
	export let mainDivClass =
		'flex flex-col items-center justify-center px-6 pt-8 mx-auto pt:mt-0 dark:bg-gray-900';
	export let cardH1Class = 'text-2xl font-bold text-gray-900 dark:text-white';

	const labelClass = 'mb-2 dark:text-white';
	const inputClass = 'border outline-none dark:border-gray-600 dark:bg-gray-700';

	const path: string = '/dashboard/users/reset-password';
	const description: string = 'Reset password - IPOSUC Admin Dashboard';
	const metaTitle: string = 'IPOSUC - Reset password';
	const subtitle: string = 'Reset password';
</script>

<MetaTag {path} {description} title={metaTitle} {subtitle} />

<main class={mainClass}>
	<div class={mainDivClass}>
		<!-- Card -->
		<Card class="w-full" size="md" border={false}>
			<h1 class={cardH1Class}>
				{title}
			</h1>
			<form class="mt-8 space-y-6" on:submit|preventDefault>
				<div>
					<Label for="Mobile" class={labelClass}>Users Mobile Number</Label>
					<Input
						type="tel"
						name="mobile"
						id="mobile"
						placeholder="015********"
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
				<Button type="submit">{btnTitle}</Button>
			</form>
		</Card>
	</div>
</main>
