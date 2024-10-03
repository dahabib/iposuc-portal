import jwt, { type JwtPayload, type Secret } from 'jsonwebtoken';
import { variables } from './variables';

export const createJWT = (userId: string) => {
	return jwt.sign(
		{
			id: userId
		},
		variables.private_key as Secret,
		{ expiresIn: '15m' }
	);
};

export const createRefreshToken = (userId: string) => {
	return jwt.sign(
		{
			id: userId
		},
		variables.refresh_key as Secret,
		{ expiresIn: '1d' }
	);
};

export const verifyJWT = (token: any) => {
	return jwt.verify(token, variables.private_key as Secret) as JwtPayload;
};
