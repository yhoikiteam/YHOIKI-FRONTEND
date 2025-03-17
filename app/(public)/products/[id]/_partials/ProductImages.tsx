"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "@/components/CarauselArrowButtons";

const images = [
  "https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs2/133905130/original/8890162afafa9b9263900a2657628878223786f5.jpg",
  "https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/221993480/original/cb08ab9869ecf5705768b8e683317f0c8e3cc8d9.jpg",
  "https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/133905130/original/d19bc2269a25bbb69e8266a86c7cf3fb0debc180.jpg",
];

export default function ProductImages() {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="relative aspect-[6/4] w-full overflow-hidden">
      {/* Button prev */}
      <PrevButton
        className="absolute left-4 top-1/2 z-40 h-12 w-12 -translate-y-1/2 [&_svg]:size-3"
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
      />

      {/* Button next */}
      <NextButton
        className="absolute right-4 top-1/2 z-40 h-12 w-12 -translate-y-1/2 [&_svg]:size-3"
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
      />

      <div className="h-full overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex">
          {images.map((item, i) => (
            <div key={i} className="w-full min-w-0 flex-shrink-0">
              <Image
                src={item}
                width={700}
                height={700}
                alt={`img-${i}`}
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
