import type { FC } from "react";
type Props = {
  title: string;
  description: string;
  price: number;
  isFeatured?: boolean;
  featuredText?: "discount" | "new";
  discountPrice?: number;
};

export const ProductContent: FC<Props> = ({
  title,
  price,
  discountPrice,
  featuredText,
  isFeatured,
  description,
}) => {
  return (
    <div className="flex flex-col gap-4 bg-gray-200 relative capitalize pt-2 pb-4 px-2">
      <h3 className="font-semibold text-2xl">{title}</h3>
      <h4 className="text-base font-medium text-gray-400">{description}</h4>
      <h4 className="flex justify-between items-center">
        <span className="text-xl font-semibold">{price}</span>
        {isFeatured && featuredText === "discount" && (
          <span className="text-base text-gray-500 line-through">
            {discountPrice}
          </span>
        )}
      </h4>
    </div>
  );
};
