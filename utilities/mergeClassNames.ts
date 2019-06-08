import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";

export function mergeClassNames(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
