"use client";

import React from "react";
import Link from "next/link";

import { NavLink } from "./NavLink";
import { ThemeSwitcher } from "./ThemeSwitcher";

type Props = {
  children: React.ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <section className="m-auto flex min-h-screen max-w-screen-sm flex-col px-6">
      <nav className="flex items-center justify-between pb-24 pt-8">
        <Link href="/">
          <span className="flex size-8 items-center justify-center rounded-lg text-stone-900 transition-colors dark:text-stone-200">
            <svg
              fill="none"
              height="48"
              viewBox="0 0 44 48"
              width="44"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="m22 46c12.1503 0 22-9.8497 22-22s-9.8497-22-22-22c-12.15029 0-22 9.8497-22 22s9.84971 22 22 22zm6.8632-33.7515c.3341-1.1866-.8175-1.8884-1.8692-1.1391l-14.6816 10.4591c-1.1406.8126-.9612 2.4315.2695 2.4315h3.8661v-.0299h7.5348l-6.1395 2.1662-2.7065 9.6152c-.3341 1.1867.8174 1.8884 1.8692 1.1391l14.6816-10.4591c1.1406-.8125.9611-2.4315-.2695-2.4315h-5.8628z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
          </span>
          <span className="sr-only">Go to the homepage</span>
        </Link>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-6">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/writing">Writing</NavLink>
            <NavLink href="/projects">Projects</NavLink>
          </div>
          <div>
            <ThemeSwitcher />
          </div>
        </div>
      </nav>

      <div className="flex-grow pb-24">{children}</div>

      {/* <footer className="py-14">Footer</footer> */}
    </section>
  );
}
