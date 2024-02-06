import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {TailwindMerger} from "@/lib/Utilities";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PDFQuest AI",
  description: "SaaS PDF reader with magic of AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={TailwindMerger(inter.className, "min-h-screen antialiased grainy")}>
        <Navbar />
        {children}
      </body>
    </html>
  );
};