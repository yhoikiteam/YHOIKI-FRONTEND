"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { buttonVariants } from "@/components/Button";
import Footer from "@/components/Footer";
import Navbar, { sub } from "@/components/Navbar";
import Search from "@/components/Search";
import { cn } from "@/utils/cn";

const recomendedSearch = [
  {
    label: "Freelance",
    img: "/svg/freelance.svg",
  },
  {
    label: "Course",
    img: "/svg/course.svg",
  },
  {
    label: "Programs",
    img: "/svg/program.svg",
  },
  {
    label: "Products",
    img: "/svg/product.svg",
  },
];

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isOpenSearch, setIsOpenSearch] = React.useState<boolean>(false);
  const pathname: string = usePathname();

  return (
    <>
      <Navbar state={{ setIsOpen, isOpen, setIsOpenSearch, isOpenSearch }} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ translateX: 0 }}
            animate={{ translateY: 20 }}
            exit={{ translateX: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-4 right-4 top-20 z-50 flex overflow-hidden rounded-xl border bg-black/50 shadow-sm"
          >
            <motion.div className="w-full origin-top bg-background">
              <div className="relative flex h-full w-full flex-col gap-4 p-8 pt-4 shadow-xl">
                <div className="flex flex-col">
                  {sub.map((item, i) => (
                    <Link
                      key={i}
                      href={item.path}
                      className={cn(
                        "border-b bg-primary-gradient bg-clip-text py-4 text-base font-medium text-davy-gray duration-300 hover:text-transparent",
                        { "text-transparent": pathname === item.path },
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <Link
                    href="/login"
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "h-10 rounded-lg shadow-sm",
                    )}
                  >
                    Login
                  </Link>
                  <Link
                    href="/login"
                    className={cn(buttonVariants(), "h-10 rounded-lg")}
                  >
                    Register
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpenSearch && (
          <motion.div
            initial={{ translateY: -10 }}
            animate={{ translateY: 0 }}
            exit={{ translateY: 0 }}
            transition={{ duration: 0.1 }}
            className="fixed inset-0 z-50 flex overflow-hidden border bg-black/50 shadow-sm"
          >
            <motion.div className="w-full origin-top bg-background">
              <div className="relative flex h-full w-full flex-col gap-4 p-8 pt-12 shadow-xl">
                <div className="flex items-center justify-center gap-2 sm:gap-8">
                  <div className="max-w-lg flex-1">
                    <Search />
                  </div>
                  <div
                    onClick={() => setIsOpenSearch(!isOpenSearch)}
                    className="cursor-pointer text-base font-bold text-davy-gray"
                  >
                    Cancel
                  </div>
                </div>
                <div className="mt-6">
                  <h2 className="mb-6 bg-primary-gradient bg-clip-text text-lg font-medium text-transparent">
                    Recomended
                  </h2>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {recomendedSearch.map((item, i) => (
                      <div
                        key={i}
                        className="flex w-full flex-col items-center justify-center rounded-lg border py-3 shadow-sm"
                      >
                        <Image
                          src={item.img}
                          alt="search"
                          width={100}
                          height={100}
                          className="aspect-square w-10"
                        />
                        {item.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="min-h-screen flex-1 flex-grow bg-background">
        {children}
      </div>
      <Footer />
    </>
  );
}
