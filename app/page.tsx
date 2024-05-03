import { Banner } from "@/components/banner";
import { BrowseProducts } from "@/components/browseProducts";
import { ShowProductsSection } from "@/components/home/showProductsSection";
import { InspirationRooms } from "@/components/roomInspirations";
import { ShareFurniture } from "@/components/shareFurniture";
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
        <ShowProductsSection products={dbproducts} />
        <InspirationRooms products={dbproducts} />
      </div>
      <ShareFurniture />
    </main>
  );
}
