/*
  Warnings:

  - You are about to drop the column `ls_project_id` on the `hl_project` table. All the data in the column will be lost.
  - You are about to drop the column `ls_task_id` on the `hl_task` table. All the data in the column will be lost.
  - You are about to drop the column `kgen_user_id` on the `hl_user` table. All the data in the column will be lost.
  - You are about to drop the column `ls_user_id` on the `hl_user` table. All the data in the column will be lost.
  - You are about to drop the column `kgen_user_id` on the `hl_user_project_role` table. All the data in the column will be lost.
  - You are about to drop the column `kgen_user_id` on the `hl_user_task` table. All the data in the column will be lost.
  - Added the required column `annotator_project_id` to the `hl_project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `annotator_task_id` to the `hl_task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `platform_user_id` to the `hl_user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `platform_user_id` to the `hl_user_project_role` table without a default value. This is not possible if the table is not empty.
  - Added the required column `platform_user_id` to the `hl_user_task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "hl_project" DROP COLUMN "ls_project_id",
ADD COLUMN     "annotator_project_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "hl_task" DROP COLUMN "ls_task_id",
ADD COLUMN     "annotator_task_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "hl_user" DROP COLUMN "kgen_user_id",
DROP COLUMN "ls_user_id",
ADD COLUMN     "platform_user_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "hl_user_project_role" DROP COLUMN "kgen_user_id",
ADD COLUMN     "platform_user_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "hl_user_task" DROP COLUMN "kgen_user_id",
ADD COLUMN     "platform_user_id" INTEGER NOT NULL;
