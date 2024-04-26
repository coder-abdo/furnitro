"use client";
import Image from "next/image";
import Slider from "react-slick";
import { ArrowRight, GitCommitHorizontal } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "../ui/button";
import { ProductType } from "@/types";
const CustomRightArrow = (props: any) => {
  const { onClick } = props;
  return (
    <Button
      onClick={onClick}
      className="bg-main text-white rounded-none hover:bg-main hover:text-white absolute bottom-24 left-[48%] z-10"
    >
      <ArrowRight />
    </Button>
  );
};

const settings = {
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <CustomRightArrow />,
  prevArrow: null,
};
type Props = {
  products: ProductType[];
};
export const CarouselNo1 = ({ products }: Props) => {
  return (
    <Slider {...settings} className="max-w-md w-full relative">
      {products.map((product, idx) => (
        <div key={product.id} className="w-full relative">
          <Image
            className="w-full h-full object-cover"
            src={
              product.images!.length > 0
                ? product.images![0]?.url
                : "https://picsum.photos/300/300?random=2"
            }
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
      {/* <div className="w-full relative"> */}
      {/*   <Image */}
      {/*     className="w-full h-full object-cover" */}
      {/*     src="/sofa.jpg" */}
      {/*     alt="item 1" */}
      {/*     width={300} */}
      {/*     height={300} */}
      {/*   /> */}
      {/*   <div className="absolute bottom-8 left-8 bg-white/60 p-5"> */}
      {/*     <h5 className="flex items-center gap-2 text-base text-gray-600 capitalize"> */}
      {/*       <span>01</span> */}
      {/*       <GitCommitHorizontal /> */}
      {/*       <span>sofa</span> */}
      {/*     </h5> */}
      {/*     <h3 className="text-2xl font-semibold">inner peace</h3> */}
      {/*   </div> */}
      {/* </div> */}
      {/* <div className="w-full relative"> */}
      {/*   <Image */}
      {/*     className="w-full h-full object-cover" */}
      {/*     src="/sofa.jpg" */}
      {/*     alt="item 2" */}
      {/*     width={300} */}
      {/*     height={300} */}
      {/*   /> */}
      {/*   <div className="absolute bottom-8 left-8 bg-white/60 p-5"> */}
      {/*     <h5 className="flex items-center gap-2 text-base text-gray-600 capitalize"> */}
      {/*       <span>02</span> */}
      {/*       <GitCommitHorizontal /> */}
      {/*       <span>sofa</span> */}
      {/*     </h5> */}
      {/*     <h3 className="text-2xl font-semibold">inner peace</h3> */}
      {/*   </div> */}
      {/* </div> */}
      {/* <div className="w-full relative"> */}
      {/*   <Image */}
      {/*     className="w-full h-full object-cover" */}
      {/*     src="/sofa.jpg" */}
      {/*     alt="item 1" */}
      {/*     width={300} */}
      {/*     height={300} */}
      {/*   /> */}
      {/*   <div className="absolute bottom-8 left-8 bg-white/60 p-5"> */}
      {/*     <h5 className="flex items-center gap-2 text-base text-gray-600 capitalize"> */}
      {/*       <span>03</span> */}
      {/*       <GitCommitHorizontal /> */}
      {/*       <span>sofa</span> */}
      {/*     </h5> */}
      {/*     <h3 className="text-2xl font-semibold">inner peace</h3> */}
      {/*   </div> */}
      {/* </div> */}
    </Slider>
  );
};
