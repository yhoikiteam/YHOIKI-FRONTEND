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
    <div className="inline-block w-full overflow-hidden rounded-2xl border-2 border-gray-200 shadow-[0px_5px_6px_-1px_rgba(0,0,0,0.1)]">
      {/* Hero Image */}
      <div className="relative flex aspect-video items-center justify-center">
        <Image
          src={badgeSrc}
          alt={name}
          width={700}
          height={700}
          className="h-full w-full object-cover"
        />
      </div>
      {/* Card Content */}
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={imageSrc}
              alt="Badge"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-sm font-bold text-davy-gray">{name}</span>
          </div>

          {/* Rating */}
          <span className="flex items-center gap-1 rounded-full bg-primary-gradient px-4 py-[0.2rem] text-xs text-white md:px-2">
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
        <div className="relative w-full pb-4 pt-2">
          <p className="text-ellipsis whitespace-normal text-sm font-medium leading-5 text-davy-gray">
            {description}
          </p>
        </div>

        {/* Rating and reviews */}
        <div className="mt-2 flex items-center text-gray-500">
          <span className="mr-2 flex items-center text-sm">
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
