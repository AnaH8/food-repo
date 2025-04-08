import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className="p-2 h-[10vh] sm:h-fit sm:p-4 md:p-6 flex items-center justify-between gap-4 bg-[#d9c5b3] sticky z-1000 top-0 left-0
    text-lg sm:text-xl md:text-4xl text-white">
      <Link href={'/'}>
      <i className="fa-solid fa-bowl-food  pl-[0.5rem]"> F P</i>
      </Link>
      <button>
        <i className="fa-solid fa-magnifying-glass pr-[1rem]"></i>
      </button>  
    </header>
  )
}
