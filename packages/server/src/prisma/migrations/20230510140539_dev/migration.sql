/*
  Warnings:

  - Added the required column `dateDue` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateSet` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateSubmitted` to the `StudentSubmission` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "dateDue" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "dateSet" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "StudentSubmission" ADD COLUMN     "dateSubmitted" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "File" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "filePath" TEXT NOT NULL,
    "projectId" INTEGER,
    "submissionId" INTEGER,
    "extension" TEXT NOT NULL,

    CONSTRAINT "File_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_submissionId_fkey" FOREIGN KEY ("submissionId") REFERENCES "StudentSubmission"("id") ON DELETE SET NULL ON UPDATE CASCADE;
