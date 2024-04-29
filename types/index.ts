import { Decimal } from "@prisma/client/runtime/library";
type ProductType = {
  id?: number;
  images?: ProductImageType[];
  name: string;
  description: string;
  featured?: "NEW" | "DISCOUNT";
  discountPrice?: number;
  discount?: number;
  price: number | Decimal;
  categoryId: number;
  createdAt?: Date;
  updatedAt?: Date;
};
type ProductImageType = {
  id?: number;
  url: string;
  productId: number;
  createdAt?: Date;
  updatedAt?: Date;
};
export type { ProductType, ProductImageType };
