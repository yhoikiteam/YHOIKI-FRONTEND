"use client";

import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ButtonFilter } from "@/components/Button";
import CardProduct from "@/components/CardProduct";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Search from "@/components/Search";
import { buttonData } from "@/constants/data-dev/filtersProduct";
import { products } from "@/constants/data-dev/products";

export default function PopularProduct() {
  const [activeFilter, setActiveFilter] = useState("ButtonsA");
  const [emblaRef] = useEmblaCarousel();

  return (
    <MaxWidthWrapper>
      <div className="">
        <div className="flex items-start justify-between py-4">
          <div className="mb-4">
            <h2 className="mb-4 text-4xl font-bold text-[#535753]">
              <span className="bg-button-gradient bg-clip-text text-transparent">
                Popular
              </span>{" "}
              And{" "}
              <span className="border border-dashed border-gray-300 bg-gradient-to-r from-[#75C57E] to-[#34A853] bg-clip-text p-0.5 text-transparent">
                Newest
              </span>{" "}
              Product
            </h2>
            <p className="font-semibold text-[#535753]">
              Look for the products you need here and see competitive prices
            </p>
          </div>
          <Search />
        </div>

        {/* Sidebar Filter */}
        <div className="flex gap-6">
          <div className="w-72 flex-shrink-0 py-4 transition-all duration-500 ease-in-out">
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
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {products.map((product) => (
                <div key={product.id} style={{ flex: "0 0 auto", minWidth: 0 }}>
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
