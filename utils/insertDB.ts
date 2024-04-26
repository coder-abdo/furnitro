import { prisma } from "@/db/primsaClient";
async function generateImageUrls(productCount: number) {
  const imageUrls = [];

  for (let i = 1; i <= productCount; i++) {
    const imageUrl = `https://picsum.photos/id/${i + 100}/800/600`;
    imageUrls.push(imageUrl);
  }

  return imageUrls;
}
export async function main() {
  // Create multiple categories
  // const categories = await prisma.category.createMany({
  //   data: [{ name: "Bedroom" }, { name: "Dining" }, { name: "Living" }],
  // });
  //
  // console.log("Categories created:", categories);

  // Create multiple products
  // const products = await prisma.product.createMany({
  //   data: [
  //     // bedroom
  //     {
  //       name: "loft bedroom in tribeca",
  //       description:
  //         "A comfortable and stylish bedroom in the Tribeca neighborhood",
  //       price: 1099.99,
  //       featured: "DISCOUNT",
  //       discount: 30,
  //       categoryId: 7, // Assign to the last created category
  //     },
  //     {
  //       name: "Dorm Room",
  //       description: "New Launch Condominium at Upper Bukit Timah",
  //       price: 799.99,
  //       featured: "NEW",
  //       categoryId: 7, // Assign to the second-to-last created category
  //     },
  //     {
  //       name: "Queen Bed",
  //       description: "A luxurious queen-size bed",
  //       price: 1499.99,
  //       categoryId: 7, // Assign to the third-to-last created category
  //     },
  //     {
  //       name: "coral bedroom",
  //       description: "A comfortable and stylish bedroom in the city center",
  //       price: 1099.99,
  //       featured: "DISCOUNT",
  //       discount: 30,
  //       categoryId: 7, // Assign to the last created category
  //     },
  //     {
  //       name: "Dorm Room",
  //       description: "dorm room for 2 people",
  //       price: 799.99,
  //       featured: "NEW",
  //       categoryId: 7, // Assign to the second-to-last created category
  //     },
  //     {
  //       name: "space joy bedroom",
  //       description: "spacejoy classic bedroom",
  //       price: 1499.99,
  //       categoryId: 7, // Assign to the third-to-last created category
  //     },
  //     {
  //       name: "Queen Bed",
  //       description: "A luxurious queen-size bed",
  //       price: 1499.99,
  //       categoryId: 7, // Assign to the third-to-last created category
  //     },
  //     // dining room
  //     {
  //       name: "yann Dining room",
  //       description: "yann classic dining room in paris",
  //       price: 1099.99,
  //       featured: "DISCOUNT",
  //       discount: 30,
  //       categoryId: 8, // Assign to the last created category
  //     },
  //     {
  //       name: "daniel dining room",
  //       description: "daniel classic dorm room in chelyabinsk",
  //       price: 799.99,
  //       featured: "NEW",
  //       categoryId: 8, // Assign to the second-to-last created category
  //     },
  //     {
  //       name: "don kaveen dining room",
  //       description: "don kaveen classic dorm room in colombo",
  //       price: 1499.99,
  //       categoryId: 8, // Assign to the third-to-last created category
  //     },
  //     {
  //       name: "editorial",
  //       description: "editorial classic dorm room in bangkok",
  //       price: 1099.99,
  //       featured: "DISCOUNT",
  //       discount: 30,
  //       categoryId: 8, // Assign to the last created category
  //     },
  //     {
  //       name: "bar stool",
  //       description: "bar stool classic dorm room in sydney",
  //       price: 799.99,
  //       featured: "NEW",
  //       categoryId: 8, // Assign to the second-to-last created category
  //     },
  //     {
  //       name: "cap town",
  //       description: "cap town classic dorm room in cape town",
  //       price: 1499.99,
  //       categoryId: 8, // Assign to the third-to-last created category
  //     },
  //     {
  //       name: "eos 90D",
  //       description: "eos 90D classic dorm room in london",
  //       price: 1499.99,
  //       categoryId: 8, // Assign to the third-to-last created category
  //     },
  //     {
  //       name: "Terminal Neige Totem",
  //       description:
  //         "Terminal Neige Totem classic dorm room in Arâches-la-Frasse, France",
  //       price: 1499.99,
  //       categoryId: 8, // Assign to the third-to-last created category
  //     },
  //     // living room
  //     {
  //       name: "minh fam",
  //       description: "minh fam classic living room in paris",
  //       price: 1099.99,
  //       featured: "DISCOUNT",
  //       discount: 30,
  //       categoryId: 9, // Assign to the last created category
  //     },
  //     {
  //       name: "lobby",
  //       description: "lobby classic living room in taiwan",
  //       price: 799.99,
  //       featured: "NEW",
  //       categoryId: 9, // Assign to the second-to-last created category
  //     },
  //     {
  //       name: "lotus cushion",
  //       description: "lutos cushion living room in sydney",
  //       price: 1499.99,
  //       categoryId: 9, // Assign to the third-to-last created category
  //     },
  //     {
  //       name: "greige",
  //       description: "a greige living room in karolina",
  //       price: 1099.99,
  //       featured: "DISCOUNT",
  //       discount: 30,
  //       categoryId: 9, // Assign to the last created category
  //     },
  //     {
  //       name: "stylisher",
  //       description: "stylisher living room in miami,fl",
  //       price: 799.99,
  //       featured: "NEW",
  //       categoryId: 9, // Assign to the second-to-last created category
  //     },
  //     {
  //       name: "mid century",
  //       description: "mid century living room in gaithersbug,md",
  //       price: 1499.99,
  //       categoryId: 9, // Assign to the third-to-last created category
  //     },
  //     {
  //       name: "cozy moments",
  //       description: "cozy moments living room in johannesburg,za",
  //       price: 1499.99,
  //       categoryId: 9, // Assign to the third-to-last created category
  //     },
  //     {
  //       name: "floory",
  //       description: "floory living room in dubai,ae",
  //       price: 1499.99,
  //       categoryId: 9, // Assign to the third-to-last created category
  //     },
  //   ],
  // });

  //console.log("Products created:", products);
  // generate random images

  // Create multiple images for the products
  function getRandomNumber(min: number, max: number): number {
    // Generate a random decimal number between 0 and 1
    var randomDecimal = Math.random();

    // Scale the random decimal to the range between min and max
    var randomNumber = randomDecimal * (max - min + 1) + min;

    // Use Math.floor() to round down to the nearest whole number
    return Math.floor(randomNumber);
  }
  const products = await prisma.product.findMany();
  const imagesUrls = await generateImageUrls(products.length);
  const images = await prisma.image.createMany({
    data: imagesUrls.map((imageUrl) => ({
      url: imageUrl,
      productId: getRandomNumber(70, 90),
    })),
  });

  console.log("Images created:", images);
}
// main()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
