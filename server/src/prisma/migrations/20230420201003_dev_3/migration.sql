/*
  Warnings:

  - You are about to drop the `_ModuleToTeacher` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `teacherId` to the `Module` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "_ModuleToTeacher_B_index";

-- DropIndex
DROP INDEX "_ModuleToTeacher_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_ModuleToTeacher";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Module" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "teacherId" INTEGER NOT NULL,
    CONSTRAINT "Module_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Module" ("id", "name") SELECT "id", "name" FROM "Module";
DROP TABLE "Module";
ALTER TABLE "new_Module" RENAME TO "Module";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
