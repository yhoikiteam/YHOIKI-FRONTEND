import CategorySection from "@/app/(public)/(home)/partials/CategorySection";
import HeroSection from "@/app/(public)/(home)/partials/HeroSection";
import PopularClass from "@/app/(public)/(home)/partials/PopularClass";
import PopularProduct from "@/app/(public)/(home)/partials/PopularProduct";

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
