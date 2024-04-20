import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

export const Banner = () => {
  return (
    <div className="relative">
      <Image
        className="relative w-full h-full object-cover"
        src="/banner.jpg"
        width={1000}
        height={500}
        alt="banner"
        loading="lazy"
      />
      <div className="bg-[#FFF3E3] flex flex-col md:gap-4 gap-2 capitalize p-8 rounded-md shadow-sm absolute md:top-28 md:right-16 md:max-w-lg max-w-sm left-4 top-4">
        <h4 className="font-semibold text-[#333] text-base">new Arrival</h4>
        <h2 className="md:text-5xl font-bold text-main text-lg">
          discover our new collection
        </h2>
        <p className="md:text-lg text-[#333] font-medium text-xs">
          Introducing our latest addition to the furniture collection: the
          captivating Harmony Lounge Chair. Crafted with meticulous attention to
          detail, this exquisite piece harmoniously blends modern aesthetics
          with unparalleled comfort.
        </p>
        <Button className="bg-main text-white w-full max-w-36 text-base font-bold border border-main hover:bg-transparent hover:text-main capitalize">
          buy now
        </Button>
      </div>
    </div>
  );
};
