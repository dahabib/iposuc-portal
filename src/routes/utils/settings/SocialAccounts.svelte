<script>
	import { A, Button, Input } from 'flowbite-svelte';
	import { FacebookSolid, WhatsappSolid } from 'flowbite-svelte-icons';
	import Card from '../widgets/Card.svelte';

	const items = [
		{ icon: FacebookSolid, name: 'Facebook', link: '' },
		{ icon: WhatsappSolid, name: 'Twitter', link: '' }
	];
</script>

<Card title="Social accounts">
	<ul class="divide-y divide-gray-200 dark:divide-gray-700">
		{#each items as { icon, name, link }}
			<li class="py-4">
				<div class="flex place-items-center space-x-4">
					<svelte:component this={icon} size="lg" class="text-gray-900 dark:text-white" />
					<div class="flex flex-col space-y-2">
						<p class="truncate text-base font-semibold text-gray-900 dark:text-white">
							{name}
						</p>
						<Input
							placeholder={`${name} account link`}
							class="w-full border font-normal outline-none"
							bind:value={link}
						></Input>
					</div>
				</div>
			</li>
		{/each}
	</ul>
	<Button class="mt-2 w-fit">Update</Button>
</Card>
