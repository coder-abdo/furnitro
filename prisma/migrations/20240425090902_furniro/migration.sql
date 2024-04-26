-- CreateEnum
CREATE TYPE "Featured" AS ENUM ('NEW', 'DISCOUNT');

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "discount" INTEGER,
ADD COLUMN     "featured" "Featured";
