/*
  Warnings:

  - Added the required column `type` to the `hl_task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "hl_task" ADD COLUMN     "type" TEXT NOT NULL;
