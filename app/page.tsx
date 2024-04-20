import { Banner } from "@/components/banner";
import { BrowseProducts } from "@/components/browseProducts";
import { ProductsCards } from "@/components/products/products";
import { InspirationRooms } from "@/components/roomInspirations";
import { ShareFurniture } from "@/components/shareFurniture";
import { Button } from "@/components/ui/button";
import { Products } from "@/utils";

export default function Home() {
  const products = Products.filter((product) => +product.id! < 9);
  return (
    <main>
      <Banner />
      <div className="container">
        <BrowseProducts />
        <section className="py-5 flex flex-col">
          <h2 className="text-center text-4xl font-bold capitalize">
            our products
          </h2>
          <ProductsCards products={products} />
          <Button className="self-center w-full rounded-none max-w-60 mt-5 border border-main text-main hover:bg-main hover:text-white bg-white">
            show more
          </Button>
        </section>
        <InspirationRooms />
      </div>
      <ShareFurniture />
    </main>
  );
}
