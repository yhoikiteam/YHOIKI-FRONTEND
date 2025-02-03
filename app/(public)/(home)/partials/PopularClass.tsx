"use client";

import { useState } from "react";
import {
  CardGraphicDesign,
  CardPopular,
  CardPrograming,
} from "@/app/(public)/(home)/partials/CardFilters";
import { ButtonFilter } from "@/components/Button";
import Search from "@/components/Search";
import { buttonData } from "@/constants/data-dev/filtersProduct";

export default function PopularClass() {
  const [activeFilter, setActiveFilter] = useState("ButtonsA");

  return (
    <div className="h-screen bg-white pb-10 pl-6">
      {/* Header */}
      <div className="grid grid-cols-1 grid-rows-[auto_1fr] gap-4 md:grid-cols-12">
        <div className="row-start-1 flex items-center justify-between p-4 md:col-span-12">
          <div>
            <h2 className="mb-4 text-4xl font-bold text-[#535753]">
              <span className="bg-gradient-to-r from-[#75C57E] to-[#34A853] bg-clip-text text-transparent">
                Popular
              </span>{" "}
              And{" "}
              <span className="border border-dashed border-gray-300 bg-gradient-to-r from-[#75C57E] to-[#34A853] bg-clip-text p-0.5 text-transparent">
                Newest
              </span>{" "}
              Class
            </h2>
            <p className="font-semibold text-[#535753]">
              Look for the products you need here and see competitive prices
            </p>
          </div>
          <Search />
        </div>

        {/* Sidebar Filter */}
        <div className="p-4 transition-all duration-500 ease-in-out md:col-span-3">
          {buttonData.map((btn) => (
            <ButtonFilter
              key={btn.id}
              id={btn.id}
              text={btn.text}
              icons={btn.icon}
              customcss="my-custom-class"
              onClick={() => setActiveFilter(btn.id)}
              isActive={activeFilter === btn.id}
            />
          ))}
        </div>

        {/* Konten Produk */}
        <div className="col-span-full overflow-x-auto whitespace-nowrap md:col-span-9">
          {activeFilter === "ButtonsB" ? (
            <CardPrograming />
          ) : activeFilter === "ButtonsA" ? (
            <CardPopular />
          ) : activeFilter === "ButtonsC" ? (
            <CardGraphicDesign />
          ) : (
            <div className="text-red-600">Content tidak di temukan</div>
          )}
        </div>
      </div>
    </div>
  );
}
