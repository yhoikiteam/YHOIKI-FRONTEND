"use client";

import { ReactNode, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { cn } from "@/utils/cn";
import { Button } from "./Button";

interface IProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  children: ReactNode;
  className?: string;
  title: ReactNode; // Tidak lagi bertabrakan
}

export const AccordionItem = ({ className, title, children }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn(className)} data-state={isOpen ? "open" : "closed"}>
      <AccordionTrigger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {title}
      </AccordionTrigger>
      <AccordionContent isOpen={isOpen}>{children}</AccordionContent>
    </div>
  );
};

const AccordionTrigger = ({
  isOpen,
  onClick,
  children,
}: {
  isOpen: boolean;
  onClick: () => void;
  children: ReactNode;
}) => (
  <div
    onClick={onClick}
    className="flex h-12 w-full cursor-pointer items-center justify-between rounded-md px-4 text-base font-medium text-davy-gray hover:bg-gray-100 [&_svg]:flex-shrink-0"
    data-state={isOpen ? "open" : "closed"}
    aria-expanded={isOpen}
  >
    {children}
    <BiChevronDown
      className={cn(
        "h-6 w-6 shrink-0 transition-transform",
        "data-[state=closed]:rotate-0 data-[state=open]:rotate-180",
      )}
      data-state={isOpen ? "open" : "closed"}
    />
  </div>
);

const AccordionContent = ({
  className,
  children,
  isOpen,
}: {
  className?: string;
  children: ReactNode;
  isOpen: boolean;
}) => (
  <div
    className={cn(
      "ml-4 overflow-hidden rounded-md border-none bg-background text-base font-normal text-davy-gray transition-all",
      isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0",
      className,
    )}
    data-state={isOpen ? "open" : "closed"}
  >
    {children}
  </div>
);
