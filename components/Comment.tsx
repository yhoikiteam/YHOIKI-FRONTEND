import React from "react";
import Image from "next/image";

export default function Comment() {
  return (
    <div className="w-full rounded-2xl border px-6 py-4">
      <div className="flex items-center gap-4 border-b pb-4">
        <div className="aspect-square w-14 flex-shrink-0 overflow-hidden rounded-full border border-primary-two">
          <Image
            src="/images/no-pictures.png"
            alt="profiel"
            width={50}
            height={50}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="font-semibold">Joko Santoso</p>
          <p className="text-sm text-davy-gray">Bandung</p>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center [&_svg]:size-4">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.9228 6.23047C24.9228 16.554 33.2916 24.9228 43.6151 24.9228C33.2916 24.9228 24.9228 33.2916 24.9228 43.6151C24.9228 33.2916 16.554 24.9228 6.23047 24.9228C16.554 24.9228 24.9228 16.554 24.9228 6.23047Z"
                  stroke="#75c57e"
                  strokeWidth="8.3077"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ))}
            <span className="ml-2 font-semibold text-davy-gray">5</span>
          </div>
          <div className="flex items-center justify-center">
            <div className="aspect-square w-1 rounded-full bg-gainsboro"></div>
          </div>
          <p className="text-sm font-semibold text-davy-gray">3 weeks ago</p>
        </div>
        <p className="my-4 text-davy-gray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint tenetur
          perspiciatis reiciendis numquam obcaecati, eveniet non ea repellendus
          nam, fuga animi nulla officia. Tempore debitis, placeat soluta
          corporis est quisquam iure reprehenderit porro beatae dicta sint
          repellat eaque earum ipsam. Recusandae cum velit aut, earum temporibus
          assumenda voluptates inventore eos, neque incidunt, veritatis
          quibusdam cumque impedit eveniet.
        </p>
        <div className="flex max-w-md cursor-pointer items-center overflow-hidden rounded-md bg-gray-200">
          <div className="aspect-square w-16 flex-shrink-0 overflow-hidden p-2">
            <Image
              src="/images/product.png"
              alt="profiel"
              width={50}
              height={50}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-2">
            <p className="text-sm font-medium text-davy-gray">
              I will vectorize image, redraw logo, convert to vector, or sketch
              to vector
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
