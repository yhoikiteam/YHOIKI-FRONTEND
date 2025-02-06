import * as React from "react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" id="logo" className="flex items-center space-x-3">
      <img
        className="w-7"
        src="https://i.ibb.co.com/0DhSzYN/Yhoiki.png"
        alt="logo"
      />
      <h1 className="text-xl font-bold text-gray-700">Yhoiki</h1>
    </Link>
  );
}
