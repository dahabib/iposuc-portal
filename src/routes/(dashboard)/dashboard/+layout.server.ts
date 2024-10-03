import { deleteAuthenticationCookies } from '$lib/cookies';
import { Role } from '@prisma/client';
import { redirect } from '@sveltejs/kit';

export const load = async ({ locals, cookies }) => {
	// Check if the user is logged in
	if (locals.user === null) {
		deleteAuthenticationCookies(cookies);
		throw redirect(302, '/login');
	}

	if (locals.user && locals.user.role === Role.USER) {
		throw redirect(302, '/');
	}

	const user = locals.user;
	return { user };
};
