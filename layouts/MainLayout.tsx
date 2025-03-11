"use client";

import * as React from "react";
import CategoryBar from "@/components/CategoryBar";
import Footer from "@/components/Footer";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Navbar/Navbar";

// const recomendedSearch = [
//   {
//     label: "Freelance",
//     img: "/svg/freelance.svg",
//   },
//   {
//     label: "Course",
//     img: "/svg/course.svg",
//   },
//   {
//     label: "Programs",
//     img: "/svg/program.svg",
//   },
//   {
//     label: "Products",
//     img: "/svg/product.svg",
//   },
// ];

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="sticky left-0 right-0 top-0 z-50 w-full shadow-sm">
        <Navbar />
        <div className="relative w-full border-b border-t bg-background">
          <MaxWidthWrapper className="">
            <CategoryBar />
          </MaxWidthWrapper>
        </div>
      </div>
      <div className="min-h-screen flex-1 flex-grow bg-background">
        {children}
      </div>
      <Footer />
    </>
  );
}
