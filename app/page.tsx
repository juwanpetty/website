import React from "react";
import { Metadata } from "next";

import { Icons } from "../shared/Icons";

export const metadata: Metadata = {
  title: "Juwan Petty",
};

async function Home() {
  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-base font-medium leading-tight text-stone-900 dark:text-stone-100">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </h1>

      <div className="flex flex-col gap-5 text-base">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>

      <div className="flex gap-4">
        <button
          type="button"
          className="flex h-[34px] items-center gap-2 rounded-xl bg-stone-900 px-3 py-2 text-stone-100 shadow-sm"
        >
          <span className="text-sm font-medium">Button</span>
          <Icons.ArrowRight size={18} />
        </button>
        <button
          type="button"
          className="flex h-[34px] items-center gap-2 rounded-xl border border-solid border-stone-100 bg-white px-3 py-2 shadow-sm"
        >
          <span className="text-sm font-medium">Button</span>
          <Icons.ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}

export default Home;
