/*
  Warnings:

  - Added the required column `slug` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "published" BOOLEAN DEFAULT false,
ADD COLUMN     "slug" TEXT NOT NULL,
ALTER COLUMN "image_url" DROP NOT NULL,
ALTER COLUMN "is_mini_course" DROP NOT NULL,
ALTER COLUMN "is_mini_course" SET DEFAULT false,
ALTER COLUMN "difficulty" DROP NOT NULL,
ALTER COLUMN "difficulty" SET DEFAULT 'BEGGINER',
ALTER COLUMN "category" DROP NOT NULL,
ALTER COLUMN "category" SET DEFAULT 'TECH';
