"use client";

import { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  if (!isOpen)
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="relative inline-flex items-center justify-center rounded-md xl:hidden"
      >
        <BiMenu className="h-8 w-8" aria-hidden="true" />
      </button>
    );

  return (
    <div className="fixed inset-0 z-50 flex overflow-y-scroll overscroll-y-none">
      <div className="w-full">
        <div className="relative flex h-full w-full flex-col overflow-y-auto bg-light pb-12 shadow-xl">
          <div className="flex justify-end px-6 pb-2 pt-6 md:px-8">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="relative inline-flex items-center justify-center rounded-md xl:hidden"
            >
              <RxCross2 className="h-8 w-8" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-8 flex flex-col px-8">
            <Link
              href="/products"
              className="flex flex-1 items-center justify-between py-4 text-left text-sm font-medium"
            >
              Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
