import React from "react";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { Layout } from "../components/Layout";

import { ThemeProvider } from "../context/ThemeProvider";

import "../styles/styles.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-stone-50 text-stone-700 transition-colors dark:bg-stone-800 dark:text-stone-200">
        <ThemeProvider>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
