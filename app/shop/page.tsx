import { FilterNav } from "@/components/shop/filterNav";
import { FooterBanner } from "@/components/footerBanner";
import { ShopProducts } from "@/components/shop/products";
import { PageBanner } from "@/components/pageBanner";

const ShopPage = () => {
  return (
    <>
      <PageBanner pageName="shop" />
      <FilterNav />
      <ShopProducts />
      <FooterBanner />
    </>
  );
};

export default ShopPage;
