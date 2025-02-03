import { FaInstagram, FaWebAwesome, FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full bg-white p-8 text-gray-700">
      <div className="flex justify-between space-x-36 rounded-3xl bg-gray-200 p-24">
        <div id="about" className="space-y-5">
          <Link href="/" id="logo" className="flex items-center space-x-3">
            <img
              className="w-7"
              src="https://i.ibb.co.com/0DhSzYN/Yhoiki.png"
              alt="logo"
            />
            <h1 className="text-xl font-bold text-gray-700">Yhoiki</h1>
          </Link>
          <p>
            Yhoiki Team adalah komunitas pengembang yang berdedikasi menciptakan
            solusi digital kreatif dan inovatif. Kami memiliki pengalaman dalam
            membangun aplikasi modern, website interaktif, serta teknologi masa
            depan yang membantu mempercepat transformasi digital Anda.
          </p>
          <p className="flex items-center gap-1 text-[13px] text-[#A8A8A8]">
            <span className="text-xl"> &copy;</span>Copyright Yhoiki 2024. All
            right reveserd.
          </p>
        </div>
        <div id="map" className="space-y-5">
          <h1 className="text-xl font-bold text-gray-700">Web Map</h1>
          <div className="flex space-x-14">
            <div className="list-none space-y-4">
              <li>Home</li>
              <li>Testimony</li>
              <li>Freelance</li>
              <li>Course</li>
              <li>Programs</li>
              <li>Produk</li>
            </div>
            <div className="list-none space-y-4">
              <li>Home</li>
              <li>Testimony</li>
              <li>Freelance</li>
              <li>Course</li>
              <li>Programs</li>
              <li>Produk</li>
            </div>
          </div>
        </div>
        <div id="contact" className="space-y-5">
          <h1 className="text-xl font-bold text-gray-700">Contact</h1>
          <div className="flex w-44 items-center space-x-3">
            <FaWhatsapp /> <p>+62 857-4337-9513</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaInstagram /> <p>yhoikiteam_</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaWebAwesome /> <p>yhoikiteam.co.id</p>
          </div>
        </div>
      </div>
    </div>
  );
}
