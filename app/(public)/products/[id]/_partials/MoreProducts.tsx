"use client";

import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "@/components/CarauselArrowButtons";
import Card from "@/components/Card";
import { Product } from "@/constants/data-dev/products";

interface IProps {
  data: any[];
}

export default function MoreProducts({ data }: IProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="relative">
      {/* Button prev */}
      <PrevButton
        className="absolute left-8 top-1/2 z-30 -translate-y-1/2 [&_svg]:size-3"
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
      />

      {/* Button next */}
      <NextButton
        className="absolute right-8 top-1/2 z-30 -translate-y-1/2 [&_svg]:size-3"
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
      />

      {/* Konten Produk */}
      <div className="relative overflow-hidden rounded-xl pb-2" ref={emblaRef}>
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
