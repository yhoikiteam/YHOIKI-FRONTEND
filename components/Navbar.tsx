"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./Button";
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
      <nav className="relative flex w-full items-center justify-between border-b bg-white px-8 py-4 shadow-xl">
        <Link href="/" id="logo" className="flex items-center space-x-3">
          <img
            className="w-7"
            src="https://i.ibb.co.com/0DhSzYN/Yhoiki.png"
            alt="logo"
          />
          <h1 className="text-xl font-bold text-gray-700">Yhoiki</h1>
        </Link>
        <div id="sub" className="flex list-none space-x-10 text-gray-600">
          {sub.map((item, index) => (
            <li key={index}>
              <Link
                href={item.path}
                className={`bg-gradient-to-r from-color1 to-color2 bg-clip-text font-medium duration-300 hover:text-transparent ${
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
            <button className="mx-5 font-semibold text-gray-600">ENG</button>
          </div>
          <Button>
            <Link href="/login">Login</Link>
          </Button>
          <Button>
            <Link href="/register">Register</Link>
          </Button>
        </div>
      </nav>
    </div>
  );
}
