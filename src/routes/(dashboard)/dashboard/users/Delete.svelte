<script lang="ts">
	import { Button, CloseButton, Heading, Modal, Input } from 'flowbite-svelte';
	import { ExclamationCircleOutline } from 'flowbite-svelte-icons';
	export let open: boolean = false; // modal control

	import { enhance } from '$app/forms';
	import type { Action, PageData } from './$types';

	// export let form: Action;
	// console.log(form?.message);
	export let data: PageData;
</script>

<Modal bind:open size="sm">
	<ExclamationCircleOutline class="mx-auto mb-4 mt-8 h-10 w-10 text-red-600" />

	<Heading tag="h3" class="mb-6 text-center text-lg text-gray-500 dark:text-gray-400">
		Are you sure you want to delete this product?
	</Heading>

	<form method="post" action="?/deleteUser" use:enhance class="flex items-center justify-center">
		<Input type="hidden" name="userId" value={data} />
		<Button type="submit" color="red" class="mr-2" on:click={() => (open = false)}
			>Yes, I'm sure</Button
		>
		<Button type="button" color="alternative" on:click={() => (open = false)}>No, cancel</Button>
	</form>
</Modal>
