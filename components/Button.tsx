"use client";

import type { ReactNode } from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_img]:w-5",
  {
    variants: {
      variant: {
        default: "bg-primary-gradient hover:bg-primary-gradient/90  text-white",
        outline:
          "bg-transparent shadow border-2 border-light-gray rounded-full text-dark-gray",
      },
      size: {
        default: "h-9 px-5 py-2",
        sm: "h-8  px-3 text-xs",
        lg: "h-10  px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

interface ButtonCategoryProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  activeFilter?: boolean;
}

function Button({ variant, size, className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
}

function ButtonCategory({
  activeFilter,
  className,
  children,
  ...props
}: ButtonCategoryProps) {
  return (
    <button
      className={cn(
        "mb-2 flex h-12 min-w-56 items-center gap-3 rounded-full border-2 bg-platinum px-4 text-left font-semibold text-gray-500 transition-all",
        { "border-primary-two text-primary-two": activeFilter },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export { buttonVariants, Button, ButtonCategory };
