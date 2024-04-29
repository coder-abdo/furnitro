import { ProductsCards } from "@/components/products/products";
import { ShopPagination } from "../pagination";
import { prisma } from "@/db/primsaClient";

export const ShopProducts = async () => {
  const products = await prisma.product.findMany({
    include: {
      images: true,
    },
  });
  return (
    <div className="py-10 container">
      <ProductsCards products={products} />;
      <div className="mt-8 flex justify-center items-center">
        <ShopPagination />
      </div>
    </div>
  );
};
