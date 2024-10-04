// src/hooks.server.ts
import { verifyJWT } from '$lib/jwt';
import { prisma } from '$lib/prisma';

export const handle = async ({ event, resolve }) => {
	const authCookie = event.cookies.get('auth_token');
	console.log('auth_token: ', authCookie);

	// Ensure the cookie exists before proceeding
	if (authCookie) {
		try {
			// Verify the JWT directly (no need to split the token unless it has a Bearer prefix)
			const jwtUser = verifyJWT(authCookie);

			const user = await prisma.user.findUnique({
				where: {
					id: jwtUser.id
				},
				select: {
					id: true,
					mobile: true,
					role: true,
					name: true
				}
			});

			if (user) {
				event.locals.user = user;
			} else {
				event.locals.user = null;
			}
		} catch (error) {
			console.error('JWT verification failed:', error);
			event.locals.user = null;
		}
	} else {
		event.locals.user = null;
	}

	return resolve(event);
};
