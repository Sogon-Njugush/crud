import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-slate-800 px-8 py-3'>
        <Link className='text-white font-bold' href={"/"}>Sogon Crud</Link>
        <Link className='bg-white p-2' href={"/addTopic"}>Add Topic</Link>
    </div>
  )
}

export default Navbar