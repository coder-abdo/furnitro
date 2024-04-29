"use client";
import Image from "next/image";
import Slider from "react-slick";
import { GitCommitHorizontal } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductType } from "@/types";

type Props = {
  products: ProductType[];
};
const settings = {
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  arrows: false,
  autoplay: true,
};

export const CarouselNo2 = ({ products }: Props) => {
  return (
    <Slider
      {...settings}
      className="max-w-md w-full max-h-[500px] h-full relative"
    >
      {products.map((product, idx) => (
        <div key={product.id} className="w-full relative">
          <Image
            className="w-full h-[500px] object-cover"
            src={product.images![0]?.url}
            alt={product.name}
            width={300}
            height={500}
          />
          <div className="absolute bottom-8 left-8 bg-white/60 p-5">
            <h5 className="flex items-center gap-2 text-base text-gray-600 capitalize">
              <span>0{idx + 1}</span>
              <GitCommitHorizontal />
              <span>{product.name}</span>
            </h5>
            <h3 className="text-2xl font-semibold">{product.description}</h3>
          </div>
        </div>
      ))}
    </Slider>
  );
};
