<script lang="ts">
	import { Button, Input, Label, type InputType } from 'flowbite-svelte';
	import Card from '../widgets/Card.svelte';

	const inputs: { label: string; type: InputType; placeholder: string }[] = [
		{ label: 'Full Name (English)', type: 'text', placeholder: 'Bonnie Islam' },
		{ label: 'Full Name (Bangla)', type: 'text', placeholder: 'বহ্নি ইসলাম' },
		{ label: 'Designation', type: 'text', placeholder: 'Data Entry Operator' },
		{ label: 'Email', type: 'email', placeholder: 'myname@example.com' },
		{ label: 'Date of birth', type: 'date', placeholder: '1900-11-28' },
		{ label: 'Education', type: 'text', placeholder: 'Select your last Education' },
		{ label: 'Fathers Name (English)', type: 'text', placeholder: 'Fathers Name' },
		{ label: 'Fathers Name (Bangla)', type: 'text', placeholder: 'পিতার নাম' },
		{ label: 'Mothers Name (English)', type: 'text', placeholder: 'Mothers Name' },
		{ label: 'Mothers Name (Bangla)', type: 'text', placeholder: 'মাতার নাম' },
		{
			label: 'Present Address',
			type: 'text',
			placeholder:
				'House No: 23, Village: New Villate, Post Office: PostOffice - 1010, Upazila: Tetulia, District: Chuadanga'
		},
		{
			label: 'Permanent Address',
			type: 'text',
			placeholder:
				'House No: 23, Village: New Villate, Post Office: PostOffice - 1010, Upazila: Tetulia, District: Chuadanga'
		},
		{ label: 'Joining Date', type: 'date', placeholder: '2016-03-01' },
		{ label: 'Files', type: 'file', placeholder: 'Select your file' }
	];

	export let data;
	console.log('data in generalInfo: ', data);
</script>

<Card title="General Information" class="-mt-px max-w-none">
	<form class="grid grid-cols-6 gap-6">
		{#each inputs as { label, type, placeholder }}
			<Label class="col-span-6 space-y-2 sm:col-span-3">
				<span>{label}</span>
				<Input {type} {placeholder} class="border font-normal outline-none" />
			</Label>
		{/each}
		<Button class="w-fit whitespace-nowrap">Save all</Button>
	</form>
</Card>
