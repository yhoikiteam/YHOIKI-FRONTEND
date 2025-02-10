import React, { ReactNode } from "react";
import Image from "next/image";
import Logo from "@/components/Logo";

interface IProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: IProps) {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gainsboro">
      <div className="relative mx-auto flex h-[429px] w-full max-w-3xl overflow-hidden rounded-3xl border border-light-gray bg-light shadow-xl">
        {/* Logo X di pojok kanan atas
        <div className="text-4xl">
        <button
          type="button"
          className="absolute right-4 top-4 text-gray-600"
          onClick={() => router.push("/")} // Tombol close akan mengarahkan ke halaman utama
        >
          &times;
        </button>
      </div> */}

        {/* Bagian Gambar */}
        <div className="relative h-full w-1/2 overflow-hidden">
          <div className="absolute inset-0 z-20 bg-dark opacity-20"></div>
          <div className="absolute bottom-4 left-4 z-20">
            <Logo textColor="text-light" />
          </div>
          <Image
            src="/images/Hero.png"
            alt="Hero Image"
            width={1000}
            height={1000}
            className="z-10 h-full w-full object-cover object-left"
          />
        </div>
        {/* Form Login */}
        <div className="flex w-1/2 flex-col items-center justify-center space-y-6 p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
