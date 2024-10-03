<script lang="ts">
	import { Breadcrumb, BreadcrumbItem, Input } from 'flowbite-svelte';
	import MetaTag from '../../../utils/MetaTag.svelte';
	import {
		CogSolid,
		TrashBinSolid,
		ExclamationCircleSolid,
		DotsVerticalOutline,
		EditOutline
	} from 'flowbite-svelte-icons';
	import Button from 'flowbite-svelte/Button.svelte';
	import Checkbox from 'flowbite-svelte/Checkbox.svelte';
	import Drawer from 'flowbite-svelte/Drawer.svelte';
	import Heading from 'flowbite-svelte/Heading.svelte';
	import Table from 'flowbite-svelte/Table.svelte';
	import TableBody from 'flowbite-svelte/TableBody.svelte';
	import TableBodyCell from 'flowbite-svelte/TableBodyCell.svelte';
	import TableBodyRow from 'flowbite-svelte/TableBodyRow.svelte';
	import TableHead from 'flowbite-svelte/TableHead.svelte';
	import TableHeadCell from 'flowbite-svelte/TableHeadCell.svelte';
	import Toolbar from 'flowbite-svelte/Toolbar.svelte';
	import ToolbarButton from 'flowbite-svelte/ToolbarButton.svelte';
	import { onMount, type ComponentType } from 'svelte';
	import Post from './Post.svelte';
	import { sineIn } from 'svelte/easing';

	const path: string = '/dashboard/posts';
	const title: string = 'IPOSUC - Posts';
	const description: string = 'Posts page - IPOSUC';
	const subtitle: string = 'Posts';

	let hidden: boolean = true; // modal control
	let drawerComponent: ComponentType = Post; // drawer component

	const toggle = (component: ComponentType) => {
		drawerComponent = component;
		hidden = !hidden;
	};

	let transitionParams = {
		x: 320,
		duration: 200,
		easing: sineIn
	};
</script>

<MetaTag {path} {description} {title} {subtitle} />

<main class="relative h-full w-full overflow-y-auto bg-white dark:bg-gray-800">
	<div class="p-4">
		<Breadcrumb class="mb-5">
			<BreadcrumbItem home href="/dashboard">Dashboard</BreadcrumbItem>
			<BreadcrumbItem href="/dashboard/posts">Posts</BreadcrumbItem>
			<BreadcrumbItem>All Posts</BreadcrumbItem>
		</Breadcrumb>
		<Heading tag="h1" class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
			All Posts
		</Heading>

		<Toolbar embedded class="w-full py-4 text-gray-500 dark:text-gray-400">
			<Input placeholder="Search for products" class="me-6 w-80 border xl:w-96" />
			<ToolbarButton
				color="dark"
				class="m-0 rounded p-1 hover:bg-gray-100 focus:ring-0 dark:hover:bg-gray-700"
			>
				<CogSolid size="lg" />
			</ToolbarButton>
			<ToolbarButton
				color="dark"
				class="m-0 rounded p-1 hover:bg-gray-100 focus:ring-0 dark:hover:bg-gray-700"
			>
				<TrashBinSolid size="lg" />
			</ToolbarButton>
			<ToolbarButton
				color="dark"
				class="m-0 rounded p-1 hover:bg-gray-100 focus:ring-0 dark:hover:bg-gray-700"
			>
				<ExclamationCircleSolid size="lg" />
			</ToolbarButton>
			<ToolbarButton
				color="dark"
				class="m-0 rounded p-1 hover:bg-gray-100 focus:ring-0 dark:hover:bg-gray-700"
			>
				<DotsVerticalOutline size="lg" />
			</ToolbarButton>

			<div slot="end" class="space-x-2">
				<Button class="whitespace-nowrap" on:click={() => toggle(Post)}>Add new Posts</Button>
			</div>
		</Toolbar>
	</div>
	<!-- <Table>
		<TableHead class="border-y border-gray-200 bg-gray-100 dark:border-gray-700">
			<TableHeadCell class="w-4 p-4"><Checkbox /></TableHeadCell>
			{#each ['Product Name', 'Technology', 'Description', 'ID', 'Price', 'Discount', 'Actions'] as title}
				<TableHeadCell class="ps-4 font-normal">{title}</TableHeadCell>
			{/each}
		</TableHead>
		<TableBody>
			{#each posts as post}
				<TableBodyRow class="text-base">
					<TableBodyCell class="w-4 p-4"><Checkbox /></TableBodyCell>
					<TableBodyCell class="flex items-center space-x-6 whitespace-nowrap p-4">
						<div class="text-sm font-normal text-gray-500 dark:text-gray-400">
							<div class="text-base font-semibold text-gray-900 dark:text-white">
								{post.name}
							</div>
							<div class="text-sm font-normal text-gray-500 dark:text-gray-400">
								{post.category}
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="p-4">{post.technology}</TableBodyCell>
					<TableBodyCell
						class="max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-500 dark:text-gray-400 xl:max-w-xs"
						>{post.description}</TableBodyCell
					>
					<TableBodyCell class="p-4">#{post.id}</TableBodyCell>
					<TableBodyCell class="p-4">{post.price}</TableBodyCell>
					<TableBodyCell class="p-4">{post.discount}</TableBodyCell>
					<TableBodyCell class="space-x-2">
						<Button size="sm" class="gap-2 px-3" on:click={() => toggle(Post)}>
							<EditOutline size="sm" /> Update
						</Button>
						<Button color="red" size="sm" class="gap-2 px-3" on:click={() => toggle(Delete)}>
							<TrashBinSolid size="sm" /> Delete item
						</Button>
					</TableBodyCell>
				</TableBodyRow>
			{/each}
		</TableBody>
	</Table> -->
</main>

<Drawer placement="right" transitionType="fly" {transitionParams} bind:hidden>
	<svelte:component this={drawerComponent} bind:hidden />
</Drawer>
