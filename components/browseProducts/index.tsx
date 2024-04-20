import { BrowseCardItems } from "./browseCardItems";

export const BrowseProducts = () => {
  return (
    <section className="pt-8 capitalize text-center">
      <h2 className="text-3xl font-bold mb-2">browse the range</h2>
      <p className="text-gray-600 text-xl mb-10">
        Welcome to our furniture store, where you can explore a wide range of
        high-quality furniture products for your home.{" "}
      </p>
      <BrowseCardItems />
    </section>
  );
};
