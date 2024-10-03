-- DropForeignKey
ALTER TABLE "Upazila" DROP CONSTRAINT "Upazila_districtId_fkey";

-- AlterTable
ALTER TABLE "District" ALTER COLUMN "code" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Upazila" ALTER COLUMN "districtId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Upazila" ADD CONSTRAINT "Upazila_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "District"("code") ON DELETE RESTRICT ON UPDATE CASCADE;
