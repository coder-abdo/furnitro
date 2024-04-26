import React from "react";
import { InspirationContent } from "./content";
import { CarouselNo1 } from "./carouselNo1";
import { CarouselNo2 } from "./carouselNo2";
import { ProductType } from "@/types";
type Props = {
  products: ProductType[];
};
export const InspirationRooms = ({ products }: Props) => {
  return (
    <section className="bg-rose-100 py-5 pl-5 flex gap-4 flex-col md:flex-row">
      <InspirationContent />
      <div className="flex gap-4 md:flex-row flex-col">
        <CarouselNo1 products={products} />
        <CarouselNo2 />
      </div>
    </section>
  );
};
