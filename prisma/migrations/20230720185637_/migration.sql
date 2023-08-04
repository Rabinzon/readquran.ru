/*
  Warnings:

  - A unique constraint covering the columns `[order,chapterId,translationId]` on the table `Verse` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Verse_order_chapterId_translationId_key" ON "Verse"("order", "chapterId", "translationId");
