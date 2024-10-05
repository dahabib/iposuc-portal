<script lang="ts">
	import { Avatar, Dropdown, DropdownDivider, DropdownHeader, DropdownItem } from 'flowbite-svelte';

	export let name;
	export let role;
	export let avatar: string = '';
</script>

<button class="ms-3 rounded-full ring-gray-400 focus:ring-4 dark:ring-gray-600">
	<Avatar size="sm" src={avatar} tabindex="0" alt={name} />
</button>
<Dropdown placement="bottom-end">
	<DropdownHeader>
		<span class="block text-sm">{name}</span>
		<span class="block truncate text-sm font-medium">{role}</span>
	</DropdownHeader>
	<DropdownItem href="/dashboard/">Dashboard</DropdownItem>
	<DropdownItem href="/dashboard/profile">Profile</DropdownItem>
	<DropdownItem href="/dashboard/settings">Settings</DropdownItem>
	<DropdownDivider />
	<DropdownItem href="/logout">Logout</DropdownItem>
</Dropdown>
