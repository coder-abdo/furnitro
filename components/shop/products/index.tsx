import { ProductsCards } from "@/components/products/products";
import { Products } from "@/utils";
import { ShopPagination } from "../pagination";

export const ShopProducts = () => {
  return (
    <div className="py-10 container">
      <ProductsCards products={Products} />;
      <div className="mt-8 flex justify-center items-center">
        <ShopPagination />
      </div>
    </div>
  );
};
