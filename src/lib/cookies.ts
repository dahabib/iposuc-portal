import type { Cookies } from '@sveltejs/kit';
import { dev } from '$app/environment';
import { createJWT, createRefreshToken } from './jwt';

export const setAuthenticationCookies = (cookies: Cookies, userId: string) => {
	// Create JWT using the user ID
	const jwt = createJWT(userId);

	// Generate a refresh token
	const refreshToken = createRefreshToken(userId);

	// Set the JWT token as an HTTP-only cookie
	cookies.set('auth_token', jwt, {
		path: '/',
		httpOnly: true, // Prevent JavaScript from accessing the cookie
		sameSite: 'strict', // Prevent CSRF
		secure: !dev, // Use secure cookie in production (over HTTPS)
		maxAge: 30 * 60 // Expire in 30 days
	});

	// Set the refresh token as an HTTP-only cookie
	cookies.set('refresh_token', refreshToken, {
		path: '/',
		httpOnly: true, // Same as above
		sameSite: 'strict',
		secure: !dev, // Only over HTTPS in production
		maxAge: 60 * 60 * 24 * 30 // Expire in 30 days
	});
};

// Function to delete authentication cookies
export const deleteAuthenticationCookies = (cookies: Cookies) => {
	// Clear out auth_token and refresh_token cookies
	cookies.delete('auth_token', { path: '/' });
	cookies.delete('refresh_token', { path: '/' });
};
