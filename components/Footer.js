import React from 'react'
import { Nunito_Sans } from "next/font/google";
import {Playfair_Display} from "next/font/google"

const playfair = Playfair_Display({subsets: ["latin"], weight: ["400"]});
const nunito = Nunito_Sans({subsets: ["latin"], weight: ["400"]})

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-2 p-2 bg-[#D9B3B4]">
      <p className={'text-sm sm:text-base '  + playfair.className}>PRIVACY POLICY</p>
      <p className={'text-xs '  + playfair.className}>Created by Ana ⭐</p>
    </footer>
  )
}
