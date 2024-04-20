import type { FC } from "react";
import { ProductBadge } from "./productBadge";

import { ProductType } from "@/types";
import { CardImage } from "./cardImage";
import { ProductContent } from "./productContent";
import { ProductCTO } from "./productCTO";

export const ProductCard: FC<ProductType> = ({
  isFeatured = false,
  featuredText = "new",
  imageSrc,
  title,
  description,
  discountPrice,
  discountAmount = 30,
  price,
}) => {
  return (
    <div className="relative md:max-w-72 w-full group hover:cursor-pointer max-h-[446px]">
      {isFeatured && featuredText === "new" ? (
        <ProductBadge feature="new" title="new" />
      ) : (
        <ProductBadge feature="discount" title={`-${discountAmount}%`} />
      )}
      <CardImage imageSrc={imageSrc} imageAlt={title} />
      <ProductContent
        title={title}
        description={description}
        price={price}
        isFeatured={isFeatured}
        featuredText={featuredText}
        discountPrice={discountPrice}
      />
      {/* hover effect*/}
      <ProductCTO />
    </div>
  );
};
