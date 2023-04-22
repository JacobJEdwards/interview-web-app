/*
  Warnings:

  - You are about to drop the `Student` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Teacher` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ModuleToStudent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ProjectToStudent` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('STUDENT', 'TEACHER', 'ADMIN');

-- DropForeignKey
ALTER TABLE "Module" DROP CONSTRAINT "Module_teacherId_fkey";

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_teacherId_fkey";

-- DropForeignKey
ALTER TABLE "_ModuleToStudent" DROP CONSTRAINT "_ModuleToStudent_A_fkey";

-- DropForeignKey
ALTER TABLE "_ModuleToStudent" DROP CONSTRAINT "_ModuleToStudent_B_fkey";

-- DropForeignKey
ALTER TABLE "_ProjectToStudent" DROP CONSTRAINT "_ProjectToStudent_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProjectToStudent" DROP CONSTRAINT "_ProjectToStudent_B_fkey";

-- DropTable
DROP TABLE "Student";

-- DropTable
DROP TABLE "Teacher";

-- DropTable
DROP TABLE "_ModuleToStudent";

-- DropTable
DROP TABLE "_ProjectToStudent";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Module" ADD CONSTRAINT "Module_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
