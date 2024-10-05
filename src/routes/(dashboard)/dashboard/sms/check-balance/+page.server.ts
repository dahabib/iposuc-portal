// import { checkBalance } from '$lib/services/smsService';
// import type { Actions } from './$types';
// import { fail } from '@sveltejs/kit';

// export const actions: Actions = {
// 	checkBalance: async () => {
// 		try {
// 			const response = await checkBalance();
// 			const result = await response.json(response);
// 			console.log('SMS Response: ', result);
// 		} catch (error) {
// 			return fail(404, {
// 				incorrect: true,
// 				message: error
// 			});
// 		}
// 	}
// };
