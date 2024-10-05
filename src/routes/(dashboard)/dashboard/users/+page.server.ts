import { positionNamesBengali } from '$lib/helper/designationMapper';
import { prisma } from '$lib/prisma';
import { toast } from '@zerodevx/svelte-toast';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async () => {
	const response = await prisma.user.findMany({
		include: {
			profile: {
				select: {
					designation: {
						select: {
							name: true
						}
					},
					region: {
						select: {
							bn_name: true
						}
					},
					district: {
						select: {
							bn_name: true
						}
					},
					upazila: {
						select: {
							bn_name: true
						}
					}
				}
			}
		}
	});

	const users =
		response.length &&
		response.map((user) => {
			return {
				id: user.id,
				role: user.role,
				name: user.name,
				mobile: user.mobile,
				member: user.createdAt,
				avatar: user.avatar,
				designation: user.profile?.designation.name
					? positionNamesBengali[user.profile?.designation.name]
					: '',
				region: user.profile?.region?.bn_name,
				district: user.profile?.district?.bn_name,
				upazila: user.profile?.upazila?.bn_name
			};
		});

	return { users };
};

export const actions: Actions = {
	deleteUser: async ({ request }) => {
		const data = await request.formData();
		const userId = data.get('userId') as string;

		try {
			const response = await prisma.user.delete({ where: { id: userId }, select: { name: true } });

			toast.push(`${response.name} is deleted successfully.'`, {
				theme: {
					'--toastColor': 'mintcream',
					'--toastBackground': 'rgba(72,187,120,0.9)',
					'--toastBarBackground': '#2F855A'
				}
			});

			return { success: true, message: `${response.name} is deleted successfully.'` };
		} catch (error) {
			console.log('Error:', error);
		}
	}
} satisfies Actions;
