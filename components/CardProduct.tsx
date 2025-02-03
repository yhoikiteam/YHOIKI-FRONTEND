import Image from "next/image";
import Button from "./Button";

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
  id,
  imageSrc,
  badgeSrc,
  name,
  price,
  rating,
  reviews,
  description,
}: CardProps) {
  return (
    <div className="mx-4 inline-block min-w-[300px] max-w-sm overflow-hidden rounded-2xl border-2 border-gray-200">
      {/* Hero Image */}
      <div className="relative flex h-44 items-center justify-center">
        <Image
          src={badgeSrc}
          alt={name}
          width={600}
          height={600}
          className="h-full w-full object-fill"
        />
      </div>
      {/* Card Content */}
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src={imageSrc}
              alt="Badge"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-sm font-semibold text-gray-800">{name}</span>
          </div>

          {/* Rating */}
          <span className="flex items-center gap-1 rounded-full bg-gradient-to-r from-color1 to-color2 px-4 py-[0.2rem] text-xs text-white md:px-2">
            <p className="text-xs">Top Rate</p>
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
        <div className="relative w-full md:w-[200px]">
          {" "}
          <p className="max-h-[3rem] overflow-hidden text-ellipsis whitespace-normal pb-20 text-sm leading-5 text-gray-500">
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
        <div className="mt-4 flex items-center justify-between gap-4">
          <Button
            id={`product-${price}-price`}
            url="#"
            text={`From $${price}`}
            customcss="w-full py-2 md:py-1 bg-gradient-to-r from-color1 to-color2 rounded-full hover:from-color2 hover:to-color2 duration-300 text-sm font-bold"
          />

          <button className="rounded-full bg-[#D9D9D9] px-2 py-2 text-lg text-white hover:bg-gray-600">
            <Image
              src="/icon/Cart 4.svg"
              alt="Cart Icon"
              width={25}
              height={25}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
