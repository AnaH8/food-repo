import Link from "next/link";
import "./globals.css";

import { Nunito_Sans } from "next/font/google";
import {Playfair_Display} from "next/font/google"
import Head from "./head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({subsets: ["latin"], weight: ["400"]});
const nunito = Nunito_Sans({subsets: ["latin"], weight: ["400"]})

export const metadata = {
  title: "Food Repo",
  description: "Get a new idea for your next meal",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <Head/>
      <body>
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
