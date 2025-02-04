"use client";

import type { ReactNode } from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils/cn";

interface ButtonFilterProps {
  id: string;
  onClick: (id: string) => void;
  text: string;
  customcss?: string;
  icons?: React.ReactNode;
  isActive?: boolean;
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_img]:w-5",
  {
    variants: {
      variant: {
        default:
          "bg-button-gradient shadow hover:bg-button-gradient/90 rounded-full text-white",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
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

function Button({ variant, size, className, children, ...props }: ButtonProps) {
  return (
    <button
      // className={cn(
      //   "bg-button-gradient rounded-full px-4 py-2 duration-300",
      //   customcss,
      // )}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {/* <Link href={url}>
        <h1 className="text-white">{text}</h1>
      </Link> */}
      {children}
    </button>
  );
}

export const ButtonFilter: React.FC<ButtonFilterProps> = ({
  id,
  text,
  icons,
  customcss,
  onClick,
  isActive,
}) => {
  return (
    <button
      onClick={() => onClick(id)}
      id={id}
      className={`mb-2 h-12 w-full rounded-full p-[2px] text-left font-semibold ${
        isActive ? "bg-gradient-to-r from-[#75C57E] to-[#34A853]" : ""
      } ${customcss}`}
    >
      <div className="flex h-full w-full items-center rounded-full bg-[#E6E6E6] px-3 text-start text-[#535753]">
        <div className="flex items-center gap-3">
          <div>{icons}</div>
          <p>{text}</p>
        </div>
      </div>
    </button>
  );
};

export { buttonVariants, Button };
