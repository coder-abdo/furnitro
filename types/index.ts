type ProductType = {
  id?: number | string;
  imageSrc: string;
  title: string;
  description: string;
  isFeatured?: boolean;
  featuredText?: "new" | "discount";
  discountPrice?: number;
  discountAmount?: number;
  price: number;
};

export type { ProductType };
