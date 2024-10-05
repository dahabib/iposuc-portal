/*
  Warnings:

  - You are about to drop the column `transactionId` on the `Transaction` table. All the data in the column will be lost.
  - Added the required column `reference` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_designationId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "transactionId",
ADD COLUMN     "reference" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isDefaultPassword" BOOLEAN NOT NULL DEFAULT true;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_designationId_fkey" FOREIGN KEY ("designationId") REFERENCES "Designation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
