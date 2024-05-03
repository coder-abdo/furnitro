import { Product } from "@prisma/client";
import { ProductCard } from "./product";

type Props = {
  products: Product[];
};
export const ProductsCards = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
