// import bcrypt from "bcryptjs";
// import { fail } from "@sveltejs/kit";
// import type { Actions, PageServerLoad } from "./$types";
// import { prisma } from "$lib/prisma";
// import { validateEmail } from "$lib/services/users";

// export const load: PageServerLoad = async () => {
//   const regions = await prisma.region.findMany({
//     include: {
//       districts: {
//         include: {
//           upazila: true,
//         },
//       },
//     },
//   });

//   return { regions };
// };

// export const actions: Actions = {
//   register: async function ({ request }) {
//     const formData = await request.formData();
//     const mobile = formData.get("mobile") as string;
//     const name = formData.get("name") as string;
//     const password = (formData.get("password") as string) || "Ecs@1234";
//     const regionId = formData.get("regionId") as string;
//     const districtId = formData.get("districtId") as string;
//     const upazilaId = formData.get("upazilaId") as string;

//     if (!mobile || !name) return fail(400, { required: true });

//     if (!(await validateEmail(String(mobile))))
//       return fail(400, { unique: true });

//     // Hash the password
//     const passwordHash = await bcrypt.hash(password, 10);

//     try {
//       const user = await prisma.user.create({
//         data: {
//           mobile,
//           password: passwordHash,
//           role: "USER",
//           Profile: {
//             create: {
//               email: `${mobile}@example.com`,
//               bio: "",
//               regionId,
//               districtId,
//               upazilaId,
//             },
//           },
//         },
//       });

//       return { success: true, userId: user.id };
//     } catch (error) {
//       console.error("Error creating user:", error);
//       return fail(500, { error: "Failed to create user" });
//     }
//   },
// };

import type { Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import { Role } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { getRegionByAdmin, getRegions } from '$lib/services/locationService';
import { createUser } from '$lib/services/users';
import { sendSingleSms } from '$lib/services/smsService';
import type { CreateUserDataType } from '../../../../../types';

export const load = async ({ locals }) => {
	const user = locals.user;
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
		const res = await getRegions();
		const data = await res.json();
		regions = data.regions;
		return { user, regions };
	} else if (user?.role === Role.ADMIN) {
		const res = await getRegionByAdmin(user.id);
		if (res) {
			regions = [res];
		}

		return { user, regions };
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
		console.log('logged in user: ', userRole);

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
Portal link: https://shorturl.at/xIFss`;

		try {
			const response = await createUser(userData as CreateUserDataType);
			const data = response.json();
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
