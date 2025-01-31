import Navbar from "./components/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/layout/Hero";
import Kategori from "./components/layout/Kategori";
import PopularProduct from "./components/layout/PopularProduct/page";
import PopularClass from "./components/layout/PopularClass/page"

export default function page() {
  return (
    <div className="bg-white">
      <div className="fixed w-full z-50">
        <Navbar />
      </div>
      <section>
        <HeroSection />
        <PopularProduct />
        <Kategori />
        <PopularClass />
        <Footer />
      </section>
    </div>
  );
}
