/*
  Warnings:

  - Made the column `public_id` on table `Landmark` required. This step will fail if there are existing NULL values in that column.
  - Made the column `secure_url` on table `Landmark` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Landmark` MODIFY `public_id` VARCHAR(191) NOT NULL,
    MODIFY `secure_url` VARCHAR(191) NOT NULL;
