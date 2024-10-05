<!-- <script lang="ts">
	import { enhance } from '$app/forms';
	import MetaTag from '../../../../utils/MetaTag.svelte';

	const path: string = '/dashboard/sms/check-balance';
	const description: string = 'Check SMS Balance - IPOSUC';
	const title: string = 'Check SMS Balance - IPOSUC';
	const subtitle: string = 'Check SMS Balance';

	export let form;
	export let data;
	console.log('data in sms page: ', data);
</script>

<MetaTag {path} {description} {title} {subtitle} />

<div class="flex min-h-screen flex-col justify-center bg-gray-100 py-12 sm:px-6 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-md">
		<h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Check SMS Balance</h2>
	</div>

	<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
		<div class="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
			 Displaying error message from server -->
<!-- {#if form?.message}
				<div class="mb-4 text-center text-sm text-red-500">{form.message}</div>
			{/if}

			<form class="space-y-6" action="?/checkBalance" method="post">
				<div>
					<div class="w-full">
						{#if form?.error}
							<small>{form?.message}</small>
						{/if}
					</div>

					<button class=" btn btn-secondary w-full">Check Balance</button>
				</div>
			</form>
		</div>

		<form action="?/checkSmsBalance" method="post">
			<button class="btn btn-outline" type="submit">Check Balance</button>
		</form>
	</div>
</div> -->
