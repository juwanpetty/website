import React from "react";

import { ImagePlaceholder } from "../../shared/ImagePlaceholder";

function About() {
  return (
    <div>
      <section className="mb-24">
        <ImagePlaceholder className="mb-8 aspect-[21/9]" />

        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam
          dignissim diam quis enim lobortis scelerisque fermentum dui faucibus.
          Arcu cursus vitae congue mauris.
        </p>
      </section>

      <section className="mb-24">
        <h3 className="mb-2 text-base font-medium text-stone-900 transition-colors dark:text-stone-100">
          Now
        </h3>

        <div className="flex flex-col gap-5">
          <p className="text-base italic text-stone-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-base">
            This site is written and edited in Obsidian. I adhere to the
            philosophy of File over app. My plain text Obsidian files are
            automatically compiled into web pages using Jekyll and hosted with
            Netlify.
          </p>
        </div>
      </section>

      <section>
        <h3 className="mb-2 text-base font-medium text-stone-900 transition-colors dark:text-stone-100">
          Colophon
        </h3>

        <div className="grid grid-cols-[max-content_minmax(0,_1fr)] gap-x-4 text-base">
          <p className="col-span-1 py-2 text-stone-500">Stack</p>
          <p className="col-start-2 py-2">Next.js / TailwindCSS</p>
          <p className="col-span-1 border-t border-dashed py-2 text-stone-500">
            Fonts
          </p>
          <p className="dashed col-start-2 border-t py-2">
            Geist Sans / Geist Mono
          </p>

          <p className="col-span-1 border-t border-dashed py-2 text-stone-500">
            View source
          </p>
          <p className="dashed col-start-2 border-t py-2 underline">
            alexcarpenter/alexcarpenter.me
          </p>
          <p className="col-span-1 border-t border-dashed py-2 text-stone-500">
            Version
          </p>
          <p className="dashed col-start-2 border-t py-2">
            <code className="rounded bg-neutral-200 px-1 py-[1px] dark:bg-neutral-700">
              4.0.0-alpha
            </code>
          </p>
          <p className="col-span-1 border-t border-dashed py-2 text-stone-500">
            Latest commit
          </p>
          <p className="dashed col-start-2 border-t py-2">
            <code className="rounded bg-neutral-200 px-1 py-[1px] underline dark:bg-neutral-700">
              0886900
            </code>
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
