import { redirect, type Cookies } from '@sveltejs/kit';
import { deleteAuthenticationCookies } from '$lib/cookies';

export const load = async ({ cookies }: { cookies: Cookies }) => {
	deleteAuthenticationCookies(cookies);
	throw redirect(302, '/login');
};
