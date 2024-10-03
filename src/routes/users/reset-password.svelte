<script lang="ts">
	import { Label, Input } from 'flowbite-svelte';
	import ResetPassword from '../utils/authentication/ResetPassword.svelte';
	import MetaTag from '../utils/MetaTag.svelte';
	const title = 'Reset your password';
	const site = {
		name: 'IPOSUC',
		img: '/favicon.png',
		link: '/',
		imgAlt: 'IPOSUC Logo'
	};
	const acceptTerms = true;
	const btnTitle = 'Create account';
	const termsLink = '/';
	const labelClass = 'mb-2 dark:text-white';
	const inputClass = 'border outline-none dark:border-gray-600 dark:bg-gray-700';
	const onSubmit = (e: Event) => {
		const formData = new FormData(e.target as HTMLFormElement);

		const data: Record<string, string | File> = {};
		for (const field of formData.entries()) {
			const [key, value] = field;
			data[key] = value;
		}
		console.log(data);
	};

	const path: string = '/users/reset-password';
	const description: string = 'Reset password - IPOSUC Admin Dashboard';
	const metaTitle: string = 'IPOSUC - Reset password';
	const subtitle: string = 'Reset password';
</script>

<MetaTag {path} {description} title={metaTitle} {subtitle} />

<ResetPassword {title} {site} {btnTitle} on:submit={onSubmit}>
	<div>
		<Label for="Mobile" class={labelClass}>Your Mobile Number</Label>
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
</ResetPassword>
