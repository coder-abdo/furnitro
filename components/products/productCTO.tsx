import React from "react";
import { ArrowLeftRight, Heart, Share2 } from "lucide-react";
import { Button } from "../ui/button";
export const ProductCTO = () => {
  return (
    <div className="absolute flex flex-col justify-center items-center gap-4 top-0 bottom-0 left-0 right-0 bg-gray-200 z-20 group-hover:scale-y-100 origin-bottom transition-transform scale-y-0">
      <Button
        className="bg-white text-main border-none hover:border-none hover:bg-white"
        size={"lg"}
      >
        Add to cart
      </Button>
      <div className="flex items-center justify-around capitalize text-white gap-2">
        <h6 className="flex items-center gap-1">
          <Share2 size={16} />
          <span className="text-base font-semibold">share</span>
        </h6>
        <h6 className="flex items-center gap-1">
          <ArrowLeftRight size={16} />
          <span className="text-base font-semibold">compare</span>
        </h6>
        <h6 className="flex items-center gap-1">
          <Heart size={16} />
          <span className="text-base font-semibold">like</span>
        </h6>
      </div>
    </div>
  );
};
