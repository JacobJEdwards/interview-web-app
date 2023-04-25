-- CreateTable
CREATE TABLE "_StudentModules" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_StudentModules_AB_unique" ON "_StudentModules"("A", "B");

-- CreateIndex
CREATE INDEX "_StudentModules_B_index" ON "_StudentModules"("B");

-- AddForeignKey
ALTER TABLE "_StudentModules" ADD CONSTRAINT "_StudentModules_A_fkey" FOREIGN KEY ("A") REFERENCES "Module"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StudentModules" ADD CONSTRAINT "_StudentModules_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
