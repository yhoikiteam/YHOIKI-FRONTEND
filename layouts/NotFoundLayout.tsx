import React from "react";
import CategoryBar from "@/components/CategoryBar";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Navbar/Navbar";

export default function NotFoundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-50 w-full shadow-sm">
        <Navbar />
        <div className="relative w-full border-b border-t bg-background">
          <MaxWidthWrapper>
            <CategoryBar />
          </MaxWidthWrapper>
        </div>
      </div>
      <div className="min-h-screen flex-1 flex-grow bg-background">
        {children}
      </div>
    </>
  );
}
