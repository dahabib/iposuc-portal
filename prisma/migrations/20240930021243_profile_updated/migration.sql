-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_fileId_fkey";

-- AlterTable
ALTER TABLE "Profile" ALTER COLUMN "fileId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "Files"("id") ON DELETE SET NULL ON UPDATE CASCADE;
