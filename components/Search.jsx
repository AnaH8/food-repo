'use client'
import { Nunito_Sans } from "next/font/google";
import React from "react";

const nunito = Nunito_Sans({subsets: ["latin"], weight: ["400"]})

export default function Search(props) {
  const {handleToggle} = props

  return (
  <div className="absolute w-screen h-screen bg-white z-1000 flex flex-col gap-14" >
    <button className="p-2 text-4xl text-black" onClick={handleToggle}>
    <i className="fa-solid fa-x text-[#2b4257]"></i>
    </button>
    <form className={"flex justify-around items-center p-2 md:w-fit self-center " + nunito.className }>
      <input className="bg-gray-100 p-4 rounded-s-4xl w-[100%] md:w-fit" type="text" placeholder="search recipes"/>
      <button className="bg-[#d17a55] p-4 rounded-e-4xl text-white text-sm ">
        SEARCH
      </button>
    </form>

  </div>
)
}
