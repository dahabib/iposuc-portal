import { findUserById, updatePassword } from '$lib/services/users';
import { fail, redirect } from '@sveltejs/kit';
import bcrypt from 'bcryptjs';
import type { Actions } from './$types';
import { toast } from '@zerodevx/svelte-toast';

export const actions: Actions = {
	changePassword: async ({ request, locals }) => {
		const formData = await request.formData();
		const currentPassword = formData.get('currentPassword') as string;
		const newPassword = formData.get('password') as string;
		const confirmPassword = formData.get('confirm-password') as string;
		const userId = locals?.user?.id as string;

		if (newPassword !== confirmPassword) {
			return fail(400, {
				incorrect: true,
				message: 'New password & Confirm password does not match!'
			});
		}

		const selectedUser = await findUserById(userId);

		const isPasswordValid = bcrypt.compare(currentPassword, String(selectedUser?.password));

		if (!isPasswordValid) {
			return fail(400, {
				incorrect: true,
				message: 'Invalid password.'
			});
		}
		// Hash the password
		const hashedPassword = bcrypt.hashSync(String(newPassword), 12);

		// Update user's password and mark isDefaultPassword as false
		const res = await updatePassword(userId, hashedPassword);
		const data = await res.json();
		if (data.success) {
			toast.push(data?.message, {
				theme: {
					'--toastColor': 'mintcream',
					'--toastBackground': 'rgba(72,187,120,0.9)',
					'--toastBarBackground': '#2F855A'
				}
			});
			// Redirect to dashboard after password change
			throw redirect(302, '/login');
		}
	}
} satisfies Actions;
