import type { ReactNode } from "react";
import CategoryBar from "@/components/CategoryBar";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import MainLayout from "@/layouts/MainLayout";

export default function SeacrhLayout({ children }: { children: ReactNode }) {
  return (
    <MainLayout>
      <MaxWidthWrapper className="py-6">
        <CategoryBar />
      </MaxWidthWrapper>
      {children}
    </MainLayout>
  );
}
