<script lang="ts">
	import { enhance } from '$app/forms';
	import MetaTag from '../../../utils/MetaTag.svelte';

	const path: string = '/dashboard/sms';
	const description: string = 'Send SMS - IPOSUC';
	const title: string = 'Send SMS - IPOSUC';
	const subtitle: string = 'Send SMS';

	export let form;
	export let data;
	console.log('data in sms page: ', data);
</script>

<MetaTag {path} {description} {title} {subtitle} />

<div class="flex min-h-screen flex-col justify-center bg-gray-100 py-12 sm:px-6 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-md">
		<h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Send Message</h2>
	</div>

	<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
		<div class="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
			<!-- Displaying error message from server -->
			{#if form?.message}
				<div class="mb-4 text-center text-sm text-red-500">{form.message}</div>
			{/if}

			<form class="space-y-6" action="?/sendSms" method="post">
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
					<label for="msg" class="block text-sm font-medium text-gray-700"> Message </label>
					<div class="mt-1">
						<textarea
							id="msg"
							name="msg"
							required
							value={form?.msg ?? ''}
							class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
							aria-label="Message"
						/>
					</div>
				</div>

				<div>
					<div class="w-full">
						{#if form?.error}
							<small>{form?.msg}</small>
						{/if}
					</div>

					<button class=" btn btn-secondary w-full">Send Message</button>
				</div>
			</form>
		</div>

		<form action="?/checkSmsBalance" method="post">
			<button class="btn btn-outline" type="submit">Check Balance</button>
		</form>
	</div>
</div>
