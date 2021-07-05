/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `Users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Users.cpf_unique` ON `Users`(`cpf`);
