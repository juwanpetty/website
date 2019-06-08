"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { mergeClassNames as cn } from "../utilities/mergeClassNames";
import { isCurrentPath } from "../utilities/isCurrentPath";

type Props = {
  children: React.ReactNode;
  href: string;
};

export function NavLink({ children, href }: Props) {
  const pathName = usePathname();

  return (
    <Link
      href={href}
      className={cn("text-base text-stone-400 transition-colors", {
        "text-stone-800 dark:text-stone-200": isCurrentPath(pathName, href),
      })}
    >
      {children}
    </Link>
  );
}
