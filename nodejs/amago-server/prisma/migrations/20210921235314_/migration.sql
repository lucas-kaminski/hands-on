/*
  Warnings:

  - Added the required column `mother_plant_id` to the `propagation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `plants` MODIFY `origin` ENUM('Compra', 'Propagacao', 'Indefinido') NOT NULL DEFAULT 'Indefinido';

-- AlterTable
ALTER TABLE `propagation` ADD COLUMN `mother_plant_id` INTEGER NOT NULL,
    MODIFY `obs` VARCHAR(191);

-- AddForeignKey
ALTER TABLE `propagation` ADD CONSTRAINT `propagation_mother_plant_id_fkey` FOREIGN KEY (`mother_plant_id`) REFERENCES `plants`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
