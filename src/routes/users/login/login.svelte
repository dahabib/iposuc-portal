<script lang="ts">
	import { Label, Input } from 'flowbite-svelte';
	import SignIn from '../../utils/authentication/SignIn.svelte';
	import MetaTag from '../../utils/MetaTag.svelte';
	import { EyeOutline, EyeSlashOutline } from 'flowbite-svelte-icons';
	let title = 'Login';
	let site = {
		name: 'IDEA-2 Project Officer-Staff Unity Council',
		img: '/favicon.png',
		link: '/',
		imgAlt: 'IPOSUC Logo'
	};
	let showPassword = false;
	let rememberMe = false;
	let lostPassword = false;
	let createAccount = false;
	let lostPasswordLink = 'forgot-password';
	let loginTitle = 'Login to your account';
	let registerLink = 'sign-up';
	let createAccountTitle = 'Create account';

	const onSubmit = (e: Event) => {
		const formData = new FormData(e.target as HTMLFormElement);

		const data: Record<string, string | File> = {};
		for (const field of formData.entries()) {
			const [key, value] = field;
			data[key] = value;
		}
		console.log(data);
	};

	const path: string = '/authentication/login';
	const description: string = 'Sign in - IDEA-2 Project Officer-Staff Unity Council';
	const metaTitle: string = 'IPOSUC Admin Dashboard - Login';
	const subtitle: string = 'Login';
</script>

<MetaTag {path} {description} title={metaTitle} {subtitle} />

<SignIn
	{title}
	{site}
	{rememberMe}
	{lostPassword}
	{createAccount}
	{lostPasswordLink}
	{loginTitle}
	{registerLink}
	{createAccountTitle}
	on:submit={onSubmit}
>
	<div>
		<Label for="mobile" class="mb-2 dark:text-white">Mobile Number</Label>
		<Input
			type="tel"
			name="mobile"
			id="mobile"
			placeholder="015********"
			required
			class="border outline-none dark:border-gray-600 dark:bg-gray-700"
		/>
	</div>
	<div>
		<Label for="password" class="mb-2 dark:text-white">Password</Label>
		<Input
			type={showPassword ? 'text' : 'password'}
			name="password"
			id="password"
			placeholder="••••••••"
			required
			class="border outline-none dark:border-gray-600 dark:bg-gray-700"
		>
			<button
				slot="right"
				on:click={() => (showPassword = !showPassword)}
				class="pointer-events-auto"
			>
				{#if showPassword}
					<EyeOutline class="h-6 w-6" />
				{:else}
					<EyeSlashOutline class="h-6 w-6" />
				{/if}
			</button>
		</Input>
	</div>
</SignIn>
