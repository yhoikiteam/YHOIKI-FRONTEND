"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import Button from "./Button";
import Search from "./Search";

export default function Navbar() {
  const pathname: string = usePathname();
  interface subMenu {
    label: string;
    path: string;
  }
  const sub: subMenu[] = [
    { label: "Home", path: "/" },
    { label: "Service", path: "/service" },
    { label: "Course", path: "/course" },
    { label: "Programs", path: "/programs" },
  ];
  return (
    <div className="sticky inset-x-0 top-0 z-50">
      <nav className="relative w-full flex items-center justify-between px-8 py-4 border-b shadow-xl bg-white">
        <Link href="/" id="logo" className="flex space-x-3 items-center">
          <img className="w-7" src="https://i.ibb.co.com/0DhSzYN/Yhoiki.png" alt="logo" />
          <h1 className="text-gray-700 font-bold text-xl">Yhoiki</h1>
        </Link>
        <div id="sub" className="list-none text-gray-600 flex space-x-10">
          {sub.map((item, index) => (
            <li key={index}>
              <Link
                href={item.path}
                className={`font-medium duration-300 bg-gradient-to-r from-color1 to-color2 bg-clip-text hover:text-transparent ${
                  pathname === item.path ? "text-transparent" : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </div>
        <div id="auth" className="flex items-center space-x-3">
          <Search />
          <div id="bahasa">
            <button className="font-semibold mx-5 text-gray-600">ENG</button>
          </div>
          <Link
            href="/login"
            className="bg-gray-200 py-2 px-4 rounded-full text-gray-500 hover:bg-gray-300 duration-300"
          >
            Login
          </Link>
          <Button id="Register" text="Register" url="/register" customcss="px-6" />
        </div>
      </nav>
    </div>
  );
}
