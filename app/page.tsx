import CardProduct from "./components/CardProduct";
import Navbar from "./components/Navbar";
import Footer from "./components/pages/Footer";
import HeroSection from "./components/pages/Hero";
import Kategori from "./components/pages/Kategori";
import PopularProduct from "./components/pages/PopularProduct/page";
import PopularClass from "./components/pages/PopularClass/page"
import Login from "./components/pages/Auth/Login";

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
