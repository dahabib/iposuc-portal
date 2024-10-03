import { deleteAuthenticationCookies } from '$lib/cookies';
import { redirect } from '@sveltejs/kit';

export const load = async ({ locals, cookies }) => {
	if (locals.user === null) {
		deleteAuthenticationCookies(cookies);
		throw redirect(302, '/login');
	}
	const user = locals.user;

	return { user };
};
