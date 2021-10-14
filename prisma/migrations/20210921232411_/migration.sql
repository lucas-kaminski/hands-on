-- CreateTable
CREATE TABLE `plants` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191),
    `collection` ENUM('Pessoal', 'Loja') NOT NULL,
    `origin` ENUM('Compra', 'Propagacao') NOT NULL,
    `purchase_price` DOUBLE NOT NULL DEFAULT 0.0,
    `status` ENUM('Em_Posse', 'A_venda', 'Reservado', 'Vendida') NOT NULL DEFAULT 'Em_Posse',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `propagation` (
    `plant_id` INTEGER NOT NULL,
    `obs` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`plant_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `stock_plants` (
    `plant_id` INTEGER NOT NULL,
    `recommended_min_price` DOUBLE,
    `recommended_max_price` DOUBLE,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`plant_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cachepots` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `color` VARCHAR(191) NOT NULL,
    `size` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `purchasePrice` DOUBLE NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `stock_cachepots` (
    `cachepot_id` INTEGER NOT NULL,
    `status` ENUM('A_venda', 'Reservado', 'Vendida') NOT NULL DEFAULT 'A_venda',
    `origin` ENUM('Compra', 'Propagacao') NOT NULL,
    `estimatedValue` DOUBLE NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`cachepot_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `purchases` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `plant_ids` INTEGER,
    `cachepot_ids` INTEGER,
    `place` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191),
    `obs` VARCHAR(191),
    `value` DOUBLE NOT NULL,
    `reason` ENUM('Estoque', 'Ferramentas', 'Investimento') NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_plantsTopurchases` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_plantsTopurchases_AB_unique`(`A`, `B`),
    INDEX `_plantsTopurchases_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_cachepotsTopurchases` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_cachepotsTopurchases_AB_unique`(`A`, `B`),
    INDEX `_cachepotsTopurchases_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `propagation` ADD CONSTRAINT `propagation_plant_id_fkey` FOREIGN KEY (`plant_id`) REFERENCES `plants`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `stock_plants` ADD CONSTRAINT `stock_plants_plant_id_fkey` FOREIGN KEY (`plant_id`) REFERENCES `plants`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `stock_cachepots` ADD CONSTRAINT `stock_cachepots_cachepot_id_fkey` FOREIGN KEY (`cachepot_id`) REFERENCES `cachepots`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `purchases` ADD CONSTRAINT `purchases_plant_ids_fkey` FOREIGN KEY (`plant_ids`) REFERENCES `plants`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `purchases` ADD CONSTRAINT `purchases_cachepot_ids_fkey` FOREIGN KEY (`cachepot_ids`) REFERENCES `cachepots`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_plantsTopurchases` ADD FOREIGN KEY (`A`) REFERENCES `plants`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_plantsTopurchases` ADD FOREIGN KEY (`B`) REFERENCES `purchases`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_cachepotsTopurchases` ADD FOREIGN KEY (`A`) REFERENCES `cachepots`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_cachepotsTopurchases` ADD FOREIGN KEY (`B`) REFERENCES `purchases`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
