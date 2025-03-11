"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { BiMenu, BiSearch, BiX } from "react-icons/bi";
import { MdLanguage } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/constants/navLinks";
import { cn } from "@/utils/cn";
import { AccordionItem } from "../Accordion";
import { Button, buttonVariants } from "../Button";
import Logo from "../Logo";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Search from "../Search";
import Language from "./_partials/Language";
import Navlinks from "./_partials/Navlinks";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);

  // Focus the input when search opens
  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Handle escape key to close search, menu, and explore
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isSearchOpen) setIsSearchOpen(false);
        if (isMenuOpen) setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, [isSearchOpen, isMenuOpen, isLanguageOpen]);

  // jika user mengklik selain Language Button maka close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageRef.current &&
        !languageRef.current.contains(event.target as Node)
      ) {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // jika search atau hamburger active maka body akan overflow hidden
  useEffect(() => {
    if (isSearchOpen || isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSearchOpen, isMenuOpen]);

  return (
    <div className="relative z-50 flex flex-col bg-background">
      <header className="bg-background/80 w-full backdrop-blur-sm">
        <MaxWidthWrapper className="flex h-[4.5rem] w-full items-center justify-between gap-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Navlinks */}
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Navlinks />
          </div>

          <div className="flex w-full max-w-2xl items-center justify-end gap-4">
            {/* search */}
            <div className="hidden w-full max-w-sm md:block lg:hidden xl:block">
              <Search />
            </div>

            {/* icon search */}
            <motion.div
              className="relative flex items-center sm:flex md:hidden lg:flex xl:hidden"
              animate={{ width: isSearchOpen ? "100%" : "40px" }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <AnimatePresence initial={false}>
                {isSearchOpen ? (
                  <motion.button
                    className="absolute right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-gray-200"
                    onClick={() => {
                      setQuery("");
                      setIsSearchOpen(false);
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <BiX className="h-4 w-4" />
                  </motion.button>
                ) : (
                  <motion.button
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-gray-200"
                    onClick={() => setIsSearchOpen(true)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <BiSearch className="h-4 w-4" />
                  </motion.button>
                )}
              </AnimatePresence>
            </motion.div>

            {/* icon menu */}
            <button
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-gray-200 lg:hidden"
              onClick={() => setIsMenuOpen(true)}
            >
              <BiMenu className="h-4 w-4" />
            </button>

            {/* language */}
            <div className="relative hidden lg:block" ref={languageRef}>
              <Language
                state={{
                  isState: isLanguageOpen,
                  setIsState: setIsLanguageOpen,
                }}
              />
            </div>

            {/* login and register */}
            <div className="hidden items-center lg:flex">
              <div className="flex items-center gap-4">
                <Link
                  href="/login"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "font-semibold shadow-none",
                  )}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "font-semibold shadow-none",
                  )}
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>

      {/* jika search and menu active in mobile */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex items-start justify-center bg-white bg-opacity-95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative mx-auto w-full max-w-xl px-4 pt-24">
              <motion.div
                className="relative flex items-center"
                initial={{ width: "40px", height: "40px" }}
                animate={{ width: "100%", height: "40px" }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search apple.com"
                  className="h-10 w-full rounded-full border-none bg-gray-100 pl-10 pr-10 text-sm outline-none ring-gray-200 transition-all focus:ring-2"
                />
                <motion.button
                  className="absolute left-3 flex h-5 w-5 items-center justify-center text-gray-500"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <BiSearch className="h-4 w-4" />
                </motion.button>
                {query && (
                  <motion.button
                    className="absolute right-3 flex h-5 w-5 items-center justify-center text-gray-500"
                    onClick={() => setQuery("")}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <BiX className="h-4 w-4" />
                  </motion.button>
                )}
              </motion.div>

              {query && (
                <motion.div
                  className="mt-6 rounded-lg bg-white p-4 shadow-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <p className="text-sm text-gray-500">
                    No results found for &quot;{query}&quot;
                  </p>
                </motion.div>
              )}
            </div>
            <button
              className="absolute right-1/2 top-4 flex h-10 w-10 translate-x-1/2 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-gray-200"
              onClick={() => setIsSearchOpen(false)}
            >
              <BiX className="h-5 w-5" />
            </button>
          </motion.div>
        )}

        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-start justify-end overflow-hidden bg-white bg-opacity-95 backdrop-blur-sm"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex h-full w-80 flex-col bg-white p-6 shadow-lg">
              <div className="flex justify-end">
                <button
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <BiX className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-8 space-y-4">
                <Button className="h-10 w-full shadow-none" variant="outline">
                  Login
                </Button>
                <Button className="h-10 w-full">Register</Button>
              </div>

              {/* <div className="mb-4 mt-8 h-[0.5px] w-full bg-davy-gray opacity-30"></div> */}

              {/* Tambahkan flex-grow untuk memastikan navigasi bisa menggunakan sisa space */}
              <nav className="mt-4 max-h-screen flex-grow overflow-y-auto">
                {/* <div className="mb-4 mt-8 px-4 font-bold text-davy-gray">
                  General
                </div> */}

                <div className="h-fit w-full">
                  {navLinks.map((item, i) => (
                    <Fragment key={i}>
                      {item.items ? (
                        <AccordionItem key={i} title={item.label}>
                          {item.items.map((subItem, i) => (
                            <div
                              key={i}
                              className="flex h-12 w-full cursor-pointer items-center gap-1 rounded-md border-none px-4 text-base text-davy-gray shadow-none hover:bg-gray-100"
                            >
                              {subItem.label}
                            </div>
                          ))}
                        </AccordionItem>
                      ) : (
                        <Button
                          variant="outline"
                          size="lg"
                          className="h-12 w-full justify-between gap-1 rounded-md border-none px-4 text-base font-medium text-davy-gray shadow-none hover:bg-gray-100 [&_svg]:size-6"
                        >
                          {item.label}
                        </Button>
                      )}
                    </Fragment>
                  ))}

                  <AccordionItem
                    title={
                      <div className="flex items-center gap-1">
                        English <MdLanguage size={20} />
                      </div>
                    }
                  >
                    <div className="flex h-12 min-w-max cursor-pointer items-center gap-1 rounded-md bg-background px-4 py-2 text-base text-davy-gray hover:bg-gray-100">
                      <Image
                        src="/images/english-flag.jpg"
                        alt="eng"
                        width={100}
                        height={100}
                        className="aspect-square w-5 flex-shrink-0 rounded-full border border-primary-two object-cover"
                      />
                      <h3 className="font-medium">English</h3>
                    </div>
                    <div className="flex h-12 min-w-max cursor-pointer items-center gap-1 rounded-md bg-background px-4 py-2 text-base text-davy-gray hover:bg-gray-100">
                      <Image
                        src="/images/indonesia-flag.png"
                        alt="eng"
                        width={100}
                        height={100}
                        className="aspect-square w-5 flex-shrink-0 rounded-full border border-primary-two object-cover"
                      />
                      <h3 className="font-medium">Indonesia</h3>
                    </div>
                  </AccordionItem>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
