import { ProductType } from "@/types";

const linksMap = new Map<string, string>();

linksMap.set("Home", "/");
linksMap.set("Shop", "/shop");
linksMap.set("About", "/about");
linksMap.set("Contact", "/contact");

const BrowseItems = new Map<string, string>();
BrowseItems.set("dining", "/dining.jpg");
BrowseItems.set("living", "/living.jpg");
BrowseItems.set("bedroom", "/bedroom.jpg");

const Products: ProductType[] = [
  {
    id: 1,
    discountAmount: 30,
    title: "Syltherine",
    description: "Stylish cafe chair",
    imageSrc: "/cafe-chair.jpg",
    isFeatured: true,
    featuredText: "discount",
    discountPrice: 3600,
    price: 2500,
  },
  {
    id: 2,
    title: "Leviosa",
    description: "Stylish cafe chair",
    imageSrc: "/chair.jpg",
    price: 2500,
  },
  {
    id: 3,
    title: "lolito",
    discountAmount: 50,
    description: "Luxury big sofa",
    imageSrc: "/sofa.jpg",
    isFeatured: true,
    featuredText: "discount",
    discountPrice: 14000,
    price: 7000,
  },
  {
    id: 4,
    title: "respira",
    description: "Outdoor bar table and stool",
    imageSrc: "/stool.jpg",
    isFeatured: true,
    featuredText: "new",
    price: 5000,
  },
  {
    id: 5,
    title: "Grifo",
    description: "Night lamp",
    imageSrc: "/night-lamp.jpg",
    price: 1500,
  },
  {
    id: 6,
    title: "Muggo",
    description: "Small mug",
    imageSrc: "/skin-sofa.jpg",
    isFeatured: true,
    featuredText: "new",
    price: 15000,
  },
  {
    id: 7,
    title: "Pingky",
    discountAmount: 50,
    description: "Cute bed set",
    imageSrc: "/single-sofa.jpg",
    isFeatured: true,
    featuredText: "discount",
    discountPrice: 14000,
    price: 7000,
  },
  {
    id: 8,
    title: "Potty",
    description: "a beatifull couch",
    imageSrc: "/furniture.jpg",
    isFeatured: true,
    featuredText: "new",
    price: 5000,
  },
  {
    id: 9,
    discountAmount: 30,
    title: "Syltherine",
    description: "Stylish cafe chair",
    imageSrc: "/cafe-chair.jpg",
    isFeatured: true,
    featuredText: "discount",
    discountPrice: 3600,
    price: 2500,
  },
  {
    id: 10,
    title: "Leviosa",
    description: "Stylish cafe chair",
    imageSrc: "/chair.jpg",
    price: 2500,
  },
  {
    id: 11,
    title: "lolito",
    discountAmount: 50,
    description: "Luxury big sofa",
    imageSrc: "/sofa.jpg",
    isFeatured: true,
    featuredText: "discount",
    discountPrice: 14000,
    price: 7000,
  },
  {
    id: 12,
    title: "respira",
    description: "Outdoor bar table and stool",
    imageSrc: "/stool.jpg",
    isFeatured: true,
    featuredText: "new",
    price: 5000,
  },
  {
    id: 13,
    title: "Grifo",
    description: "Night lamp",
    imageSrc: "/night-lamp.jpg",
    price: 1500,
  },
  {
    id: 14,
    title: "Muggo",
    description: "Small mug",
    imageSrc: "/skin-sofa.jpg",
    isFeatured: true,
    featuredText: "new",
    price: 15000,
  },
  {
    id: 15,
    title: "Pingky",
    discountAmount: 50,
    description: "Cute bed set",
    imageSrc: "/single-sofa.jpg",
    isFeatured: true,
    featuredText: "discount",
    discountPrice: 14000,
    price: 7000,
  },
  {
    id: 16,
    title: "Potty",
    description: "a beatifull couch",
    imageSrc: "/furniture.jpg",
    isFeatured: true,
    featuredText: "new",
    price: 5000,
  },
];
export { linksMap, BrowseItems, Products };
