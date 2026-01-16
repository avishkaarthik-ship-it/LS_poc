-- CreateTable
CREATE TABLE "hl_user" (
    "id" SERIAL NOT NULL,
    "kgen_user_id" INTEGER NOT NULL,
    "ls_user_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "hl_user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hl_user_project_role" (
    "id" SERIAL NOT NULL,
    "kgen_user_id" INTEGER NOT NULL,
    "project_id" INTEGER NOT NULL,
    "role" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "hl_user_project_role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hl_project" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "stage_order" TEXT NOT NULL,
    "current_stage" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "hl_project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project_pipeline_stage" (
    "id" SERIAL NOT NULL,
    "project_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "project_pipeline_stage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hl_task" (
    "id" SERIAL NOT NULL,
    "project_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "hl_task_pkey" PRIMARY KEY ("id")
);
