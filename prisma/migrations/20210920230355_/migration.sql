/*
  Warnings:

  - Added the required column `collection` to the `plants` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `plants` ADD COLUMN `collection` ENUM('Pessoal', 'Loja') NOT NULL;
