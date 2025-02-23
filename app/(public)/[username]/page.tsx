import { IoIosSend } from "react-icons/io";
import { LuMapPin } from "react-icons/lu";
import Image from "next/image";
import { Button } from "@/components/Button";
import CardProduct from "@/components/CardProduct";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Rating from "@/components/Rating";
import { products } from "@/constants/data-dev/products";
import GigsSection from "./_partials/GigsSection";

export default async function Page({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const username = (await params).username;
  return (
    <MaxWidthWrapper className="pt-10">
      <div className="flex flex-col lg:flex-row lg:gap-10">
        <div className="w-full">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <div className="aspect-square w-36 flex-shrink-0 overflow-hidden rounded-full border-2 border-primary-one">
              <Image
                src="/images/no-pictures.png"
                alt="seller"
                width={100}
                height={100}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="w-full">
              <div className="flex w-full flex-col lg:flex-row lg:items-center lg:gap-2">
                <span className="block text-2xl font-bold">
                  Muhammad Sumbul
                </span>
                <span className="block text-davy-gray">@{username}</span>
              </div>
              <div>
                <p className="mt-1">
                  Expert WordPress website development tailored to your unique
                  needs
                </p>
                <div className="mt-2 flex gap-1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 3C12 7.97056 16.0294 12 21 12C16.0294 12 12 16.0294 12 21C12 16.0294 7.97056 12 3 12C7.97056 12 12 7.97056 12 3Z"
                      fill="black"
                      fillOpacity="0.15"
                    />
                    <path
                      d="M12 3C12 7.97056 16.0294 12 21 12C16.0294 12 12 16.0294 12 21C12 16.0294 7.97056 12 3 12C7.97056 12 12 7.97056 12 3Z"
                      stroke="url(#paint0_linear_1411_5759)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1411_5759"
                        x1="12"
                        y1="3"
                        x2="12"
                        y2="21"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#75C57E" />
                        <stop offset="1" stopColor="#34A853" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="block font-semibold">4.9</span>
                  <span className="text-medium-sea-green block font-semibold">
                    (599)
                  </span>
                </div>

                <div className="mt-2">
                  <div className="flex items-center gap-1 text-davy-gray">
                    <LuMapPin size={20} />
                    <span className="font-medium">Bandung, Jawa Barat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* about seller */}
          <div className="mt-6">
            <h3 className="font-semibold text-davy-gray">About me</h3>
            <p className="mt-1 text-davy-gray">
              Hey there, l&apos;m a Web Developer. an expert in HTML5, CSS3,
              BOOTSTRAP, SASS, PHP, WordPress, jQuery, JavaScript and AJAX. I
              have more than 5 years of experience in web development. and I am
              open to helping you with any HTML, CSS or WordPress project.
            </p>
          </div>
        </div>
        <div className="mt-6 flex h-fit flex-shrink-0 flex-col items-center justify-center gap-2 rounded-xl border bg-background p-6 shadow-sm lg:mt-0">
          <Button className="h-12 w-full text-base sm:w-64 [&_svg]:size-5 [&_svg]:shrink-0">
            <IoIosSend />
            Contact me
          </Button>
          <span className="text-sm text-davy-gray">
            Average response time: 10 hours
          </span>
        </div>
      </div>

      <GigsSection />

      <section className="mt-10">
        <Rating />
      </section>
    </MaxWidthWrapper>
  );
}
