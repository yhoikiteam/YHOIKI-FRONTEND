import React from "react";

interface IProps {
  label: string;
  description: string;
}

export default function HeadingCategorySection({ label, description }: IProps) {
  return (
    <div className="flex items-start justify-between py-4">
      <div className="mb-4">
        <h2 className="mb-4 text-4xl font-bold text-davy-gray">
          <span className="bg-primary-gradient bg-clip-text text-transparent">
            Popular
          </span>{" "}
          And{" "}
          <span className="border border-dashed border-gray-300 bg-primary-gradient bg-clip-text p-0.5 text-transparent">
            Newest
          </span>{" "}
          {label}
        </h2>
        <p className="font-semibold text-davy-gray">{description}</p>
      </div>
    </div>
  );
}
