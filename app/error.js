'use client'

import Link from "next/link"
import { useEffect } from "react"

export default function Error(props) {
  const {error, reset} = props

  useEffect(()=>{
    console.log(error)
  },[error])

  return (
    <div className='flex flex-col items-center justify-center gap-2 py-8'>
        <h3>Something went wrong</h3>
        <div className="flex items-center gap-1">
            <button onClick={reset}>Reset</button>
            <Link href={'/'}>
            <button>Home</button>
            </Link>
        </div>
    </div>
  )
}
