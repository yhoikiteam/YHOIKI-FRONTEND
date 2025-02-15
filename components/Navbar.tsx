"use client";

import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./Button";
import Logo from "./Logo";
import Search from "./Search";

interface subMenu {
  label: string;
  path: string;
}

export const sub: subMenu[] = [
  { label: "Home", path: "/" },
  { label: "Freelance", path: "/freelance" },
  { label: "Course", path: "/course" },
  { label: "Programs", path: "/programs" },
];

export default function Navbar({ state }: any) {
  const { setIsOpen, isOpen, setIsOpenSearch, isOpenSearch } = state;
  const pathname: string = usePathname();

  return (
    <div className="sticky inset-x-0 top-0 z-50 w-full bg-light shadow-xl">
      <nav className="relative flex h-20 w-full items-center justify-between gap-6 border-b px-4 md:px-8">
        {/* Kiri: Logo & Menu */}
        <div className="flex items-center gap-10">
          <Logo />
          <ul className="hidden list-none space-x-8 text-gray-600 xl:flex">
            {sub.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  className={`bg-primary-gradient bg-clip-text text-sm font-medium duration-300 hover:text-transparent ${
                    pathname === item.path && "text-transparent"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kanan: Search & Auth */}
        <div className="flex flex-1 items-center justify-end gap-6">
          <div className="hidden w-fit md:block md:w-full md:max-w-xs md:flex-1">
            <Search />
          </div>
          <div
            onClick={() => setIsOpenSearch(!isOpenSearch)}
            className="w-fit cursor-pointer md:hidden"
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.1667 14.1667L11.194 11.194M11.194 11.194C12.1554 10.2326 12.75 8.90451 12.75 7.4375C12.75 4.50349 10.3715 2.125 7.4375 2.125C4.50349 2.125 2.125 4.50349 2.125 7.4375C2.125 10.3715 4.50349 12.75 7.4375 12.75C8.90451 12.75 10.2326 12.1554 11.194 11.194Z"
                stroke="#A8A8A8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <button className="text-sm font-semibold text-gray-600">ENG</button>

          <div className="hidden space-x-4 xl:flex">
            <Button variant="outline" className="shadow-none">
              <Link href="/login">Login</Link>
            </Button>
            <Button>
              <Link href="/register">Register</Link>
            </Button>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="relative inline-flex items-center justify-center rounded-md xl:hidden"
        >
          {isOpen ? (
            <RxCross2 size={30} className="text-davy-gray" aria-hidden="true" />
          ) : (
            <IoMenu size={30} className="text-davy-gray" aria-hidden="true" />
          )}
        </button>

        {/* <MobileNav setIsOpen={setIsOpen} isOpen={isOpen} /> */}
      </nav>
    </div>
  );
}
