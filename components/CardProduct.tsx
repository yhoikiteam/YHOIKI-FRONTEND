import Image from "next/image";
import { Button } from "./Button";

interface CardProps {
  id: number;
  imageSrc: string;
  badgeSrc: string;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  description: string;
}

export default function CardProduct({
  imageSrc,
  badgeSrc,
  name,
  price,
  rating,
  reviews,
  description,
}: CardProps) {
  return (
    <div className="inline-block w-full overflow-hidden">
      {/* Hero Image */}
      <div className="relative flex aspect-[6/4] w-full items-center justify-center overflow-hidden rounded-xl">
        <Image
          src="/images/product.png"
          alt={name}
          width={700}
          height={700}
          className="h-full w-full object-cover"
        />
      </div>
      {/* Card Content */}
      <div className="pt-2">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={imageSrc}
              alt="Badge"
              width={50}
              height={50}
              className="aspect-square w-8 flex-shrink-0 rounded-full"
            />
            <span className="text-sm font-semibold">{name}</span>
          </div>

          {/* Rating */}
          <span className="flex items-center gap-1 rounded-md bg-primary-gradient px-4 py-[0.2rem] text-xs text-white md:px-2">
            <p className="whitespace-nowrap text-xs">Top Rate</p>
            {[...Array(2)].map((_, index) => (
              <Image
                src="/icon/Star toprate.svg"
                alt="Star Icon"
                width={10}
                height={10}
                key={index}
              />
            ))}
          </span>
        </div>

        {/* Description */}
        <div className="relative w-full pb-2">
          <p className="text-ellipsis whitespace-normal text-base text-davy-gray">
            {description}
          </p>
        </div>

        {/* Rating and reviews */}
        <div className="flex items-center text-davy-gray">
          <span className="flex items-center text-sm">
            <Image
              src="/icon/Star 2.svg"
              alt="Star Icon"
              width={25}
              height={25}
            />
            <div className="ml-1 font-bold">{rating.toFixed(1)}</div>
          </span>
          <span className="ml-1 text-xs">({reviews} reviews)</span>
        </div>

        {/* Add to keranjang */}
        <div className="mt-3 flex items-center justify-between gap-4">
          <Button className="w-full">From {price}</Button>
          <Button size="icon" className="flex-shrink-0 bg-gainsboro">
            <Image
              src="/icon/Cart 4.svg"
              alt="Cart Icon"
              width={25}
              height={25}
            />
          </Button>
        </div>
      </div>
    </div>
  );
}
