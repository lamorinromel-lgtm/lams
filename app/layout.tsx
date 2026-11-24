import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import type { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Romel Lamorin | Personal Site",
  description: "A personal website built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <nav className="bg-blue-950 text-white px-6 py-5">
          <div className="max-w-6xl mx-auto flex justify-between items-center">

            <Link href="/" className="text-xl font-bold">
              ROMEL LAMORIN
            </Link>

            <div className="flex gap-6">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/projects">Projects</Link>
            </div>

          </div>
        </nav>

        {children}

      </body>
    </html>
  );
}