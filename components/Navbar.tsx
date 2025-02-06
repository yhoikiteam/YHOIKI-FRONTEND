"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./Button";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import Search from "./Search";

export default function Navbar() {
  const pathname: string = usePathname();

  interface subMenu {
    label: string;
    path: string;
  }

  const sub: subMenu[] = [
    { label: "Home", path: "/" },
    { label: "Freelance", path: "/freelance" },
    { label: "Course", path: "/course" },
    { label: "Programs", path: "/programs" },
  ];

  return (
    <div className="sticky inset-x-0 top-0 z-50 w-full overflow-hidden bg-white shadow-xl">
      <nav className="relative flex h-20 w-full items-center justify-between gap-10 border-b px-4 md:px-8">
        {/* Kiri: Logo & Menu */}
        <div className="flex items-center gap-10">
          <Logo />
          <ul className="hidden list-none space-x-8 text-gray-600 xl:flex">
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
          </ul>
        </div>

        {/* Kanan: Search & Auth */}
        <div className="flex flex-1 items-center justify-end gap-8">
          <div className="w-fit md:w-full md:max-w-sm md:flex-1">
            <Search />
          </div>
          <button className="font-semibold text-gray-600">ENG</button>
          <div className="hidden space-x-4 xl:flex">
            <Button variant="outline">
              <Link href="/login">Login</Link>
            </Button>
            <Button>
              <Link href="/register">Register</Link>
            </Button>
          </div>
        </div>

        <MobileNav />
      </nav>
    </div>
  );
}
