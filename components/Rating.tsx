import React from "react";
import { cn } from "@/utils/cn";

export default function Rating() {
  const total = 500;
  const ratings = [400, 50, 20, 20, 10]; // Menggunakan array untuk menyimpan nilai rating
  const percentages = ratings.map((rate) => ({
    rate,
    persen: (rate / total) * 100,
  }));

  return (
    <>
      <h1 className="mb-4 text-xl font-semibold">Reviews</h1>

      {/* Progress Bars */}
      <div className="flex w-full max-w-md flex-col gap-2">
        {percentages.map((value, index) => (
          <div key={index} className="grid grid-cols-10 items-center gap-4">
            <div className="col-span-1 flex items-center justify-between gap-1 font-medium text-davy-gray [&_svg]:size-4 [&_svg]:flex-shrink-0">
              <span>{5 - index}</span>
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.9228 6.23047C24.9228 16.554 33.2916 24.9228 43.6151 24.9228C33.2916 24.9228 24.9228 33.2916 24.9228 43.6151C24.9228 33.2916 16.554 24.9228 6.23047 24.9228C16.554 24.9228 24.9228 16.554 24.9228 6.23047Z"
                  stroke="#2F984B"
                  strokeWidth="8.3077"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="col-span-7 h-4 w-full overflow-hidden rounded-full border bg-gray-200">
              <div
                className={cn("h-full rounded-full bg-primary-one")}
                style={{ width: `${value.persen}%` }}
              ></div>
            </div>
            <span className="col-span-2 font-medium text-davy-gray">
              ({value.rate})
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
