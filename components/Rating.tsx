import React from "react";
import { cn } from "@/utils/cn";
import { formatNumber } from "@/utils/formatNumber";

export default function Rating() {
  const ratings = [100, 0, 10, 3, 50]; // Bintang 5 - 1
  const totalRatings = ratings.reduce((acc, val) => acc + val, 0); // Total semua rating

  const percentages = ratings.map((rate) => ({
    rate,
    persen: totalRatings > 0 ? (rate / totalRatings) * 100 : 0,
  }));

  const ratingAll =
    totalRatings > 0
      ? (ratings[0] * 5 +
          ratings[1] * 4 +
          ratings[2] * 3 +
          ratings[3] * 2 +
          ratings[4] * 1) /
        totalRatings
      : 0;

  const resultRatingAll = ratingAll === 0 ? "0.0" : ratingAll.toFixed(1); // Pastikan bukan null

  // console.log((2.0 / 5) * 100);

  return (
    <>
      <h1 className="mb-2 text-2xl font-bold text-davy-gray">Reviews</h1>
      <p className="mb-4 font-bold text-davy-gray">
        {formatNumber(totalRatings)} reviews for this Seller
      </p>

      <div className="flex items-center gap-4">
        <p className="text-4xl font-bold text-davy-gray">{resultRatingAll}</p>
        <div className="relative h-8 min-w-40 overflow-hidden">
          <div
            className={cn(
              "absolute left-0 z-20 flex items-center overflow-hidden [&_svg]:size-8",
            )}
            style={{
              width: `${(Number(resultRatingAll || "0") / 5) * 100}%`,
            }}
          >
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
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
          </div>
          <div className="absolute left-0 z-10 flex items-center [&_svg]:size-8">
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
                  stroke="#e5e7eb"
                  strokeWidth="8.3077"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Bars */}
      <div className="mt-4 flex w-full max-w-md flex-col gap-2">
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
