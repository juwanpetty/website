import React, { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export function Button({ children, className, ...props }: Props) {
  return (
    <button
      type="button"
      className={twMerge(
        "flex h-8 items-center justify-center gap-[2px] rounded-[10px] border border-solid border-stone-200 bg-white px-3 text-sm font-medium text-stone-800 shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
