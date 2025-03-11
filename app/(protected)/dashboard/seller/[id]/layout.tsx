import type { ReactNode } from "react";
import MainLayout from "@/layouts/MainLayout";

export default function DashboardSellerLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <MainLayout>{children}</MainLayout>;
}
