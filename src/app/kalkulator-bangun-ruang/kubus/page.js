'use client';
import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';

function Page() {
  const [rusuk, setRusuk] = useState('');
  const [luas, setLuas] = useState('');
  const [volume, setVolume] = useState('');
  const [error, setError] = useState('');

  const hitungLuas = () => {
   const r = parseFloat(rusuk);

   if(isNaN(r) || r <= 0) {
     setError('Masukkan nilai jari-jari yang valid.');
     setLuas('');
   } else {
        setError('');
        setLuas(6 * r * r);
   }
  };

  const hitungVolume = () => {
   const r = parseFloat(rusuk);

   if(isNaN(r) || r <= 0) {
     setError('Masukkan nilai jari-jari yang valid.');
     setVolume('');
   } else {
        setError('');
        setVolume(r * r * r);
   }
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-4 relative"
      style={{
        backgroundImage: "url('/ruang.jpg')", // Ganti dengan path gambar yang sesuai
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay transparan */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <motion.div
        className="relative z-10 w-full max-w-md"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Paper
          elevation={10}
          sx={{
            padding: 4,
            backgroundColor: 'rgba(16, 105, 238, 0.445)', // Transparan
            backdropFilter: 'blur(10px)', // Efek blur
            borderRadius: '10px',
            color: 'white',
          }}
        >
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
            Kalkulator Kubus
          </Typography>
          <Typography variant="subtitle1" align="center" gutterBottom sx={{ fontWeight: 'bold', color: 'white' }}>
            Oleh: Arthawan Pratama
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Rusuk (cm)"
                type="number"
                value={rusuk}
                onChange={(e) => setRusuk(e.target.value)}
                variant="outlined"
                 InputLabelProps={{ style: { color: 'white' } }} // Label putih
                  InputProps={{
                    sx: {
                      color: 'white', // Warna teks input putih
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'black', // Outline putih
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'black', // Outline putih saat hover
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'black', // Outline putih saat fokus
                      },
                    },
                  }}
                  sx={{ backgroundColor: 'rgba(128, 128, 128, 0.5)', borderRadius: '4px' }}
              />
            </Grid>
            {error && (
              <Grid item xs={12}>
                <Typography color="error" align="center" sx={{ fontWeight: 'bold' }}>
                  {error}
                </Typography>
              </Grid>
            )}
            <Grid item xs={12} md={6}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-500 text-white font-bold py-2 px-3 rounded-lg text-sm"
                onClick={hitungLuas}
              >
                Hitung Luas Permukaan
              </motion.button>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-green-500 text-white font-bold py-4 px-3 rounded-lg text-sm"
                onClick={hitungVolume}
              >
                Hitung Volume
              </motion.button>
            </Grid>
            {luas && !error && (
              <Grid item xs={12}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center text-white font-bold text-lg"
                >
                  Luas Permukaan: {`${luas.toFixed(2)} cm²`}
                </motion.div>
              </Grid>
            )}
            {volume && !error && (
              <Grid item xs={12}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center text-white font-bold text-lg"
                >
                  Volume: {`${volume.toFixed(2)} cm³`}
                </motion.div>
              </Grid>
            )}
          </Grid>
        </Paper>
      </motion.div>
    </div>
  );
}

export default Page;
