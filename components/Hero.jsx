//this will be the main content (bg img, title, get random button)
import {Playfair_Display} from "next/font/google"
import { Nunito_Sans } from "next/font/google";
import Link from 'next/link';
import React from 'react'

const playfair = Playfair_Display({subsets: ["latin"], weight: ["400"]});
const nunito = Nunito_Sans({subsets: ["latin"], weight: ["400"]})

export default function Hero() {
  
  return (
    <div className='flex flex-col'>
      <img className='h-[90vh] w-full object-cover object-left' src='bg-img.jpg' alt='bg-img'/>
      <div className='absolute flex items-center justify-center top-[50%] left-[50%] translate-[-50%] z-5 w-screen'>
        <div className='flex flex-col gap-2 p-2 w-full items-center bg-white opacity-80'>

          <div className='flex flex-col items-center'>
            <h3 className={'text-2xl sm:text-3xl md:text-4xl ' + nunito.className}>Welcome to </h3>
            <h1 className={'text-4xl sm:text-6xl md:text-8xl ' + playfair.className}>Food Repo</h1>
          </div>

          <div className='flex items-center'>
            <Link href={'/random'}>
              <button className='border-1 rounded-full duration-200 hover:bg-[#d17a55] hover:text-white cursor-pointer '>
                <p className={'px-4 sm:px-8 whitespace-nowrap py-2 sm:py-3 text-sm sm:text-base md:text-lg ' + playfair.className}>Random recipe 
                <i className="fa-solid fa-up-right-from-square pl-1 text-xs sm:text-sm"></i>
                </p>
              </button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
