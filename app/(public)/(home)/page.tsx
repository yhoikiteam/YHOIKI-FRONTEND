import CategorySection from "@/app/(public)/(home)/partials/CategorySection";
import HeroSection from "@/app/(public)/(home)/partials/HeroSection";

export default function page() {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <div className="my-8 w-full p-8">
        <div className="flex-col items-center justify-center rounded-3xl bg-gradient-to-br from-color1 to-color2 p-24">
          <p className="text-center text-4xl font-bold text-white">
            Want to Learn and Get a Certificate? What are you waiting for!
            <br />• • •
          </p>
        </div>
      </div>
      <CategorySection />
    </>
  );
}
