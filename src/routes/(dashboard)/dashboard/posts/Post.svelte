<script lang="ts">
	import { Button, CloseButton, Heading, Input, Label, Select, Textarea } from 'flowbite-svelte';
	import { CloseOutline } from 'flowbite-svelte-icons';
	export let hidden: boolean = true; // modal control
</script>

<Heading tag="h5" class="mb-6 text-sm font-semibold uppercase">Add new post</Heading>
<CloseButton
	on:click={() => (hidden = true)}
	class="absolute right-2.5 top-2.5 text-gray-400 hover:text-black dark:text-white"
/>

<form action="#">
	<div class="space-y-4">
		<Label class="space-y-2">
			<span>Title</span>
			<Input
				name="title"
				class="border font-normal outline-none"
				placeholder="Type product name"
				required
			/>
		</Label>

		<Label class="space-y-2">
			<span>Category</span>
			<Select class="border-gray-300 font-normal outline-none">
				<option selected>Select category</option>
				<option value="FL">Flowbite</option>
				<option value="RE">React</option>
				<option value="AN">Angular</option>
				<option value="VU">Vue</option>
			</Select>
		</Label>
		<Label class="space-y-2">
			<span>Description</span>
			<Textarea
				rows="4"
				placeholder="Enter event description here"
				class="border-gray-300 font-normal outline-none"
			></Textarea>
		</Label>
		<Label class="space-y-2">
			<span>Audience</span>
			<Select class="border-gray-300 font-normal outline-none">
				<option selected value="all">All</option>
				<option value="admin">Admin</option>
			</Select>
		</Label>

		<div class="bottom-0 left-0 flex w-full justify-center space-x-4 pb-4 md:absolute md:px-4">
			<Button type="submit" class="w-full">Add Posts</Button>
			<Button color="alternative" class="w-full" on:click={() => (hidden = true)}>
				<CloseOutline />
				Cancel
			</Button>
		</div>
	</div>
</form>
