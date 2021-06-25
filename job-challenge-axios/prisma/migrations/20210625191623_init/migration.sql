-- CreateTable
CREATE TABLE `Users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `nome` VARCHAR(50) NOT NULL,
    `cpf` VARCHAR(11) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `telefone` VARCHAR(13) NOT NULL,
    `enredecoId` INTEGER NOT NULL,

    UNIQUE INDEX `Users.enredecoId_unique`(`enredecoId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Users_Adress` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rua` VARCHAR(191) NOT NULL,
    `numero` INTEGER NOT NULL,
    `bairro` VARCHAR(191) NOT NULL,
    `cidade` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Users` ADD FOREIGN KEY (`enredecoId`) REFERENCES `Users_Adress`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
