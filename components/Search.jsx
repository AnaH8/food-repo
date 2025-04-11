'use client'
import { Nunito_Sans } from "next/font/google";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const nunito = Nunito_Sans({subsets: ["latin"], weight: ["400"]})

export default function Search(props) {
  const {handleToggle} = props
  const router = useRouter()
  const [search, setSearch] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()
    router.push(`/search/${search}`)
    handleToggle()
  }
  
  return (
  <div className="absolute w-screen h-screen bg-white z-1000 flex flex-col gap-14" >
    <button className="p-2 text-4xl text-black" onClick={handleToggle}>
    <i className="fa-solid fa-x text-[#2b4257]"></i>
    </button>
    <form className={"flex justify-around items-center p-2 md:w-fit self-center " + nunito.className } onSubmit={handleSearch}>
      <input className="bg-gray-100 p-4 rounded-s-4xl w-[100%] md:w-fit" type="text" placeholder="search recipes" value={search} onChange={(e)=>{
        setSearch(e.target.value)
      }}/>
      <button type="submit" className="bg-[#d17a55] p-4 rounded-e-4xl text-white text-sm ">
        SEARCH
      </button>
    </form>

  </div>
)
}
