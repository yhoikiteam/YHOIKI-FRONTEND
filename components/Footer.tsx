import Link from "next/link";
import { footerLinks } from "@/constants/footer";
import Logo from "./Logo";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => (
  <footer className="mt-8 md:p-8">
    <MaxWidthWrapper className="bg-gray-200 sm:rounded-3xl">
      <div className="flex flex-col justify-between gap-8 py-10 xl:flex-row">
        <div className="flex flex-col items-start justify-start gap-4 xl:max-w-lg">
          <Logo />
          <p className="text-sm text-davy-gray sm:text-base">
            Yhoiki Team adalah komunitas pengembang yang berdedikasi menciptakan
            solusi digital kreatif dan inovatif. Kami memiliki pengalaman dalam
            membangun aplikasi modern, website interaktif, serta teknologi masa
            depan yang membantu mempercepat transformasi digital Anda.
          </p>
          <p className="text-davy-gray">
            Copyright Yhoiki {new Date().getFullYear()}. All right reveserd.
          </p>
        </div>

        <div className="flex w-full flex-1 flex-wrap justify-start gap-20 max-md:mt-10 sm:flex-auto">
          {footerLinks.map((item: any) => (
            <div
              key={item.title}
              className="flex w-fit flex-col gap-4 text-base"
            >
              <h3 className="font-bold text-gray-600">{item.title}</h3>
              <div className="flex flex-col gap-2 text-davy-gray">
                {item.links.map((link: any) => (
                  <a key={link.title} href={link.url} className="">
                    {link.title}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-start justify-between gap-4 border-t p-6 sm:items-start sm:px-16 lg:flex-row">
        <div className="flex flex-1 justify-center gap-10">
          <Link href="/" className="text-gray-500">
            Privacy & Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms & Condition
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  </footer>
);

export default Footer;
