import { ProductsCards } from "@/components/products/products";
import { Button } from "@/components/ui/button";
import { Product } from "@prisma/client";
type Props = {
  products: Product[];
};
export const ShowProductsSection = ({ products }: Props) => {
  return (
    <section className="py-5 flex flex-col">
      <h2 className="text-center text-4xl font-bold capitalize mb-4">
        our products
      </h2>
      <ProductsCards products={products} />
      <Button className="self-center w-full rounded-none max-w-60 mt-5 border border-main text-main hover:bg-main hover:text-white bg-white">
        show more
      </Button>
    </section>
  );
};
