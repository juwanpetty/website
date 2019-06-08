import React from "react";
// import groupBy from "lodash/groupBy";
// import orderBy from "lodash/orderBy";
// import mapValues from "lodash/mapValues";

import Link from "next/link";

const getWritingPosts = async () => {
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
          posts(orderBy: publishedAt_ASC) {
            id
            title
            slug
            published
          }
        }`,
      }),
    }
  );

  const { data } = await response.json();

  return data.posts;
};

async function Writing() {
  const posts = await getWritingPosts();

  const mockPosts = [
    {
      id: "cljvhfnrs17b80blgenw9hik41",
      title: "Example post 5",
      slug: "on-the-state-of-the-web",
      published: "2024-02-22",
    },
    {
      id: "cljvhfnrs17b80blgenw9hik42",
      title: "Example post 4",
      slug: "on-the-state-of-the-web",
      published: "2024-02-09",
    },
    {
      id: "cljvhfnrs17b80blgenw9hik43",
      title: "Example post 3",
      slug: "on-the-state-of-the-web",
      published: "2023-08-12",
    },
    {
      id: "cljvhfnrs17b80blgenw9hik44",
      title: "Example post 2",
      slug: "on-the-state-of-the-web",
      published: "2023-07-09",
    },
    {
      id: "cljvhfnrs17b80blgenw9hik45",
      title: "Example post 1",
      slug: "on-the-state-of-the-web",
      published: "2022-03-14",
    },
  ];

  // const postsGroupedByYear = groupBy(mockPosts, (post) => {
  //   return new Date(post.published).getFullYear();
  // });

  // const sortedPosts = Object.entries(
  //   mapValues(postsGroupedByYear, (yearGroup) =>
  //     orderBy(yearGroup, ["published"], ["desc"])
  //   )
  // ).reverse();

  // const postsMarkup = sortedPosts.map(([year, posts]) => (
  //   <PostList key={year} year={year} posts={posts} />
  // ));

  return (
    <div>
      <h3 className="mb-2 text-base font-medium text-stone-900 transition-colors dark:text-stone-100">
        2024
      </h3>
      <section className="mb-24 grid gap-4">
        <Link
          href="/writing/on-the-state-of-the-web"
          className="sm:trunate flex items-center gap-4 font-normal text-inherit no-underline transition-colors"
        >
          <p className="m-0 transition-colors group-hover:text-orange-500 sm:truncate dark:text-white">
            Secure Linear OAuth2 flow with Next.js and React Server Components
          </p>
          <hr className="m-0 hidden min-w-7 flex-1 transition-colors group-hover:border-orange-400 sm:block" />
          <p className="m-0 hidden shrink-0 font-mono text-sm transition-colors group-hover:text-orange-400 sm:block">
            03/24
          </p>
        </Link>
        <Link
          href="/writing/on-the-state-of-the-web"
          className="sm:trunate flex items-center gap-4 font-normal text-inherit no-underline transition-colors"
        >
          <p className="m-0 transition-colors group-hover:text-orange-500 sm:truncate dark:text-white">
            Neutral is shutting down
          </p>
          <hr className="m-0 hidden min-w-7 flex-1 transition-colors group-hover:border-orange-400 sm:block" />
          <p className="m-0 hidden shrink-0 font-mono text-sm transition-colors group-hover:text-orange-400 sm:block">
            09/23
          </p>
        </Link>
        <Link
          href="/writing/on-the-state-of-the-web"
          className="sm:trunate flex items-center gap-4 font-normal text-inherit no-underline transition-colors"
        >
          <p className="m-0 transition-colors group-hover:text-orange-500 sm:truncate dark:text-white">
            Refraction has been acquired by Twistag
          </p>
          <hr className="m-0 hidden min-w-7 flex-1 transition-colors group-hover:border-orange-400 sm:block" />
          <p className="m-0 hidden shrink-0 font-mono text-sm transition-colors group-hover:text-orange-400 sm:block">
            07/23
          </p>
        </Link>
      </section>
      <h3 className="mb-2 text-base font-medium text-stone-900 transition-colors dark:text-stone-100">
        2023
      </h3>
      <section className="grid gap-4">
        <Link
          href="/writing/on-the-state-of-the-web"
          className="sm:trunate flex items-center gap-4 font-normal text-inherit no-underline transition-colors"
        >
          <p className="m-0 transition-colors group-hover:text-orange-500 sm:truncate dark:text-white">
            Secure Linear OAuth2 flow with Next.js and React Server Components
          </p>
          <hr className="m-0 hidden min-w-7 flex-1 transition-colors group-hover:border-orange-400 sm:block" />
          <p className="m-0 hidden shrink-0 font-mono text-sm transition-colors group-hover:text-orange-400 sm:block">
            03/24
          </p>
        </Link>
        <Link
          href="/writing/on-the-state-of-the-web"
          className="sm:trunate flex items-center gap-4 font-normal text-inherit no-underline transition-colors"
        >
          <p className="m-0 transition-colors group-hover:text-orange-500 sm:truncate dark:text-white">
            Neutral is shutting down
          </p>
          <hr className="m-0 hidden min-w-7 flex-1 transition-colors group-hover:border-orange-400 sm:block" />
          <p className="m-0 hidden shrink-0 font-mono text-sm transition-colors group-hover:text-orange-400 sm:block">
            09/23
          </p>
        </Link>
        <Link
          href="/writing/on-the-state-of-the-web"
          className="sm:trunate flex items-center gap-4 font-normal text-inherit no-underline transition-colors"
        >
          <p className="m-0 transition-colors group-hover:text-orange-500 sm:truncate dark:text-white">
            Refraction has been acquired by Twistag
          </p>
          <hr className="m-0 hidden min-w-7 flex-1 transition-colors group-hover:border-orange-400 sm:block" />
          <p className="m-0 hidden shrink-0 font-mono text-sm transition-colors group-hover:text-orange-400 sm:block">
            07/23
          </p>
        </Link>
      </section>
    </div>
  );
}

export default Writing;
