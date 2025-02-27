"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { CATEGORY_BAR } from "@/constants/categoryBar";

export default function CategoryBar() {
  const categoryBarRef = useRef<HTMLDivElement | null>(null);
  const [carousel, setCarousel] = useState(false);
  const [emblaRef] = useEmblaCarousel();

  useEffect(() => {
    if (!categoryBarRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const containerWidth = entries[0]?.contentRect.width;
      setCarousel(containerWidth < 1216);
    });

    observer.observe(categoryBarRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full overflow-hidden" ref={categoryBarRef}>
      <div
        className="relative w-full overflow-hidden"
        ref={carousel ? emblaRef : null}
      >
        <div className="flex gap-8">
          {CATEGORY_BAR.map((cat, i) => (
            <div key={i} className="flex-shrink-0">
              <Link
                href={`/product`}
                className="group relative block py-2 text-davy-gray duration-300 hover:text-primary-one"
              >
                {cat.label}
                <span className="absolute bottom-0 left-0 h-[2px] w-full scale-x-0 bg-primary-gradient transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
