import Link from "next/link";
import { footerLinks } from "@/constants/footer";
import Logo from "./Logo";

const Footer = () => (
  <footer className="mt-8 flex flex-col rounded-3xl bg-gray-200 text-black md:p-8">
    <div className="flex flex-col justify-between gap-8 px-6 py-10 sm:px-16 lg:flex-row">
      <div className="flex flex-col items-start justify-start gap-6 lg:max-w-md">
        <Logo />
        <p>
          Yhoiki Team adalah komunitas pengembang yang berdedikasi menciptakan
          solusi digital kreatif dan inovatif. Kami memiliki pengalaman dalam
          membangun aplikasi modern, website interaktif, serta teknologi masa
          depan yang membantu mempercepat transformasi digital Anda.
        </p>
      </div>

      <div className="flex w-full flex-1 flex-wrap justify-end gap-20 max-md:mt-10 sm:flex-auto">
        {footerLinks.map((item: any) => (
          <div
            key={item.title}
            className="flex min-w-[150px] flex-col gap-6 text-base"
          >
            <h3 className="font-bold">{item.title}</h3>
            <div className="flex flex-col gap-5">
              {item.links.map((link: any) => (
                <a key={link.title} href={link.url} className="text-gray-500">
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-10 flex flex-col items-start justify-between border-t border-gray-100 p-6 sm:flex-row sm:items-start sm:px-16">
      <p>@{new Date().getFullYear()} CarHub. All rights reserved</p>

      <div className="flex flex-1 justify-start gap-10 max-sm:mt-4 sm:justify-end">
        <Link href="/" className="text-gray-500">
          Privacy & Policy
        </Link>
        <Link href="/" className="text-gray-500">
          Terms & Condition
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
