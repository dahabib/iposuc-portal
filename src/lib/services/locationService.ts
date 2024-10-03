import { prisma } from '$lib/prisma';

// Get all region
export const getRegions = async () => {
	const regions = await prisma.region.findMany({
		select: {
			name: true,
			bn_name: true,
			code: true
		}
	});
	// console.log('regions in server: ', region);

	// return region || null;
	return Response.json(
		JSON.stringify({ regions, success: true, message: 'Regions fetched successfully' }),
		{ status: 200 }
	);
};

// Get single region based on userId
export const getRegionByAdmin = async (userId: string) => {
	const region = await prisma.user.findUnique({
		where: {
			id: userId
		},
		select: {
			profile: {
				select: {
					region: true
				}
			}
		}
	});

	return region?.profile?.region || null;
	// return Response.json(
	// 	JSON.stringify({
	// 		region: region?.profile?.region,
	// 		success: true,
	// 		message: 'Region of this admin fetched successfully'
	// 	}),
	// 	{ status: 200 }
	// );
};

// Get districts by region code
export const getDistrictByRegion = async (
	regionId: string
): Promise<{ id: string; bn_name: string; code: string }[] | null> => {
	const districts = await prisma.district.findMany({
		where: {
			regionId
		},
		select: {
			id: true,
			bn_name: true,
			code: true
		}
	});

	return districts.length > 0 ? districts : null;
};

// Get upazila by distric code
export const getUpazilabyDistrict = async (
	districtId: string
): Promise<{ name: string; bn_name: string; code: string }[] | null> => {
	const upazilas = await prisma.upazila.findMany({
		where: {
			districtId
		},
		select: {
			name: true,
			bn_name: true,
			code: true
		}
	});

	return upazilas.length > 0 ? upazilas : null;
};
