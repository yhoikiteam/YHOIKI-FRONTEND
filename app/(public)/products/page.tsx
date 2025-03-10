"use client";

import { FaFigma } from "react-icons/fa";
import useEmblaCarousel from "embla-carousel-react";
import CardProduct from "@/components/CardProduct";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function ProductPage() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <MaxWidthWrapper className="pt-6">
      <h1 className="mb-6 text-3xl font-bold">Products</h1>
      <div className="relative w-full overflow-hidden" ref={emblaRef}>
        <div className="mb-6 flex gap-8">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="flex flex-shrink-0 flex-col items-center justify-center gap-1"
            >
              <div className="flex aspect-square w-14 items-center justify-center rounded-full bg-gainsboro [&_svg]:size-7">
                <FaFigma />
              </div>
              <span>Figma</span>
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {[...Array(10)].map((_, i) => (
          <CardProduct key={i} />
        ))}
      </div>
    </MaxWidthWrapper>
  );
}
