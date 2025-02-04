import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface IProps {
  className?: string;
  children: ReactNode;
}

export default function MaxWidthWrapper({ className, children }: IProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-2xl px-4 sm:px-6 md:px-8",
        className,
      )}
    >
      {children}
    </div>
  );
}
