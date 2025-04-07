import Link from "next/link";
import "./globals.css";

import {Raleway} from "next/font/google"
import Head from "./head";

const raleway = Raleway({subsets: ["latin"], weight: ["400"]});

export const metadata = {
  title: "Food Repo",
  description: "Get a new idea for your next meal",
};

export default function RootLayout({ children }) {

  const header = (
    <header className="p-2 sm:p-4 md:p-6 flex items-center justify-between gap-4">
      <Link href={'/'}>
      <i className="fa-solid fa-bowl-food text-lg sm:text-xl md:text-3xl text-gray-700 pl-[0.5rem]"> F P</i>
      </Link>
      <button>
        <i className="fa-solid fa-magnifying-glass text-lg sm:text-xl md:text-3xl text-gray-700 pr-[1rem]"></i>
      </button>
    </header>
  )

  const footer = (
    <footer className="grid place-items-center">
      <p className={' '  + raleway.className}>Created by Ana ⭐</p>
    </footer>
  )

  return (
    <html lang="en">
      <Head/>
      <body>
        {header}
          {children}
        {footer}
      </body>
    </html>
  );
}
