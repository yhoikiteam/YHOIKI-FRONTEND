"use client";

import * as React from "react";
import Footer from "@/components/Footer";
import MaintenancePage from "@/components/MaintenancePage";
import Navbar from "@/components/Navbar";
import { useScreenSize } from "@/hooks/useScreenSize";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMobile = useScreenSize();

  if (isMobile) {
    return <MaintenancePage />;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex-1 flex-grow bg-white">{children}</div>
      <Footer />
    </>
  );
}
