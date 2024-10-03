import type { Actions } from './$types';
import { redirect, fail } from '@sveltejs/kit';
import bcrypt from 'bcryptjs';
import { setAuthenticationCookies } from '$lib/cookies';
import { findByMobile } from '$lib/services/users';
import { Role } from '@prisma/client';

// export const load = async ({ locals }) => {
// 	const user = locals.user;
// 	if (locals.user) {
// 		if (locals.user.role === Role.USER) {
// 			throw redirect(302, '/');
// 		} else {
// 			throw redirect(302, '/dashboard');
// 		}
// 	}

// 	return { user };
// };

export const actions: Actions = {
	login: async ({ cookies, request }) => {
		const data = await request.formData();
		const mobile = data.get('mobile');
		const password = data.get('password');

		// Ensure mobile and password are provided
		if (!mobile || !password) {
			return fail(400, { message: 'Mobile number and password are required.' });
		}

		// Fetch user from the database by mobile number
		const user = await findByMobile(String(mobile));

		// Check if user exists
		if (!user) {
			return fail(404, {
				incorrect: true,
				message: 'No user found with this mobile number.'
			});
		}

		// Validate password
		const isPasswordValid = await bcrypt.compare(String(password), user.password);
		if (!isPasswordValid) {
			return fail(400, {
				incorrect: true,
				message: 'Invalid password.'
			});
		}

		// Set authentication cookies (JWT and refresh token)
		setAuthenticationCookies(cookies, user.id);

		// Redirect to the dashboard after successful login
		if (user.role === Role.USER) {
			throw redirect(302, '/');
		} else {
			throw redirect(302, '/dashboard');
		}
	}
};
