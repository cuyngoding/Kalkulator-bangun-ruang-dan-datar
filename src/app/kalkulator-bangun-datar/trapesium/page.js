'use client';
import React, { useState } from 'react';
import { TextField, Typography, Container, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';

function Page() {
  const [tinggi, setTinggi] = useState('');
  const [sisi1,setSisi1] = useState('');
  const [sisi2,setSisi2] = useState('');
    const [sisi3,setSisi3] = useState('');
    const [sisi4,setSisi4] = useState('');
  const [luas, setLuas] = useState('');
  const [keliling, setKeliling] = useState('');
  const [error, setError] = useState('');

  const hitungLuas = () => {
    const a = parseFloat(sisi1);
    const b = parseFloat(sisi2);
    const t = parseFloat(tinggi);

    if (isNaN(a) || isNaN(b) || isNaN(t) || a <= 0 || b <= 0 || t <= 0) {
      setError('Masukkan nilai alas dan tinggi yang valid.');
      setLuas('');
    } else {
      setError('');
      setLuas(0.5 * (a + b) * t);
    }
  };

  const hitungKeliling = () => {
    const a = parseFloat(sisi1);
    const b = parseFloat(sisi2);
    const c = parseFloat(sisi3);
    const d = parseFloat(sisi4);

    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || a <= 0 || b <= 0 || c <= 0 || d <= 0) {
      setError('Masukkan nilai sisi yang valid.');
      setKeliling('');
    } else {
      setError('');
      setKeliling(a + b + c + d);
    }
  };

  return (
   <div 
        className="min-h-screen flex flex-col items-center justify-center p-4 relative"
       
      >
        <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/background_math_datar.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay transparan */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      {/* Overlay transparan */}
  
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
              backgroundColor: 'rgba(13, 147, 33, 0.6)', // Transparan
              backdropFilter: 'blur(10px)', // Efek blur
              borderRadius: '10px',
              color: 'white',
            }}
          >
            <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
              Kalkulator Trapesium
            </Typography>
            <Typography variant="subtitle1" align="center" gutterBottom sx={{ fontWeight: 'bold', color: 'white' }}>
              Oleh: Muhammad Abhy
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Sisi 1 (cm)"
                  type="number"
                  value={sisi1}
                  onChange={(e) => setSisi1(e.target.value)}
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
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Sisi 2 (cm)"
                  type="number"
                  value={sisi2}
                  onChange={(e) => setSisi2(e.target.value)}
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
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Sisi 3 (cm)"
                  type="number"
                  value={sisi3}
                  onChange={(e) => setSisi3(e.target.value)}
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
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Sisi 4 (cm)"
                  type="number"
                  value={sisi4}
                  onChange={(e) => setSisi4(e.target.value)}
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
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Tinggi (cm)"
                  type="number"
                  value={tinggi}
                  onChange={(e) => setTinggi(e.target.value)}
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
                  className="w-full bg-blue-500 text-white font-bold py-4 px-3 rounded-lg text-sm"
                  onClick={hitungLuas}
                >
                  Hitung Luas
                </motion.button>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-green-500 text-white font-bold py-4 px-3 rounded-lg text-sm"
                  onClick={hitungKeliling}
                >
                  Hitung Keliling
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
                    Luas: {`${luas.toFixed(2)} cm²`}
                  </motion.div>
                </Grid>
              )}
              {keliling && !error && (
                <Grid item xs={12}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center text-white font-bold text-lg"
                  >
                    Keliling: {`${keliling.toFixed(2)} cm`}
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
