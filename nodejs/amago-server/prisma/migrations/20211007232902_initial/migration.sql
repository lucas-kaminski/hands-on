-- CreateTable
CREATE TABLE `plants` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `collection` ENUM('Pessoal', 'Loja') NOT NULL,
    `description` VARCHAR(191),
    `purchase_price` DOUBLE DEFAULT 0.0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `purchase_id` INTEGER,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `propagation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `obs` VARCHAR(191),
    `first_roots` DATETIME(3),
    `water_or_soil` ENUM('Agua', 'Substrato'),
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `mother_plant_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cachepots` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(191) NOT NULL,
    `size` VARCHAR(191) NOT NULL,
    `purchase_price` DOUBLE NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `purchase_id` INTEGER,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `stock` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `selling_price` DOUBLE NOT NULL,
    `obs` VARCHAR(191),
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `plant_id` INTEGER,
    `cachepot_id` INTEGER,
    `selling_id` INTEGER,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `purchases` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `place` VARCHAR(191) NOT NULL,
    `value` DOUBLE NOT NULL,
    `description` VARCHAR(191),
    `obs` VARCHAR(191),
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sellings` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `final_price` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `freight` (
    `selling_id` INTEGER NOT NULL,
    `district` VARCHAR(191) NOT NULL,
    `value` DOUBLE NOT NULL,

    PRIMARY KEY (`selling_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `plants` ADD CONSTRAINT `plants_purchase_id_fkey` FOREIGN KEY (`purchase_id`) REFERENCES `purchases`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `propagation` ADD CONSTRAINT `propagation_mother_plant_id_fkey` FOREIGN KEY (`mother_plant_id`) REFERENCES `plants`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cachepots` ADD CONSTRAINT `cachepots_purchase_id_fkey` FOREIGN KEY (`purchase_id`) REFERENCES `purchases`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `stock` ADD CONSTRAINT `stock_plant_id_fkey` FOREIGN KEY (`plant_id`) REFERENCES `plants`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `stock` ADD CONSTRAINT `stock_cachepot_id_fkey` FOREIGN KEY (`cachepot_id`) REFERENCES `cachepots`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `stock` ADD CONSTRAINT `stock_selling_id_fkey` FOREIGN KEY (`selling_id`) REFERENCES `sellings`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `freight` ADD CONSTRAINT `freight_selling_id_fkey` FOREIGN KEY (`selling_id`) REFERENCES `sellings`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
