import type { ReactNode } from "react";
import MainLayout from "@/layouts/MainLayout";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}
