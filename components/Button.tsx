"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps {
  id: string;
  url: string;
  text: string;
  customcss: string;
}

interface ButtonFilterProps {
  id: string;
  onClick: (id: string) => void;
  text: string;
  customcss?: string;
  icons?: React.ReactNode;
  isActive?: boolean;
}

export default function Button({ id, url, text, customcss }: ButtonProps) {
  return (
    <button
      id={id}
      className={`rounded-full bg-gradient-to-r from-color1 to-color2 px-4 py-2 duration-300 hover:from-color2 hover:to-color2 ${customcss}`}
    >
      <Link href={url}>
        <h1 className="text-white">{text}</h1>
      </Link>
    </button>
  );
}

export const ButtonFilter: React.FC<ButtonFilterProps> = ({
  id,
  text,
  icons,
  customcss,
  onClick,
  isActive,
}) => {
  return (
    <button
      onClick={() => onClick(id)}
      id={id}
      className={`mb-2 h-12 w-full rounded-full p-[2px] text-left font-semibold ${
        isActive ? "bg-gradient-to-r from-[#75C57E] to-[#34A853]" : ""
      } ${customcss}`}
    >
      <div className="flex h-full w-full items-center rounded-full bg-[#E6E6E6] px-3 text-start text-[#535753]">
        <div className="flex items-center gap-3">
          <div>{icons}</div>
          <p>{text}</p>
        </div>
      </div>
    </button>
  );
};
