import * as React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex-1 flex-grow bg-white">{children}</div>
      <Footer />
    </>
  );
}
