"use client";

import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import CardProduct from "@/components/CardProduct";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Search from "@/components/Search";
import { buttonData } from "@/constants/data-dev/filtersProduct";
import { products } from "@/constants/data-dev/products";
import { cn } from "@/utils/cn";

export default function CategorySection() {
  const [activeFilter, setActiveFilter] = useState(1);
  const [emblaRef] = useEmblaCarousel();

  return (
    <MaxWidthWrapper>
      <div className="">
        <div className="flex items-start justify-between py-4">
          <div className="mb-4">
            <h2 className="mb-4 text-4xl font-bold text-davy-gray">
              <span className="bg-primary-gradient bg-clip-text text-transparent">
                Popular
              </span>{" "}
              And{" "}
              <span className="border border-dashed border-gray-300 bg-primary-gradient bg-clip-text p-0.5 text-transparent">
                Newest
              </span>{" "}
              Product
            </h2>
            <p className="font-semibold text-davy-gray">
              Look for the products you need here and see competitive prices
            </p>
          </div>
          {/* <div className="hidden w-full sm:max-w-sm lg:block">
            <Search />
          </div> */}
        </div>

        {/* Sidebar Filter */}
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex flex-col transition-all duration-500 ease-in-out">
            {buttonData.map((btn) => (
              <button
                key={btn.id}
                onClick={() => setActiveFilter(btn.id)}
                className={cn(
                  "mb-2 flex h-12 min-w-56 items-center gap-3 rounded-full border-2 bg-platinum px-4 text-left font-semibold text-gray-500 transition-all",
                  {
                    "border-medium-sea-green text-medium-sea-green":
                      activeFilter === btn.id,
                  },
                )}
              >
                <div>{btn.icon}</div>
                <p className="whitespace-nowrap">{btn.text}</p>
              </button>
            ))}
          </div>

          {/* Konten Produk */}
          <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex gap-4">
              {products.map((product) => (
                <div key={product.id} className="w-[280px] flex-shrink-0">
                  <CardProduct
                    id={product.id}
                    imageSrc={product.imageSrc}
                    badgeSrc={product.badgeSrc}
                    name={product.name}
                    price={product.price}
                    rating={product.rating}
                    reviews={product.reviews}
                    description={product.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
