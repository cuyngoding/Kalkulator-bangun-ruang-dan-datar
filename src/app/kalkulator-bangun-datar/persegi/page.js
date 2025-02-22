'use client'
import React, { useState } from 'react';
import { Button, TextField, Card, CardContent, Typography } from '@mui/material';

export default function Persegi() {
    const [sisi, setSisi] = useState('');
    const [luas, setLuas] = useState('');
    const [keliling, setKeliling] = useState('');
    
    const hitungLuas = () => {
        const s = parseFloat(sisi);
        setLuas(s * s);
    };
    
    const hitungKeliling = () => {
        const s = parseFloat(sisi);
        setKeliling(4 * s);
    };
    
    return (
        <div className='min-h-screen bg-gradient-to-br from-gray-700 to-gray-900 flex flex-col items-center justify-center p-6'>
            <Typography variant='h4' className='text-white font-bold mb-6'>Kalkulator Persegi</Typography>
            <Card className='w-full max-w-sm bg-white shadow-xl rounded-lg'>
                <CardContent className='flex flex-col items-center space-y-4 p-6'>
                    <TextField 
                        variant='outlined' 
                        label='Masukkan panjang sisi' 
                        type='number' 
                        value={sisi} 
                        onChange={(e) => setSisi(e.target.value)}  
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
                oleh: Arthawan Pratama
            </footer>
        </div>
    );
}
