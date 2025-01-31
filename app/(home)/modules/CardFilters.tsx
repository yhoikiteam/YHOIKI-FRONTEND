"use client";

import { useState, useEffect } from "react";
import { products } from "@/constants/data-dev/products";
import CardProduct from "@/components/CardProduct";

// Komponen spinner dengan Tailwind
const LoadingSpinner = () => (
  <div className="text-lg font-semibold mt-4 text-gray-600">Tunggu sebentar...</div>
);

export const CardPopular = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        products.map((product) => (
          <CardProduct
            key={product.id}
            id={product.id}
            imageSrc={product.imageSrc}
            badgeSrc={product.badgeSrc}
            name={product.name}
            price={product.price}
            rating={product.rating}
            reviews={product.reviews}
            description={product.description}
          />
        ))
      )}
    </div>
  );
};

export const CardPrograming = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        products.map((product) => (
          <CardProduct
            key={product.id}
            id={product.id}
            imageSrc={product.imageSrc}
            badgeSrc={product.badgeSrc}
            name={product.name}
            price={product.price}
            rating={product.rating}
            reviews={product.reviews}
            description={product.description}
          />
        ))
      )}
    </div>
  );
};

export const CardGraphicDesign = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        products.map((product) => (
          <CardProduct
            key={product.id}
            id={product.id}
            imageSrc={product.imageSrc}
            badgeSrc={product.badgeSrc}
            name={product.name}
            price={product.price}
            rating={product.rating}
            reviews={product.reviews}
            description={product.description}
          />
        ))
      )}
    </div>
  );
};
