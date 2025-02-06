"use client";

import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ButtonFilter } from "@/components/Button";
import CardProduct from "@/components/CardProduct";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Search from "@/components/Search";
import { buttonData } from "@/constants/data-dev/filtersProduct";
import { products } from "@/constants/data-dev/products";

export default function PopularClass() {
  const [activeFilter, setActiveFilter] = useState("ButtonsA");
  const [emblaRef] = useEmblaCarousel();

  return (
    <MaxWidthWrapper>
      <div className="">
        <div className="flex items-start justify-between py-4">
          <div className="mb-4">
            <h2 className="mb-4 text-4xl font-bold text-[#535753]">
              <span className="bg-primary-gradient-r bg-clip-text text-transparent">
                Popular
              </span>{" "}
              And{" "}
              <span className="border border-dashed border-gray-300 bg-gradient-to-r from-[#75C57E] to-[#34A853] bg-clip-text p-0.5 text-transparent">
                Newest
              </span>{" "}
              Class
            </h2>
            <p className="font-semibold text-[#535753]">
              Look for the products you need here and see competitive prices
            </p>
          </div>
          <div className="hidden w-fit sm:block sm:max-w-sm md:w-full">
            <Search />
          </div>
        </div>

        {/* Sidebar Filter */}
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex flex-col transition-all duration-500 ease-in-out">
            {buttonData.map((btn) => (
              <ButtonFilter
                key={btn.id}
                id={btn.id}
                text={btn.text}
                icons={btn.icon}
                customcss="my-custom-class"
                onClick={() => setActiveFilter(btn.id)}
                isActive={activeFilter === btn.id}
              />
            ))}
          </div>

          {/* Konten Produk */}
          <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex gap-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="w-full flex-shrink-0 sm:w-[calc(100%/2-1rem)] lg:w-[calc(100%/3-1rem)] 2xl:w-[calc(100%/4-1rem)]"
                >
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
