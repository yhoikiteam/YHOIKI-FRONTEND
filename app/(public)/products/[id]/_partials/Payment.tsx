"use client";

import { BsCart2 } from "react-icons/bs";
import { FaCheck, FaRegClock } from "react-icons/fa";
import { Button } from "@/components/Button";

export default function Payment() {
  return (
    <div className="sticky top-36">
      <div className="w-full overflow-hidden rounded-xl border-2">
        <div className="grid w-full grid-cols-3 overflow-hidden border-b-2">
          <Button className="h-12 rounded-none text-xl">Basic</Button>
          <Button className="h-12 rounded-none text-xl">Standard</Button>
          <Button className="h-12 rounded-none text-xl">Premium</Button>
        </div>
        <div>
          <div className="p-4">
            <p>
              🚀 Desain situs web Beranda + 5 Halaman Dalam di Figma (desktop +
              seluler) | lebih banyak halaman? Mari kita bicarakan 👇
            </p>

            <div className="my-4">
              <span className="flex items-center gap-2 text-sm">
                <FaRegClock /> 5-day delivery
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-davy-gray">
                <FaCheck /> 3 Page
              </div>
              <div className="flex items-center gap-2 text-sm text-davy-gray">
                <FaCheck /> Responsive design
              </div>
              <div className="flex items-center gap-2 text-sm text-davy-gray">
                <FaCheck /> Source file
              </div>
            </div>

            <div className="mt-4 flex flex-col">
              <span className="text-xl font-bold">Rp. 430.000</span>
              <span className="text-sm text-davy-gray">
                Save up to 5% with Subscribe to Save
              </span>
            </div>
          </div>
        </div>
      </div>
      <Button className="mt-4 h-12 w-full rounded-xl text-base [&_svg]:size-5">
        <BsCart2 /> Continue
      </Button>
    </div>
  );
}
