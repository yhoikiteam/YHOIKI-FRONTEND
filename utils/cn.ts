import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// function untuk merge classname
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
