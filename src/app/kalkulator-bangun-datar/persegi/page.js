'use client'
import React from 'react'
import { useState } from 'react'
export default function persegi() {
    const [sisi,setSisi] = useState('')
    const [luas,setLuas] = useState('')
    const [keliling,setKeliling] = useState('')

    const hitungLuas = () => {
        const s = parseFloat(sisi)
        setLuas(Math.pow(s,2));
    }
    const hitungKeliling = () => {
        const s = parseFloat(sisi)
        setKeliling(4*s);
    }
  return (
    <div className='min-h-screen bg-gray-500 flex flex-col items-center justify-center p-4'>
      <h1 className='text-4xl font-bold mb-8 text-white'>Kalkulator Persegi</h1>
      <div className='space-y-4'>
        <input type='number' value={sisi} onChange={(e) => setSisi(e.target.value)} placeholder='Masukkan Sisi' className='w-64 p-2 border rounded-lg'/>
        <button onClick={hitungLuas} className='bg-blue-500 text-white p-2 ml-3 rounded-lg hover:bg-blue-600 transition duration-300 '>Hitung Luas
        </button>
        <button onClick={hitungKeliling} className='bg-yellow-500 text-white p-2 ml-3 rounded-lg hover:bg-yellow-600 transition duration-300'>Hitung Keliling
        </button>

        {luas && <p className='text-xl font-bold text-white'>Luas : {luas} </p>}
        {keliling && <p className='text-xl font-bold text-white'>Keliling : {keliling} </p>}
      </div>
    </div>
  )
}

