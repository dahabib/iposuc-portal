import { redirect } from '@sveltejs/kit';
import { deleteAuthenticationCookies } from '$lib/cookies';

export const load = async ({ cookies }: { cookies: any }) => {
	await deleteAuthenticationCookies(cookies);
	throw redirect(302, '/login');
};
