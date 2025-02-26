"use client";

import { useCallback, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import useEmblaCarousel from "embla-carousel-react";
import { Button, ButtonCategory } from "@/components/Button";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "@/components/CarauselArrowButtons";
import Card from "@/components/Card";
import { buttonData } from "@/constants/data-dev/filtersProduct";
import { Product } from "@/constants/data-dev/products";

interface IProps {
  data: any[];
}

export default function CategorySection({ data }: IProps) {
  const [activeFilter, setActiveFilter] = useState(1);
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="relative flex flex-col gap-8 md:flex-row">
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

      <PrevButton
        className="absolute top-96 z-30 md:-top-12 md:right-16 [&_svg]:size-3"
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
      />
      <NextButton
        className="absolute right-0 top-96 z-30 md:-top-12 md:right-3 [&_svg]:size-3"
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
      />
      {/* Konten Produk */}
      <div className="overflow-hidden rounded-xl pb-2" ref={emblaRef}>
        <div className="flex gap-4">
          {data.map((product: Product) => (
            <div key={product.id} className="w-[300px] flex-shrink-0">
              <Card data={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
