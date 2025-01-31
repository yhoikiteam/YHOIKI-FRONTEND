import PopularProduct from "@/app/(home)/modules/PopularProduct";
import HeroSection from "@/app/(home)/modules/HeroSection";
import CategorySection from "@/app/(home)/modules/CategorySection";
import PopularClass from "@/app/(home)/modules/PopularClass";

export default function page() {
  return (
    <>
      <HeroSection />
      <PopularProduct />
      <CategorySection />
      <PopularClass />
    </>
  );
}
