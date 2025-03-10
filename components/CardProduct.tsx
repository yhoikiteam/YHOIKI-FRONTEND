import React from "react";
import { MdStar } from "react-icons/md";
import Image from "next/image";
import { Button } from "./Button";

export default function CardProduct() {
  return (
    <div className="relative overflow-hidden rounded-2xl border-4">
      <Button className="absolute left-2 top-2 rounded-md px-2 pl-3">
        Populer <MdStar />
      </Button>
      <div className="aspect-[6/4] w-full overflow-hidden">
        <Image
          src="https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs2/133905130/original/8890162afafa9b9263900a2657628878223786f5.jpg"
          alt="card-product"
          width={300}
          height={100}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="px-4 py-2">
        <p className="line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          hic.
        </p>
        <div className="mt-2 flex items-center justify-between">
          <p>IDR 500.000</p>
          <Button className="rounded-md">Order</Button>
        </div>
      </div>
    </div>
  );
}
