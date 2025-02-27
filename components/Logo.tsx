import * as React from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";

interface IProps {
  textColor?: string;
}

export default function Logo({ textColor = "text-davy-gray" }: IProps) {
  return (
    <Link href="/" id="logo" className="flex items-center space-x-2">
      <img
        className="w-6"
        src="https://i.ibb.co.com/0DhSzYN/Yhoiki.png"
        alt="logo"
      />
      <h1 className={cn("text-2xl font-bold", textColor)}>Yhoiki</h1>
    </Link>
  );
}
