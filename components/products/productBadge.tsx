import { cn } from "@/lib/utils";
import type { FC } from "react";
type Props = {
  feature?: "NEW" | "DISCOUNT";
  title: string;
};
export const ProductBadge: FC<Props> = ({ title, feature }) => {
  return (
    <div
      className={cn(
        "absolute z-10 top-5 right-5 w-12 h-12 rounded-full font-medium text-white text-base flex justify-center items-center",
        feature === "NEW" ? "bg-teal-400" : "bg-red-400",
      )}
    >
      {title}
    </div>
  );
};
