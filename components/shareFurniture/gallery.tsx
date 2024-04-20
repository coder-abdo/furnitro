import Image from "next/image";

export const Gallery = () => {
  return (
    <div className="gallery px-5">
      <Image
        loading="lazy"
        src={"/gallery/image-one.jpg"}
        alt="gallery image"
        width={200}
        height={200}
        className="image-one w-full h-full"
      />
      <Image
        loading="lazy"
        src={"/gallery/image-two.jpg"}
        alt="gallery image"
        width={200}
        height={200}
        className="image-two w-full h-full"
      />
      <Image
        loading="lazy"
        src={"/gallery/image-three.jpg"}
        alt="gallery image"
        width={200}
        height={200}
        className="image-three w-full h-full"
      />
      <Image
        loading="lazy"
        src={"/gallery/image-four.jpg"}
        alt="gallery image"
        width={200}
        height={200}
        className="image-four w-full h-full"
      />
      <Image
        loading="lazy"
        src={"/gallery/image-five.jpg"}
        alt="gallery image"
        width={200}
        height={200}
        className="image-five w-full h-full"
      />
      <Image
        loading="lazy"
        src={"/gallery/image-six.jpg"}
        alt="gallery image"
        width={200}
        height={200}
        className="image-six w-full h-full"
      />
      <Image
        loading="lazy"
        src={"/gallery/image-seven.jpg"}
        alt="gallery image"
        width={200}
        height={200}
        className="image-seven w-full h-full"
      />
      <Image
        loading="lazy"
        src={"/gallery/image-eight.jpg"}
        alt="gallery image"
        width={200}
        height={200}
        className="image-eight w-full h-full"
      />
      <Image
        loading="lazy"
        src={"/gallery/image-nine.jpg"}
        alt="gallery image"
        width={200}
        height={200}
        className="image-nine w-full h-full"
      />
    </div>
  );
};
