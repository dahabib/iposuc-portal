<script lang="ts">
	import { enhance } from '$app/forms';
	import { Avatar, Button, Card, Heading, Fileupload, Helper, Input } from 'flowbite-svelte';
	import { UploadSolid } from 'flowbite-svelte-icons';

	export let data;
	const { avatar, id } = data;
</script>

<Card
	size="xl"
	class="block shadow-sm sm:flex sm:space-x-4 sm:py-6 xl:block xl:space-x-0 2xl:flex 2xl:space-x-4"
	horizontal
>
	<Avatar
		src={avatar}
		class="mb-4 h-28 w-28 rounded-lg sm:mb-0 xl:mb-4 2xl:mb-0"
		size="none"
		rounded
	/>

	<div class="py-0.5">
		<Heading tag="h3" class="text-xl">Profile picture</Heading>
		<Helper class="mb-4 mt-1 pt-px text-sm">PNG, JPG /JPEG (Size: 200x200px)</Helper>
		<form
			method="post"
			action="?/uploadAvatar"
			enctype="multipart/form-data"
			use:enhance
			class="flex items-center space-x-4"
		>
			<Fileupload size="sm" class="px-3" name="avatar" accept="image/png, image/jpeg, image/jpg"
				><UploadSolid size="sm" class="-ms-1 me-2" />
				Select Photo</Fileupload
			>
			<Input type="hidden" name="userId" value={id} />
			<Button type="submit" size="sm" class="px-3" color="alternative">Upload</Button>
		</form>
	</div>
</Card>
