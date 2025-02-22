'use client'
import React from 'react'
import { useState } from 'react'
import { TextField, Button, Typography, Card, CardContent } from '@mui/material'
export default function persegiPanjang() {
   const [panjang,setPanjang] = useState('')
      const [lebar,setLebar] = useState('')
      const [luas,setLuas] = useState('')
      const [keliling,setKeliling] = useState('')
      const [error,setError] = useState('')
      const hitungLuas = () => {
          const p = parseFloat(panjang)
          const l = parseFloat(lebar)
          if(isNaN(p) && isNaN(l) || p <= 0 || l <= 0){
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
         if(isNaN(p) && isNaN(l) || p <= 0 || l <= 0){
            setError('Nilai tidak valid')
            setKeliling('')
          }else{
            setError('');
            setKeliling(2*(p+l));
          }
      }
    return (
        <div className='min-h-screen bg-gradient-to-br from-gray-700 to-gray-900 flex flex-col items-center justify-center p-6'>
        <Typography variant='h4' className='text-white font-bold mb-6'>Kalkulator Persegi Panjang</Typography>
        <Card className='w-full max-w-sm bg-white shadow-xl rounded-lg'>
            <CardContent className='flex flex-col items-center space-y-4 p-6'>
                <TextField 
                    variant='outlined' 
                    label='Masukkan panjang' 
                    type='number' 
                    value={panjang}
                    onChange={(e) => setPanjang(e.target.value)}  
                    fullWidth
                />
                <TextField 
                    variant='outlined' 
                    label='Masukkan lebar' 
                    type='number' 
                    value={lebar}

                    onChange={(e) => setLebar(e.target.value)}  
                    fullWidth
                />
                <div className='flex w-full justify-between'>
                    <Button onClick={hitungLuas} variant='contained' color='primary'>Hitung Luas</Button>
                    <Button onClick={hitungKeliling} variant='contained' color='secondary'>Hitung Keliling</Button>
                </div>
                {luas && <Typography variant='h6' className='text-gray-800 font-semibold'>Luas: {luas}</Typography>}
                {keliling && <Typography variant='h6' className='text-gray-800 font-semibold'>Keliling: {keliling}</Typography>}
            </CardContent>
        </Card>
        <footer className='mt-6 text-white text-sm'>
            oleh: Ugrasena Wira Nurrahman
        </footer>
    </div>
    )
}

