import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <div className='min-h-screen bg-gray-500 flex flex-col items-center justify-center p-4'>
      <div className=' text-center mb-8'>
      <h1 className='text-4xl font-bold mb-10 text-white'>Kelompok 3</h1>
      <h2 className='text-2xl text-white font-bold font'>Kalkulator</h2>
      </div>
      <div className='space-x-4'>
        <Link href="/kalkulator-bangun-datar">
      <button className='w-48 bg-blue-500 text-white text-center py-2 px-4 rounded-lg font-bold hover:bg-blue-600 transition duration-300'>
        Kalkulator Bangun Datar
      </button>
        </Link>
        <Link href="/kalkulator-bangun-ruang">
      <button className='w-48 bg-blue-500 text-white text-center py-2 px-4 rounded-lg font-bold hover:bg-blue-600 transition duration-300 '>
        Kalkulator Bangun Ruang
      </button>
        </Link>
      </div>
    </div>
  )
}

export default page