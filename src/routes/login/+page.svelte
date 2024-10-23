<script lang="ts">
	import '../../app.pcss';
	import { toast } from '@zerodevx/svelte-toast';
	import { Button, Heading, Input } from 'flowbite-svelte';
	import MetaTag from '../utils/MetaTag.svelte';
	import { onMount } from 'svelte';
	import { EyeOutline, EyeSlashOutline } from 'flowbite-svelte-icons';

	let showPassword = false;

	export let form;

	let site = {
		name: 'IDEA-2 Project Officer-Staff Unity Council',
		img: '/favicon.png',
		link: '/',
		imgAlt: 'IPOSUC Logo'
	};

	const path: string = '/authentication/login';
	const description: string = 'Sign in - IDEA-2 Project Officer-Staff Unity Council';
	const metaTitle: string = 'Login - IDEA-2 Project Officer-Staff Unity Council';
	const subtitle: string = 'Login';

	const showToast = (text) => {
		toast.push(text, {
			theme: {
				'--toastColor': 'mintcream',
				'--toastBackground': 'rgba(72,187,120,0.9)',
				'--toastBarBackground': '#2F855A'
			}
		});
	};

	$: if (form && form.message) {
		showToast(form?.message);
	}
</script>

<MetaTag {path} {description} title={metaTitle} {subtitle} />

<div class="flex min-h-screen flex-col justify-center bg-gray-300 py-12 sm:px-6 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-md">
		<div class="flex flex-col space-y-2 text-center">
			<img src={site.img} alt={site.imgAlt} class="mx-auto h-auto w-40 rounded-full p-2" />
			<Heading tag="h4">Welcome to IDEA-2 Project Officer-Staff Unity Council</Heading>
		</div>
		<h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Login</h2>
	</div>

	<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
		<div class="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
			<form class="space-y-6" action="?/login" method="post">
				<div>
					<label for="mobile" class="block text-sm font-medium text-gray-700">
						Mobile Number
					</label>
					<div class="mt-1">
						<input
							id="mobile"
							name="mobile"
							type="tel"
							required
							value={form?.mobile ?? ''}
							class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
							aria-label="Mobile number"
						/>
					</div>
				</div>

				<div>
					<label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
					<div class="mt-1">
						<Input
							type={showPassword ? 'text' : 'password'}
							name="password"
							id="password"
							placeholder="Enter your password"
							value={form?.password ?? ''}
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
				</div>

				<div>
					<Button type="submit" class="w-full">Login</Button>
				</div>
			</form>
		</div>
	</div>
</div>
