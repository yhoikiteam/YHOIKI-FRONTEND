"use client";

import Image from "next/image";
import { Product } from "@/constants/data-dev/products";
import { Button } from "./Button";

export default function Card({ data }: { data: Product }) {
  return (
    <div className="inline-block w-full overflow-hidden rounded-2xl border-2 border-gray-200 shadow-md">
      {/* Hero Image */}
      <div className="relative">
        <div className="aspect-[6/4] w-full cursor-pointer">
          <div className="flex">
            {data.thumbnails && (
              <Image
                src={data.thumbnails[0]}
                alt={data.name}
                width={700}
                height={700}
                className="rounded-xl object-cover"
              />
            )}
          </div>
        </div>
      </div>
      {/* Card Content */}
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="group flex cursor-pointer items-center gap-3">
            <Image
              src={data.userProfile && data.userProfile}
              alt="user"
              width={32}
              height={32}
              className="rounded-full border border-primary-two"
            />
            <span className="text-sm font-bold group-hover:underline">
              {data.name}
            </span>
          </div>

          {/* Rating */}
          {/* <span className="flex items-center gap-1 rounded-full bg-primary-gradient px-4 py-[0.2rem] text-xs text-white md:px-2">
            <p className="whitespace-nowrap text-xs">Top Rate</p>
            {[...Array(3)].map((_, index) => (
              <svg
                key={index}
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 1C4 2.65685 5.34315 4 7 4C5.34315 4 4 5.34315 4 7C4 5.34315 2.65685 4 1 4C2.65685 4 4 2.65685 4 1Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ))}
          </span> */}
        </div>

        {/* Description */}
        <div className="relative w-full cursor-pointer py-2">
          <p className="line-clamp-2 text-ellipsis text-davy-gray hover:underline">
            {data.description}
          </p>
        </div>

        {/* Rating and reviews */}
        <div className="mt-1 flex items-center">
          <span className="text-md mr-2 flex items-center text-sm">
            <svg
              width="20"
              height="20"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.03038 2.60742C7.03038 5.4223 9.31229 7.70421 12.1272 7.70421C9.31229 7.70421 7.03038 9.98612 7.03038 12.801C7.03038 9.98612 4.74847 7.70421 1.93359 7.70421C4.74847 7.70421 7.03038 5.4223 7.03038 2.60742Z"
                fill="black"
                fillOpacity="0.15"
              />
              <path
                d="M7.03038 2.60742C7.03038 5.4223 9.31229 7.70421 12.1272 7.70421C9.31229 7.70421 7.03038 9.98612 7.03038 12.801C7.03038 9.98612 4.74847 7.70421 1.93359 7.70421C4.74847 7.70421 7.03038 5.4223 7.03038 2.60742Z"
                stroke="url(#paint0_linear_1624_3205)"
                strokeWidth="1.94163"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1624_3205"
                  x1="7.03038"
                  y1="2.60742"
                  x2="7.03038"
                  y2="12.801"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#75C57E" />
                  <stop offset="1" stopColor="#34A853" />
                </linearGradient>
              </defs>
            </svg>

            <div className="ml-1 font-bold">{data.rating.toFixed(1)}</div>
          </span>
          <span className="text-sm text-davy-gray">
            ({data.reviews} reviews)
          </span>
        </div>

        {/* Add to keranjang */}
        <div className="mt-3 flex items-center justify-between gap-4">
          <Button className="w-full">From {data.price}</Button>
          <Button
            size="icon"
            className="flex-shrink-0 bg-gainsboro [&_svg]:size-5"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 3H4.5L4.78571 5M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM17 17H9M9 17C7.89543 17 7 17.8954 7 19C7 20.1046 7.89543 21 9 21C10.1046 21 11 20.1046 11 19C11 17.8954 10.1046 17 9 17ZM9 17H6.5L6.07143 14M6.07143 14H18L21 5H4.78571M6.07143 14L4.78571 5"
                stroke="#34a853"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}
