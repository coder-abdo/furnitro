import type { FC } from "react";
import Image from "next/image";
type Props = {
  imageSrc: string;
  imageAlt: string;
};
export const CardImage: FC<Props> = ({ imageSrc, imageAlt }) => {
  return (
    <Image
      src={imageSrc}
      alt={imageAlt}
      width={300}
      height={300}
      className="w-full object-cover h-2/3 relative"
    />
  );
};
