-- CreateEnum
CREATE TYPE "DifficultyEnum" AS ENUM ('BEGGINER', 'INTERMEDIATE', 'ADVANCED');

-- CreateEnum
CREATE TYPE "CategoryEnum" AS ENUM ('MARKETING', 'TECH');

-- CreateTable
CREATE TABLE "Course" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "image_url" TEXT NOT NULL,
    "is_mini_course" BOOLEAN NOT NULL,
    "difficulty" "DifficultyEnum" NOT NULL,
    "category" "CategoryEnum" NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);
