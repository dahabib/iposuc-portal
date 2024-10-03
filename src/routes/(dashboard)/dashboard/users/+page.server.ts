import { prisma } from '$lib/prisma';

export const load = async () => {
	const users = await prisma.user.findMany();

	return { users };
};
