/*
  Warnings:

  - You are about to drop the column `user_email` on the `hl_user` table. All the data in the column will be lost.
  - Added the required column `ls_project_id` to the `hl_project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ls_task_id` to the `hl_task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `hl_user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "hl_project" ADD COLUMN     "ls_project_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "hl_task" ADD COLUMN     "ls_task_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "hl_user" DROP COLUMN "user_email",
ADD COLUMN     "email" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "hl_user_task" (
    "id" SERIAL NOT NULL,
    "kgen_user_id" INTEGER NOT NULL,
    "task_id" INTEGER NOT NULL,
    "assigned_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "task_expiry" TIMESTAMP(3),
    "completed_at" TIMESTAMP(3),

    CONSTRAINT "hl_user_task_pkey" PRIMARY KEY ("id")
);
