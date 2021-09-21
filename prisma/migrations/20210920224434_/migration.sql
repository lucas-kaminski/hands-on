/*
  Warnings:

  - You are about to drop the column `recommended_selling_price` on the `plants` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `plants` DROP COLUMN `recommended_selling_price`,
    ADD COLUMN `selling_max_price` DOUBLE NOT NULL DEFAULT 0.0,
    ADD COLUMN `selling_min_price` DOUBLE NOT NULL DEFAULT 0.0;
