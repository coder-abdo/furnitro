type ProductType = {
  id?: number;
  images?: ProductImageType[];
  name: string;
  description: string;
  featured?: "NEW" | "DISCOUNT";
  discountPrice?: number;
  discount?: number;
  price: number;
  categoryId: number;
};
type ProductImageType = {
  id?: number;
  url: string;
  productId: number;
};
export type { ProductType, ProductImageType };
