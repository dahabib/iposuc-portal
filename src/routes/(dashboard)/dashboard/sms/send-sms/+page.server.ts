import { checkBalance, sendSingleSms } from '$lib/services/smsService';
import type { Actions, PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	let balance: string | null = '';
	try {
		balance = await checkBalance();
	} catch (error) {
		throw new Error();
	}

	return { balance };
};

export const actions: Actions = {
	sendSms: async ({ request }) => {
		const data = await request.formData();
		const mobile = data.get('mobile') as string;
		const msg = data.get('msg') as string;

		console.log('receivers: ', mobile);

		// Ensure mobile and msg are provided
		if (!mobile) {
			return fail(400, { mobile, missing: true });
		}

		if (!msg) {
			return fail(400, { msg, missing: true });
		}

		const response = await sendSingleSms(mobile, msg);

		return { success: true, message: response?.success_message };
	}
} satisfies Actions;
