/*
  Warnings:

  - Added the required column `BladeCurveDescription` to the `BladeCurve` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BladeCurve" ADD COLUMN     "BladeCurveDescription" TEXT NOT NULL;
