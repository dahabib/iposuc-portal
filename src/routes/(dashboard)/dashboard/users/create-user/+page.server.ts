import type { Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import { Role } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { getRegionByAdmin, getRegions } from '$lib/services/locationService';
import { createUser } from '$lib/services/users';
import { sendSingleSms } from '$lib/services/smsService';
import type { CreateUserDataType } from '../../../../../types';
import { toast } from '@zerodevx/svelte-toast';

export const load = async ({ locals }) => {
	const user = locals.user;
	if (user === null) {
		throw redirect(302, '/login');
	}

	let regions:
		| {
				name: string;
				bn_name: string;
				code: string;
		  }[]
		| {
				name: string;
				bn_name: string;
				code: string;
		  }
		| null = [];

	if (user?.role === Role.SUPER_ADMIN) {
		const regions = await getRegions();
		return { regions };
	} else if (user?.role === Role.ADMIN) {
		const res = await getRegionByAdmin(user.id);
		if (res) {
			regions = [res];
		}

		return { regions };
	}
};

export const actions: Actions = {
	createUser: async ({ request, locals }) => {
		const data = Object.fromEntries(await request.formData());
		const { name, mobile, designation, regionId, districtId, upazilaId, sendSms } = data;
		let { password } = data;

		if (password == '') {
			password = 'Ecs@1234';
		}

		let userRole = null;
		if (locals.user) {
			userRole = locals.user.role;
		}

		// Hash the password
		const hashedPassword = bcrypt.hashSync(String(password), 12);

		const userData = {
			name,
			mobile,
			password: hashedPassword,
			designation,
			regionId,
			districtId,
			upazilaId,
			role: userRole === 'SUPER_ADMIN' ? 'ADMIN' : 'USER'
		};

		const newUserNotification = `Welcome to IPOSUC Portal. 
Password is ${password}. After login change password and update your profile. 
Portal link: https://iposuc-portal.vercel.app/`;

		try {
			const response = await createUser(userData as CreateUserDataType);
			const data = await response.json();
			toast.push('User added successfully!', {
				theme: {
					'--toastColor': 'mintcream',
					'--toastBackground': 'rgba(72,187,120,0.9)',
					'--toastBarBackground': '#2F855A'
				}
			});

			console.log('user response: ', data);
			if (sendSms && response.ok) {
				const sendMsg = await sendSingleSms(String(mobile), newUserNotification);
				console.log('sms response: ', sendMsg);
			}
			// Redirect to dashboard after successful user creation
			throw redirect(302, '/dashboard');
		} catch (error) {
			return fail(500, { message: 'An error occurred while creating the user.' });
		}
	}
};
