import { Banner } from "@/components/banner";
import { BrowseProducts } from "@/components/browseProducts";
import { ProductsCards } from "@/components/products/products";
import { InspirationRooms } from "@/components/roomInspirations";
import { ShareFurniture } from "@/components/shareFurniture";
import { Button } from "@/components/ui/button";
import { prisma } from "@/db/primsaClient";

export default async function Home() {
  const dbproducts = await prisma.product.findMany({
    include: {
      images: true,
    },
    take: 8,
  });
  return (
    <main>
      <Banner />
      <div className="container">
        <BrowseProducts />
        <section className="py-5 flex flex-col">
          <h2 className="text-center text-4xl font-bold capitalize mb-4">
            our products
          </h2>
          <ProductsCards products={dbproducts} />
          <Button className="self-center w-full rounded-none max-w-60 mt-5 border border-main text-main hover:bg-main hover:text-white bg-white">
            show more
          </Button>
        </section>
        <InspirationRooms products={dbproducts} />
      </div>
      <ShareFurniture />
    </main>
  );
}
