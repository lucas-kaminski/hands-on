/*
  Warnings:

  - You are about to drop the column `cachepot_id` on the `stock` table. All the data in the column will be lost.
  - You are about to drop the column `plant_id` on the `stock` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[stock_id]` on the table `cachepots` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[stock_id]` on the table `plants` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `stock` DROP FOREIGN KEY `stock_cachepot_id_fkey`;

-- DropForeignKey
ALTER TABLE `stock` DROP FOREIGN KEY `stock_plant_id_fkey`;

-- AlterTable
ALTER TABLE `cachepots` ADD COLUMN `stock_id` INTEGER;

-- AlterTable
ALTER TABLE `plants` ADD COLUMN `stock_id` INTEGER;

-- AlterTable
ALTER TABLE `stock` DROP COLUMN `cachepot_id`,
    DROP COLUMN `plant_id`;

-- CreateIndex
CREATE UNIQUE INDEX `cachepots_stock_id_key` ON `cachepots`(`stock_id`);

-- CreateIndex
CREATE UNIQUE INDEX `plants_stock_id_key` ON `plants`(`stock_id`);

-- AddForeignKey
ALTER TABLE `plants` ADD CONSTRAINT `plants_stock_id_fkey` FOREIGN KEY (`stock_id`) REFERENCES `stock`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cachepots` ADD CONSTRAINT `cachepots_stock_id_fkey` FOREIGN KEY (`stock_id`) REFERENCES `stock`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
