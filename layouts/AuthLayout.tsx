import React, { ReactNode } from "react";
import Image from "next/image";
import Logo from "@/components/Logo";

interface IProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: IProps) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center px-8 py-10 md:bg-gray-200 lg:px-0">
      {/* Form Mobile */}
      {/* <div className="mx-auto inline-flex w-full max-w-md flex-col items-center justify-center gap-4 md:hidden">
        <img
          className="w-10"
          src="https://i.ibb.co.com/0DhSzYN/Yhoiki.png"
          alt="logo"
        />
        {children}
      </div> */}

      {/* Form Desktop */}
      <div className="w-full max-w-3xl">
        <div className="relative mx-auto flex min-h-[400px] w-full overflow-hidden rounded-3xl bg-light md:border md:border-light-gray md:shadow-2xl">
          {/* Bagian Gambar */}
          <div className="relative hidden flex-1 overflow-hidden md:block">
            <div className="absolute inset-0 bg-dark opacity-20"></div>
            <div className="absolute bottom-4 left-4">
              <Logo textColor="text-light" />
            </div>
            <Image
              src="/images/Hero.png"
              alt="Hero Image"
              width={1000}
              height={1000}
              className="h-full w-full object-cover object-left"
              priority
            />
          </div>

          {/* Form Login */}
          <div className="mx-auto flex w-full max-w-md flex-col items-center justify-center gap-4 md:w-1/2 md:p-8">
            <img
              className="w-10 md:hidden"
              src="https://i.ibb.co.com/0DhSzYN/Yhoiki.png"
              alt="logo"
            />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
