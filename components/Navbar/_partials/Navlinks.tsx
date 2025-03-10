"use client";

import React, { Fragment, useEffect, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/constants/navLinks";
import { cn } from "@/utils/cn";

const Navlinks = () => {
  const [dropdownState, setDropdownState] = useState<Record<number, boolean>>(
    {},
  ); // { 1: true or false, ... }

  // Ref untuk mendeteksi klik di luar dropdown
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setDropdownState({});
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (index: number) => {
    setDropdownState((prev) => ({
      ...Object.fromEntries(Object.keys(prev).map((key) => [key, false])), // Tutup semua dropdown lainnya or false
      [index]: !prev[index], // true
    }));
  };

  return (
    <div
      ref={navRef}
      className="mx-auto hidden w-full items-center justify-center gap-4 lg:flex"
    >
      {navLinks.map((item, i) => (
        <Fragment key={i}>
          {item.items ? (
            <div className="relative z-50">
              <button
                className="flex cursor-pointer items-center text-base font-bold text-davy-gray hover:text-primary-two [&_svg]:size-6"
                onClick={() => toggleDropdown(i)}
              >
                <span>{item.label}</span>
                <BiChevronDown
                  className={cn(
                    dropdownState[i] && "rotate-180 transition-all",
                  )}
                />
              </button>
              <AnimatePresence>
                {dropdownState[i] && (
                  <motion.div
                    className="absolute right-0 z-50 mt-2 w-72 rounded-md border bg-background py-2 shadow-lg"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.items.map((v, index) => (
                      <Link
                        key={index}
                        href={v.href}
                        className="block bg-background px-4 py-2 text-base text-davy-gray hover:bg-gray-100"
                      >
                        <h3 className="mb-0.5 font-semibold">{v.label}</h3>
                        <p className="text-sm">{v.description}</p>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <Link
              href={item.href!}
              className="mr-4 font-bold text-davy-gray hover:text-primary-two"
            >
              {item.label}
            </Link>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default Navlinks;
