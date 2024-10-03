<script lang="ts">
	import MetaTag from '../../../../utils/MetaTag.svelte';
	import type { PageData } from './$types';
	import {
		Input,
		Label,
		Select,
		Heading,
		Button,
		Checkbox,
		FloatingLabelInput
	} from 'flowbite-svelte';
	import { generateDropdown } from '$lib/helper/designationMapper';
	import DistrictData from '$lib/data/districts.json';
	import UpazilaData from '$lib/data/upazilas.json';

	export let data: PageData;

	const path: string = '/dashboard/users/create-user';
	const description: string = 'Add new user - IPOSUC Dashboard';
	const title: string = 'Add User - IPOSUC';
	const subtitle: string = 'Add User';

	let regions: any[] | null = [];
	let districts: any[] | null = [];
	let upazilas: { value: string; name: string | undefined }[] = [];
	let selectedRegion = '';
	let selectedDistrict = '';
	let selectedUpazila = '';
	let selectedDesignation = '';
	let sendSms = false;

	const designationList = generateDropdown('bn');

	if (Array.isArray(data.regions)) {
		console.log('Its triggered in page: ', data.regions);
		const regionsData = data.regions;
		regions = regionsData?.map((x) => {
			return { value: x.code, name: x.bn_name };
		});
	}

	function fetchDistricts() {
		const result = DistrictData.filter((d) => d.regionId === selectedRegion);
		districts = result?.map((x) => {
			return { value: x.code, name: x.bn_name };
		});
	}

	function fetchUpazilas() {
		const result = UpazilaData.filter((d) => d.districtId === selectedDistrict);
		upazilas = result?.map((x) => {
			return { value: x.id, name: x.bn_name };
		});
	}

	function toggleCheckBox() {
		return (sendSms = !sendSms);
	}
</script>

<MetaTag {path} {description} {title} {subtitle} />
<div class="m-6 mx-auto max-w-lg font-ador">
	<div class="space-y-6 p-0">
		<Heading tag="h3" class="mb-4 text-center font-bold">ইউজার যোগ করুন</Heading>
		<form action="?/createUser" method="post">
			<div class="grid w-full gap-4">
				<FloatingLabelInput style="outlined" name="name" type="text" required>
					পূর্ণ নাম (ইংরেজি)
				</FloatingLabelInput>
				<FloatingLabelInput style="outlined" name="mobile" type="tel" required>
					মোবাইল নম্বর
				</FloatingLabelInput>
				<Label class="">
					<span>পদবী</span>
					{#if designationList}
						<Select
							class="font-ador"
							items={designationList}
							bind:value={selectedDesignation}
							name="designation"
						/>
					{/if}
				</Label>

				<FloatingLabelInput style="outlined" name="password" type="password">
					পাসওয়ার্ড
				</FloatingLabelInput>

				{#if regions}
					<Label class="font-AdorNoirrit">
						<span>অঞ্চল</span>
						<Select
							class="border-gray-300 font-normal outline-none"
							items={regions}
							bind:value={selectedRegion}
							on:change={fetchDistricts}
						/>
					</Label>
					<Input type="hidden" name="regionId" bind:value={selectedRegion} />
				{/if}

				{#if districts?.length}
					<Label class="">
						<span>জেলা</span>
						<Select
							class="border-gray-300 font-normal outline-none"
							items={districts}
							bind:value={selectedDistrict}
							on:change={fetchUpazilas}
						/>
					</Label>
				{/if}
				<Input type="hidden" name="districtId" bind:value={selectedDistrict} />
				{#if upazilas.length}
					<Label class="">
						<span>উপজেলা</span>
						<Select
							class="border-gray-300 font-normal outline-none"
							items={upazilas}
							bind:value={selectedUpazila}
						/>
					</Label>
				{/if}
				<Input type="hidden" name="upazilaId" bind:value={selectedUpazila} />

				<Label class="">
					<Checkbox name="sendSms" checked={sendSms} on:change={toggleCheckBox}
						>ইউজারকে SMS এর মাধ্যমে জানাতে চান?</Checkbox
					>
				</Label>
				<Input type="hidden" name="sendSms" bind:value={sendSms} />

				<div class="">
					<Button size="md" class="w-full px-4 py-2" color="green" type="submit">সাবমিট</Button>
				</div>
			</div>
		</form>
	</div>
</div>
