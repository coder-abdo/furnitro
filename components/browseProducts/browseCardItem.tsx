import Image from "next/image";
import type { FC } from "react";

type Props = {
  imageSrc: string;
  imageCaption: string;
};
export const BrowseCardItem: FC<Props> = ({ imageSrc, imageCaption }) => {
  return (
    <div className="cursor-pointer flex flex-col justify-center items-center">
      <Image
        className="w-full h-full"
        loading="lazy"
        src={imageSrc}
        width={200}
        height={200}
        alt={imageCaption}
      />
      <h5 className="mt-3 text-2xl font-semibold capitalize text-black/60">
        {imageCaption}
      </h5>
    </div>
  );
};
