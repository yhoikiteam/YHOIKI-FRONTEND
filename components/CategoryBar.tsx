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

  console.log(categoryBarRef.current?.offsetWidth);

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
                className="bg-primary-gradient bg-clip-text text-sm font-medium text-davy-gray duration-300 hover:text-transparent"
              >
                {cat.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
