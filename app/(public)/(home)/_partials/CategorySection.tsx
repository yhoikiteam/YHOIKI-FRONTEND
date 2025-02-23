"use client";

import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ButtonCategory } from "@/components/Button";
import CardProduct from "@/components/CardProduct";
import { buttonData } from "@/constants/data-dev/filtersProduct";

interface IProps {
  data: any[];
}

export default function CategorySection({ data }: IProps) {
  const [activeFilter, setActiveFilter] = useState(1);
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="flex flex-col gap-8 md:flex-row">
      <div className="flex flex-col transition-all duration-500 ease-in-out">
        {buttonData.map((btn) => (
          <ButtonCategory
            key={btn.id}
            onClick={() => setActiveFilter(btn.id)}
            activeFilter={activeFilter === btn.id}
          >
            <div>{btn.icon}</div>
            <p className="whitespace-nowrap">{btn.text}</p>
          </ButtonCategory>
        ))}
      </div>

      {/* Konten Produk */}
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex gap-6">
          {data.map((product: any) => (
            <div key={product.id} className="w-[300px] flex-shrink-0">
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
  );
}
