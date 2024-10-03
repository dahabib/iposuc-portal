<script lang="ts">
	import { imagesPath } from '../../utils/variables';
	import { Avatar, Dropdown, DropdownDivider, DropdownHeader, DropdownItem } from 'flowbite-svelte';

	export let data;
	console.log(data);
	export let avatar: string = ''; // "neil-sims.png",
</script>

<button class="ms-3 rounded-full ring-gray-400 focus:ring-4 dark:ring-gray-600">
	<Avatar size="sm" src={imagesPath(avatar, 'users')} tabindex="0" />
</button>
<Dropdown placement="bottom-end">
	<DropdownHeader>
		<!-- <span class="block text-sm">{user.name}</span>
		<span class="block truncate text-sm font-medium">{user.role}</span> -->
	</DropdownHeader>
	<DropdownItem href="/dashboard/">Dashboard</DropdownItem>
	<DropdownItem href="/dashboard/profile">Profile</DropdownItem>
	<DropdownItem href="/dashboard/settings">Settings</DropdownItem>
	<DropdownDivider />
	<DropdownItem href="/logout">Logout</DropdownItem>
</Dropdown>
