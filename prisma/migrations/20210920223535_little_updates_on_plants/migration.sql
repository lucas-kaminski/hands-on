/*
  Warnings:

  - You are about to drop the column `createdAt` on the `cachepots` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `plants` table. All the data in the column will be lost.
  - You are about to drop the column `purchasePrice` on the `plants` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `purchases` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `stock_cachepots` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `stock_plants` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `cachepots` DROP COLUMN `createdAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `plants` DROP COLUMN `createdAt`,
    DROP COLUMN `purchasePrice`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `purchase_price` DOUBLE NOT NULL DEFAULT 0.0,
    ADD COLUMN `recommended_selling_price` DOUBLE NOT NULL DEFAULT 0.0;

-- AlterTable
ALTER TABLE `purchases` DROP COLUMN `createdAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `stock_cachepots` DROP COLUMN `createdAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `stock_plants` DROP COLUMN `createdAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateTable
CREATE TABLE `propagation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `plant_id` INTEGER NOT NULL,
    `obs` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `propagation` ADD CONSTRAINT `propagation_plant_id_fkey` FOREIGN KEY (`plant_id`) REFERENCES `plants`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
