import type { Metadata } from "next";
import Link from "next/link";

import "./globals.css"

export const metadata: Metadata = {
  title: "Read Only Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="w-full bg-emerald-950 p-5 flex flex-row justify-between">
          <div className="text-white font-light text-2xl hover:text-yellow-300 transition-colors duration-150 cursor-pointer">
            <Link href='/'>  My App </Link>
          </div>
          <ul className="flex justify-between gap-4 items-center font-bold">
            <li className="hover:text-yellow-300 transition-all duration-150 hover:underline">
              <Link href="/posts" className="transition-all duration-150">Posts</Link>
            </li>
            <li className="hover:text-yellow-300 transition-all duration-150 group group-hover:underline">
              <Link href="/users" className="transition-all duration-150 group-hover:underline">Users</Link>
            </li>
            <li className="hover:text-yellow-300 transition-all duration-150 hover:underline">
              <Link href="/todos" className="transition-all duration-150">Todos</Link>
            </li>
          </ul>
        </nav>
        <div className="w-full p-5">
          {children}
        </div>
      </body>
    </html>
  );
}
