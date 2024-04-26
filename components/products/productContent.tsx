import type { FC } from "react";
type Props = {
  name: string;
  description: string;
  price: number;
  featured?: "DISCOUNT" | "NEW";
  discountPrice?: number;
};

export const ProductContent: FC<Props> = ({
  name,
  price,
  discountPrice,
  featured,
  description,
}) => {
  return (
    <div className="flex flex-col justify-between gap-4 bg-gray-200 capitalize pt-2 pb-4 px-2 h-1/2">
      <h3 className="font-semibold text-2xl">{name}</h3>
      <h4 className="text-base font-medium text-gray-400">{description}</h4>
      <h4 className="flex justify-between items-center">
        <span className="text-xl font-semibold">{+price.toFixed(2)}</span>
        {featured === "DISCOUNT" && (
          <span className="text-base text-gray-500 line-through">
            {discountPrice}
          </span>
        )}
      </h4>
    </div>
  );
};
