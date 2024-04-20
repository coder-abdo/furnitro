import React from "react";
import { InspirationContent } from "./content";
import { CarouselNo1 } from "./carouselNo1";
import { CarouselNo2 } from "./carouselNo2";

export const InspirationRooms = () => {
  return (
    <section className="bg-rose-100 py-5 pl-5 flex gap-4 flex-col md:flex-row">
      <InspirationContent />
      <div className="flex gap-4 md:flex-row flex-col">
        <CarouselNo1 />
        <CarouselNo2 />
      </div>
    </section>
  );
};
