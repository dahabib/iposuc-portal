import { prisma } from '$lib/prisma';

export const load = async () => {
	const subscriptions = await prisma.subscriptionPlan.findMany({});

	return { subscriptions };
};
