import React from "react";
import { IoIosSend } from "react-icons/io";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import Comment from "@/components/Comment";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Rating from "@/components/Rating";
import { products } from "@/constants/data-dev/products";
import MoreProducts from "./_partials/MoreProducts";
import Payment from "./_partials/Payment";
import PricingTable from "./_partials/PricingTable";
import ProductImages from "./_partials/ProductImages";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  if (!id) return notFound();

  return (
    <MaxWidthWrapper className="pt-6">
      <div className="relative flex flex-col gap-20 lg:flex-row">
        <div className="">
          {/* header */}
          <div className="w-full">
            <h1 className="mb-6 text-2xl font-semibold lg:text-[28px]">
              I will develop mern stack web as mern stack developer, full stack
              developer
            </h1>
            <ProductImages />
          </div>

          {/* payment mobile */}
          <div className="my-8 lg:hidden">
            <Payment />
          </div>

          {/* about gigs */}
          <div className="my-8">
            <h3 className="mb-4 text-xl font-semibold">About this gig</h3>
            <p className="text-davy-gray">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
              fugit, ea ex architecto aliquam deserunt neque nulla odio alias
              itaque, amet facilis maiores quia earum. Magnam doloremque
              reprehenderit voluptates rem aliquid veritatis? Praesentium
              explicabo voluptates fugit! Dolor quaerat accusamus, cumque
              explicabo, totam ea animi asperiores reiciendis voluptatum culpa
              ab dolorum, fugit expedita perferendis eaque dolores maiores!
              Repudiandae laboriosam excepturi dignissimos facere, quia suscipit
              voluptatem commodi obcaecati cumque assumenda aperiam! Sed culpa
              eum nostrum soluta repudiandae cupiditate et possimus dolores
              architecto voluptates? Facere, maiores.
            </p>
          </div>

          {/* profile */}
          <div className="w-full">
            <h3 className="mb-6 text-xl font-semibold">
              Get to know Muhammad Sumbul
            </h3>
            <div className="flex flex-col justify-between gap-8 md:flex-row">
              <div className="flex items-center gap-4">
                <div className="aspect-square w-28 flex-shrink-0 overflow-hidden rounded-full border-2 border-primary-one">
                  <Image
                    src="/images/simon.png"
                    alt="seller"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="w-full">
                  <div className="flex w-full flex-col lg:flex-row lg:items-center lg:gap-2">
                    <span className="block font-bold">Muhammad Sumbul</span>
                  </div>
                  <div>
                    <p className="mt-1">
                      Expert WordPress website development tailored to your
                      unique needs
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
                  </div>
                </div>
              </div>
              <Button size="lg">
                <IoIosSend />
                Contact
              </Button>
            </div>

            {/* about seller */}
            <div className="mt-6">
              <h3 className="font-semibold text-davy-gray">About me</h3>
              <p className="mt-1 text-davy-gray">
                Hey there, l&apos;m a Web Developer. an expert in HTML5, CSS3,
                BOOTSTRAP, SASS, PHP, WordPress, jQuery, JavaScript and AJAX. I
                have more than 5 years of experience in web development. and I
                am open to helping you with any HTML, CSS or WordPress project.
              </p>
            </div>
          </div>

          {/* portfolio */}
          <div className="mt-6 w-full">
            <h3 className="mb-4 text-xl font-semibold">My Portfoliio</h3>
            <div className="rounded-xl border-2 p-4">
              <div className="flex w-full flex-col gap-8 sm:flex-row">
                <div className="aspect-[6/4] h-fit w-full flex-shrink-0 overflow-hidden rounded-xl border-2 sm:aspect-square sm:w-72">
                  <Image
                    src="/images/portfolio-1.png"
                    alt="portfolio-1"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-davy-gray">From: Januari 2025</span>
                  <h4 className="line-clamp-2 text-xl font-semibold">
                    I will design beautiful wix studio websites with unlimited
                    revisions
                  </h4>
                  <p className="line-clamp-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum consequatur nostrum, id maiores minus, nisi dicta
                    deserunt laboriosam suscipit hic reprehenderit quisquam.
                    Perferendis omnis asperiores voluptate nobis earum
                    cupiditate veritatis.
                  </p>

                  <div className="mt-4 space-x-4">
                    <Button className="h-8 border bg-background font-normal text-davy-gray">
                      Nextjs
                    </Button>
                    <Button className="h-8 border bg-background font-normal text-davy-gray">
                      9+
                    </Button>
                  </div>

                  <div className="mt-4 flex justify-between gap-8">
                    <div className="flex flex-col">
                      <span className="whitespace-nowrap text-sm text-davy-gray">
                        Project cost
                      </span>
                      <span className="line-clamp-1">Rp. 400.000-700.000</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="whitespace-nowrap text-sm text-davy-gray">
                        Project cost
                      </span>
                      <span className="line-clamp-1">7-30 days</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              <div className="aspect-[6/4] w-full overflow-hidden rounded-xl border-2">
                <Image
                  src="/images/portfolio-1.png"
                  alt="portfolio-1"
                  width={300}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex aspect-[6/4] w-full items-center justify-center overflow-hidden rounded-xl border-2 p-4">
                <span className="text-xl font-semibold">+4 Projects</span>
              </div>
            </div>
          </div>

          {/* package */}
          <div className="mt-12">
            <h3 className="mb-4 text-xl font-semibold">Compare packages</h3>
            <PricingTable />
          </div>

          <section className="mt-10">
            <Rating />
            <div className="mt-6">
              <Comment />
            </div>
          </section>
        </div>

        {/* payment dekstop */}
        <div className="hidden w-full flex-shrink-0 lg:block lg:max-w-sm">
          <Payment />
        </div>
      </div>

      <div className="mt-20">
        <h3 className="mb-4 text-xl font-semibold">More Products</h3>
        <MoreProducts data={products} />
      </div>
    </MaxWidthWrapper>
  );
}
