import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center gap-2 py-8'>
        <h2>Page not found :(</h2>
        <p className='text-xl'>404</p>
        <Link href={'/'}>
        <button className='border-1 duration-200 hover:bg-gray-400 cursor-pointer p-1'>Home</button>
        </Link>
        </div>
  )
}
