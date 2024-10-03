import type { Positions, Role } from '@prisma/client';

export type CreateUserDataType = {
	name: string;
	mobile: string;
	password: string;
	role: Role;
	designation: Positions;
	regionId: string;
	districtId: string;
	upazilaId: string;
};
