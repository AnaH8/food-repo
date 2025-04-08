import React from 'react'
import { Nunito_Sans } from "next/font/google";
import {Playfair_Display} from "next/font/google"
import Link from 'next/link';

const playfair = Playfair_Display({subsets: ["latin"], weight: ["400"]});
const nunito = Nunito_Sans({subsets: ["latin"], weight: ["400"]})

export default function Footer() {

  return (
    // <footer className="grid grid-cols-3 p-4 pl-8 items-center justify-items-stretch bg-[#D9B3B4]">
    //   <p className={'text-sm sm:text-base '  + playfair.className}>PRIVACY POLICY</p>
    //   <p className={'text-xs '  + playfair.className}>Created by Ana ⭐</p>
    // </footer>
    <footer className='flex flex-col gap-2 p-4 items-center text-[#5b86ad]'>
      <div className='flex gap-2 text-2xl '>
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-github"></i>
      </div>
      <p>Copyright © {(new Date().getFullYear())}</p>
    </footer>
  )
}
