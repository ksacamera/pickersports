-- CreateTable
CREATE TABLE "Brand" (
    "BrandID" SERIAL NOT NULL,
    "BrandName" TEXT NOT NULL,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("BrandID")
);

-- CreateTable
CREATE TABLE "Texture" (
    "TextureID" SERIAL NOT NULL,
    "TextureName" TEXT NOT NULL,

    CONSTRAINT "Texture_pkey" PRIMARY KEY ("TextureID")
);

-- CreateTable
CREATE TABLE "Hand" (
    "HandID" SERIAL NOT NULL,
    "HandName" TEXT NOT NULL,

    CONSTRAINT "Hand_pkey" PRIMARY KEY ("HandID")
);

-- CreateTable
CREATE TABLE "KickPoint" (
    "KickPointID" SERIAL NOT NULL,
    "KickPointName" TEXT NOT NULL,

    CONSTRAINT "KickPoint_pkey" PRIMARY KEY ("KickPointID")
);

-- CreateTable
CREATE TABLE "Flex" (
    "FlexID" SERIAL NOT NULL,
    "FlexValue" INTEGER NOT NULL,

    CONSTRAINT "Flex_pkey" PRIMARY KEY ("FlexID")
);

-- CreateTable
CREATE TABLE "BladeCurve" (
    "BladeCurveID" SERIAL NOT NULL,
    "BladeCurveName" TEXT NOT NULL,

    CONSTRAINT "BladeCurve_pkey" PRIMARY KEY ("BladeCurveID")
);

-- CreateTable
CREATE TABLE "Model" (
    "ModelID" SERIAL NOT NULL,
    "ModelName" TEXT NOT NULL,
    "BrandID" INTEGER NOT NULL,
    "KickPointID" INTEGER NOT NULL,

    CONSTRAINT "Model_pkey" PRIMARY KEY ("ModelID")
);

-- CreateTable
CREATE TABLE "Variant" (
    "ModelVariantID" SERIAL NOT NULL,
    "ModelID" INTEGER NOT NULL,
    "FlexID" INTEGER NOT NULL,
    "HandID" INTEGER NOT NULL,
    "BladeCurveID" INTEGER NOT NULL,
    "TextureID" INTEGER NOT NULL,

    CONSTRAINT "Variant_pkey" PRIMARY KEY ("ModelVariantID")
);

-- AddForeignKey
ALTER TABLE "Model" ADD CONSTRAINT "Model_BrandID_fkey" FOREIGN KEY ("BrandID") REFERENCES "Brand"("BrandID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Model" ADD CONSTRAINT "Model_KickPointID_fkey" FOREIGN KEY ("KickPointID") REFERENCES "KickPoint"("KickPointID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Variant" ADD CONSTRAINT "Variant_ModelID_fkey" FOREIGN KEY ("ModelID") REFERENCES "Model"("ModelID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Variant" ADD CONSTRAINT "Variant_FlexID_fkey" FOREIGN KEY ("FlexID") REFERENCES "Flex"("FlexID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Variant" ADD CONSTRAINT "Variant_HandID_fkey" FOREIGN KEY ("HandID") REFERENCES "Hand"("HandID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Variant" ADD CONSTRAINT "Variant_BladeCurveID_fkey" FOREIGN KEY ("BladeCurveID") REFERENCES "BladeCurve"("BladeCurveID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Variant" ADD CONSTRAINT "Variant_TextureID_fkey" FOREIGN KEY ("TextureID") REFERENCES "Texture"("TextureID") ON DELETE RESTRICT ON UPDATE CASCADE;
