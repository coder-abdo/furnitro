import type { FC } from "react";
import { ProductBadge } from "./productBadge";

import { ProductType } from "@/types";
import { CardImage } from "./cardImage";
import { ProductContent } from "./productContent";
import { ProductCTO } from "./productCTO";

export const ProductCard: FC<ProductType> = ({
  featured = "NEW",
  images = [],
  name,
  description,
  discount = 30,
  price,
  discountPrice = price - discount * price * 0.01,
}) => {
  return (
    <div className="relative md:max-w-72 w-full group hover:cursor-pointer max-h-[446px]">
      {featured && (
        <ProductBadge
          feature={featured}
          title={featured === "DISCOUNT" ? `-${discount}%` : featured}
        />
      )}
      <CardImage
        imageSrc={images[0]?.url ?? "https://picsum.photos/id/117/800/600"}
        imageAlt={name}
      />
      <ProductContent
        name={name}
        description={description}
        price={discount ? discountPrice : price}
        featured={featured}
        discountPrice={price}
      />
      {/* hover effect*/}
      <ProductCTO />
    </div>
  );
};
