import { prisma } from '$lib/prisma';
import type { User } from '@prisma/client';
import type { CreateUserDataType } from '../../types';

// Create user
export const createUser = async (user: CreateUserDataType) => {
	try {
		// Find or create the Designation
		const designation = await prisma.designation.upsert({
			where: { name: user.designation },
			update: {},
			create: {
				name: user.designation
			}
		});

		const district = await prisma.district.findUnique({ where: { code: user.districtId } });

		// Create the user with profile linked to the designation
		const newUser = await prisma.user.create({
			data: {
				name: user.name,
				mobile: user.mobile,
				password: user.password,
				role: user.role,
				profile: {
					create: {
						nameEn: user.name,
						designationId: designation.id,
						regionId: user.regionId || null,
						districtId: district?.id,
						upazilaId: user.upazilaId || null
					}
				}
			}
		});

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { password, ...userDataWithoutPassword } = newUser;

		return Response.json(
			{ success: true, message: 'User create successfully', user: userDataWithoutPassword },
			{ status: 200 }
		);
	} catch (error) {
		console.error('Error creating user:', error);
		throw error;
	}
};

// Get user by id
export const findById = async (id: string): Promise<Partial<User> | null> => {
	return await prisma.user.findUnique({
		where: {
			id: id
		},
		select: {
			name: true,
			mobile: true,
			role: true
		}
	});
};

// Get user by mobile number
export const findByMobile = async (mobile: string): Promise<User | null> => {
	return await prisma.user.findUnique({ where: { mobile } });
};

// Check if user with privided mobile number already exists
export const validateEmail = async (mobile: string): Promise<boolean> => {
	const user = await prisma.user.findUnique({ where: { mobile } });

	if (user) return false;

	return true;
};
