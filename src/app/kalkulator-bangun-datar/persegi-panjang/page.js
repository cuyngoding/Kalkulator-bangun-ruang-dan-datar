'use client'
import React from 'react'
import { useState } from 'react'
export default function persegiPanjang() {
   const [panjang,setPanjang] = useState('')
      const [lebar,setLebar] = useState('')
      const [luas,setLuas] = useState('')
      const [keliling,setKeliling] = useState('')
      const [error,setError] = useState('')
      const hitungLuas = () => {
          const p = parseFloat(panjang)
          const l = parseFloat(lebar)
          if(isNaN(p,l) || p <= 0 || l <= 0){
            setError('Nilai tidak valid')
            setLuas('')
          }else{
            setError('');
            setLuas(p*l);
          }
      }
      const hitungKeliling = () => {
         const p = parseFloat(panjang)
         const l = parseFloat(lebar)
         if(isNaN(p,l) || p <= 0 || l <= 0){
            setError('Nilai tidak valid')
            setKeliling('')
          }else{
            setError('');
            setKeliling(2*(p+l));
          }
      }
    return (
      <div className='min-h-screen bg-gray-500 flex flex-col items-center justify-center p-4'>
        <h1 className='text-4xl font-bold mb-8 text-white'>Kalkulator Persegi Panjang</h1>
        <div className='space-y-4'>
          <input type='number' value={panjang} onChange={(e) => setPanjang(e.target.value)} placeholder='Masukkan Panjang' className='block w-64 p-2 border rounded-lg'/>
          <input type='number' value={lebar} onChange={(e) => setLebar(e.target.value)} placeholder='Masukkan Lebar' className='block w-64 p-2 border rounded-lg'/>
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

