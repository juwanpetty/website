import { Metadata } from "next";

import { Icons } from "../../shared/Icons";
import { ImagePlaceholder } from "../../shared/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Projects | Juwan Petty",
};

const getProjects = async () => {
  const response = await fetch(
    "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/cljsoc86w0dpt01t85tdr4uxn/master",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: `{
          projects {
            id
            name
            description
            url
            logo {
              width
              height
              url
            }
            coverImage {
              width
              height
              url
            }
          }
        }`,
      }),
    }
  );

  const { data } = await response.json();

  return data.projects;
};

async function Projects() {
  const projects = await getProjects();

  return (
    <div>
      <h3 className="mb-2 text-base font-medium text-stone-900 dark:text-stone-100">
        Active
      </h3>
      <p className="text-base">
        Listed below are the projects in which I have participated, dedicating
        significant time and effort towards their creation, maintenance, and
        enhancement.
      </p>

      <section className="mb-24 flex flex-col gap-8 pt-5">
        <div className="flex items-start gap-3 rounded-xl">
          <ImagePlaceholder className="size-10 md:size-12" />

          <div className="flex flex-grow flex-col">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-stone-500"
            >
              <h3 className="text-base text-stone-900 underline dark:text-stone-200">
                Gifts
              </h3>
              <Icons.External size={16} />
            </a>
            <p className="text-base text-stone-500">
              Curating unique, meaningful, and quality gifts.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-xl">
          <ImagePlaceholder className="size-10 md:size-12" />

          <div className="flex flex-grow flex-col">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-stone-500"
            >
              <h3 className="text-base text-stone-900 underline dark:text-stone-200">
                Copyhub
              </h3>
              <Icons.External size={16} />
            </a>
            <p className="text-base text-stone-500">
              Copywriting portfolios that impress.
            </p>
          </div>
        </div>
      </section>

      <h3 className="mb-2 text-base font-medium text-stone-900 dark:text-stone-100">
        Archived
      </h3>
      <p className="text-base">
        The following projects are ones I&apos;ve been involved with previously,
        but they are no longer being actively maintained.
      </p>

      <section className="flex flex-col gap-8 pt-5">
        <div className="flex items-start gap-3 rounded-xl">
          <ImagePlaceholder className="size-10 md:size-12" />

          <div className="flex flex-grow flex-col">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-stone-500"
            >
              <h3 className="text-base text-stone-900 underline dark:text-stone-200">
                Gifts
              </h3>
              <Icons.External size={16} />
            </a>
            <p className="text-base text-stone-500">
              Curating unique, meaningful, and quality gifts.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-xl">
          <ImagePlaceholder className="size-10 md:size-12" />

          <div className="flex flex-grow flex-col">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-stone-500"
            >
              <h3 className="text-base text-stone-900 underline dark:text-stone-200">
                Copyhub
              </h3>
              <Icons.External size={16} />
            </a>
            <p className="text-base text-stone-500">
              Copywriting portfolios that impress.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
