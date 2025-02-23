"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import CardProduct from "@/components/CardProduct";
import { products } from "@/constants/data-dev/products";

export default function GigsSection() {
  const [visibleCount, setVisibleCount] = useState(4);
  const sliceProducts = products.slice(0, visibleCount);
  const isAllVisible = visibleCount >= products.length;

  return (
    <section className="mt-10">
      <h1 className="mb-4 text-2xl font-bold text-davy-gray">My Gigs</h1>
      <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sliceProducts.map((product) => (
          <CardProduct key={product.id} {...product} />
        ))}
      </div>

      {isAllVisible ? null : (
        <Button
          onClick={() => setVisibleCount(products.length)}
          className="mt-6 rounded-md border border-primary-one text-base text-primary-one shadow-none"
          variant="outline"
        >
          View all ({products.length})
        </Button>
      )}
    </section>
  );
}
