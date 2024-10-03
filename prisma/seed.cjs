const { PrismaClient } = require("@prisma/client");
const {
  divisionsData,
  regionsData,
  districtsData,
  upozilasData,
} = require("../src/lib/data/index.js");

const prisma = new PrismaClient();

async function main() {
  for (const division of divisionsData) {
    await prisma.division.create({
      data: {
        id: division.id,
        name: division.name,
        bn_name: division.bn_name,
        lat: parseFloat(division.lat),
        long: parseFloat(division.long),
      },
    });
  }

  for (const region of regionsData) {
    await prisma.region.create({
      data: {
        id: region.id,
        code: region.code,
        name: region.name,
        bn_name: region.bn_name,
        lat: parseFloat(region.lat),
        long: parseFloat(region.long),
      },
    });
  }

  for (const district of districtsData) {
    await prisma.district.create({
      data: {
        id: district.id,
        divisionId: district.divisionId,
        regionId: district.regionId,
        code: district.code,
        name: district.name,
        bn_name: district.bn_name,
        lat: parseFloat(district.lat),
        long: parseFloat(district.long),
      },
    });
  }

  for (const upazila of upozilasData) {
    await prisma.upazila.create({
      data: {
        id: upazila.id,
        code: upazila.code,
        name: upazila.name,
        bn_name: upazila.bn_name,
        lat: parseFloat(upazila.lat),
        long: parseFloat(upazila.long),
        districtId: upazila.districtId,
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
