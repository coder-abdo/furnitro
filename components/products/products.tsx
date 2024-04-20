import { ProductCard } from "./product";
import { ProductType } from "@/types";

type Props = {
  products: ProductType[];
};
export const ProductsCards = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};
