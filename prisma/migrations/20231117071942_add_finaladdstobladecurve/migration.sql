/*
  Warnings:

  - You are about to drop the column `BladeCurveDescription` on the `BladeCurve` table. All the data in the column will be lost.
  - You are about to drop the column `BladeCurveToeShape` on the `BladeCurve` table. All the data in the column will be lost.
  - Added the required column `BladeCurveFace` to the `BladeCurve` table without a default value. This is not possible if the table is not empty.
  - Added the required column `BladeCurveLength` to the `BladeCurve` table without a default value. This is not possible if the table is not empty.
  - Added the required column `BladeCurveLie` to the `BladeCurve` table without a default value. This is not possible if the table is not empty.
  - Added the required column `BladeCurveToe` to the `BladeCurve` table without a default value. This is not possible if the table is not empty.
  - Added the required column `BladeCurveType` to the `BladeCurve` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BladeCurve" DROP COLUMN "BladeCurveDescription",
DROP COLUMN "BladeCurveToeShape",
ADD COLUMN     "BladeCurveFace" TEXT NOT NULL,
ADD COLUMN     "BladeCurveLength" TEXT NOT NULL,
ADD COLUMN     "BladeCurveLie" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "BladeCurveToe" TEXT NOT NULL,
ADD COLUMN     "BladeCurveType" TEXT NOT NULL;
