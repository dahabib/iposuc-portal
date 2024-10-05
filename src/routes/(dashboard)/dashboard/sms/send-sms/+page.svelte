<script lang="ts">
	import { enhance } from '$app/forms';
	import { Toast, Label, Textarea, Button, Select, Input, Heading } from 'flowbite-svelte';
	import { PaperPlaneOutline } from 'flowbite-svelte-icons';
	import MetaTag from '../../../../utils/MetaTag.svelte';
	import { toast } from '@zerodevx/svelte-toast';
	import type { ActionData, PageData } from './$types';

	const path: string = '/dashboard/sms/send-sms';
	const description: string = 'Send SMS - IPOSUC';
	const title: string = 'Send SMS - IPOSUC';
	const subtitle: string = 'Send SMS';

	let selectedReceivers: string | null = '';
	const sendToOptions = [
		{ value: 'all', name: 'All' },
		{ value: 'admins', name: 'Admins' },
		{ value: 'users', name: 'Users' },
		{ value: 'manual', name: 'Specific Persons' }
	];

	export let form: ActionData;
	export let data: PageData;

	let inputText = '';
	let selectedItems: any[] = [];

	function addItem(event: { key: string; preventDefault: () => void }) {
		if (inputText.trim() && !selectedItems.includes(inputText.trim())) {
			selectedItems = [...selectedItems, inputText.trim()];
		}
		inputText = ''; // Clear the input after adding the item
	}

	// Handle keydown for ',', 'Space', or 'Enter'
	function handleKeyDown(event: { key: string; preventDefault: () => void }) {
		if (event.key === 'Enter' || event.key === ',' || event.key === ' ') {
			event.preventDefault(); // Prevent default behavior of space and enter
			addItem(event);
		}
	}

	function removeItem(index: number) {
		selectedItems = selectedItems.filter((_, i) => i !== index);
	}

	if (form?.message) {
		toast.push(form.message, {
			theme: {
				'--toastColor': 'mintcream',
				'--toastBackground': 'rgba(72,187,120,0.9)',
				'--toastBarBackground': '#2F855A'
			}
		});
	}
</script>

<MetaTag {path} {description} {title} {subtitle} />

<div class="container mx-auto flex flex-col bg-gray-100 py-8 dark:bg-gray-900 sm:px-6 lg:px-8">
	<div class="flex items-center">
		<Toast
			dismissable={false}
			contentClass="flex space-x-4 rtl:space-x-reverse divide-x rtl:divide-x-reverse divide-gray-200 dark:divide-gray-700"
		>
			<PaperPlaneOutline class="h-5 w-5 rotate-45 text-primary-600 dark:text-primary-500" />
			<div class="ps-4 text-xl font-semibold">Balance : ৳ {data.balance}</div>
		</Toast>
	</div>

	<Heading
		tag="h3"
		class="my-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-50"
	>
		Send Message
	</Heading>

	<div class="w-full sm:mx-auto sm:max-w-md">
		<div class="bg-white shadow dark:bg-gray-900 sm:rounded-lg sm:px-10">
			<!-- Displaying error message from server -->

			<form class="space-y-4 py-5" action="?/sendSms" method="post" use:enhance>
				<div>
					<Label for="mobile" class="mb-2">Mobile Number</Label>
					<Select items={sendToOptions} bind:value={selectedReceivers} />
					{#if selectedReceivers === 'manual'}
						<div class="mt-1">
							<Input
								id="mobile"
								name="numberInput"
								type="tel"
								bind:value={inputText}
								on:keydown={handleKeyDown}
								placeholder="Type mobile number and press ',' or space..."
								class="block w-full"
								aria-label="Mobile number"
							/>
						</div>
					{/if}
				</div>
				<div class="flex flex-wrap gap-2">
					{#each selectedItems as item, index}
						<span class="rounded-md bg-blue-500 px-2 py-1 text-white">
							{item}
							<button class="ml-2" on:click={() => removeItem(index)}>x</button>
						</span>
					{/each}
				</div>

				<div>
					<Label for="textarea-id" class="mb-2">Message</Label>
					<Textarea
						id="textarea-id"
						value={form?.msg ?? ''}
						placeholder="Your message"
						rows="6"
						name="msg"
					/>
				</div>
				<Input type="hidden" name="mobile" bind:value={selectedItems} />

				<div>
					<div class="w-full">
						{#if form?.error}
							<small>{form?.msg}</small>
						{/if}
					</div>

					<Button type="submit" class=" btn btn-secondary w-full">Send Message</Button>
				</div>
			</form>
		</div>
	</div>
</div>
