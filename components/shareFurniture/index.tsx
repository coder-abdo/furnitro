import React from "react";
import { Gallery } from "./gallery";

export const ShareFurniture = () => {
  return (
    <section className="py-5 capitalize text-center">
      <h4 className="text-xl font-semibold mb-2 text-black/60">
        Share your setup with
      </h4>
      <h2 className="text-4xl font-bold mb-4">#FuniroFurniture</h2>
      <Gallery />
    </section>
  );
};
