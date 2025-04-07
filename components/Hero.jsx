//this will be the main content (bg img, title, get random button)
import { Raleway } from 'next/font/google';
import Link from 'next/link';
import React from 'react'

const raleway = Raleway({subsets: ["latin"], weight: ["400"]});

export default function Hero() {
  
  return (
    <div className='flex flex-col'>
      <img className='h-[90vh] w-full object-cover object-left' src='bg-img.jpg' alt='bg-img'/>
      <div className='absolute flex items-center justify-center inset-[0] z-5'>
        <div className='flex flex-col gap-1 p-2 w-full items-center bg-white opacity-80'>

          <div className='flex flex-col items-center'>
            <h3 className='text-2xl sm:text-3xl md:text-4xl'>Welcome to </h3>
            <h1 className={'text-4xl sm:text-6xl md:text-8xl ' + raleway.className} >Food Repo</h1>
          </div>

          <div className='flex items-center'>
            <Link href={'/recipe'}>
              <button className='border-1 rounded-full duration-200 hover:bg-gray-400 cursor-pointer '>
                <p className={'px-4 sm:px-8 whitespace-nowrap py-2 sm:py-3 text-sm sm:text-base md:text-lg ' + raleway.className}>Random recipe 
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
