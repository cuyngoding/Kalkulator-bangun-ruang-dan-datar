'use client';
import React, { useState } from 'react';
import { TextField, Typography, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';

function LayangLayang() {
  const [diagonal1, setDiagonal1] = useState('');
  const [diagonal2, setDiagonal2] = useState('');
  const [sisi1, setSisi1] = useState('');
  const [sisi2, setSisi2] = useState('');
  const [luas, setLuas] = useState('');
  const [keliling, setKeliling] = useState('');
  const [error, setError] = useState('');

  const hitungLuas = () => {
    const d1 = parseFloat(diagonal1);
    const d2 = parseFloat(diagonal2);
    if (isNaN(d1) || isNaN(d2) || d1 <= 0 || d2 <= 0) {
      setError('Masukkan nilai diagonal yang valid.');
      setLuas('');
    } else {
      setError('');
      setLuas(0.5 * d1 * d2);
    }
  };

  const hitungKeliling = () => {
    const s1 = parseFloat(sisi1);
    const s2 = parseFloat(sisi2);
    if (isNaN(s1) || isNaN(s2) || s1 <= 0 || s2 <= 0) {
      setError('Masukkan nilai sisi yang valid.');
      setKeliling('');
    } else {
      setError('');
      setKeliling(2 * (s1 + s2));
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative bg-cover bg-center" style={{ backgroundImage: "url('/ruang.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <motion.div className="relative z-10 w-full max-w-md" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <Paper elevation={10} sx={{ padding: 4, backgroundColor: 'rgba(247, 139, 7, 0.445)', backdropFilter: 'blur(10px)', borderRadius: '10px', color: 'white' }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>Kalkulator Layang-Layang</Typography>
           <Typography variant="subtitle1" align="center" gutterBottom sx={{ fontWeight: 'bold', color: 'white' }}>
                                  Oleh: Andi Muhammad Afzal Mirza
                                </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Diagonal 1 (cm)"
                type="number"
                value={diagonal1}
                onChange={(e) => setDiagonal1(e.target.value)}
                variant="outlined"
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ sx: { color: 'white', '& .MuiOutlinedInput-notchedOutline': { borderColor: 'black' } } }}
                sx={{ backgroundColor: 'rgba(128, 128, 128, 0.5)', borderRadius: '4px' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Diagonal 2 (cm)"
                type="number"
                value={diagonal2}
                onChange={(e) => setDiagonal2(e.target.value)}
                variant="outlined"
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ sx: { color: 'white', '& .MuiOutlinedInput-notchedOutline': { borderColor: 'black' } } }}
                sx={{ backgroundColor: 'rgba(128, 128, 128, 0.5)', borderRadius: '4px' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Sisi 1 (cm)"
                type="number"
                value={sisi1}
                onChange={(e) => setSisi1(e.target.value)}
                variant="outlined"
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ sx: { color: 'white', '& .MuiOutlinedInput-notchedOutline': { borderColor: 'black' } } }}
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
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ sx: { color: 'white', '& .MuiOutlinedInput-notchedOutline': { borderColor: 'black' } } }}
                sx={{ backgroundColor: 'rgba(128, 128, 128, 0.5)', borderRadius: '4px' }}
              />
            </Grid>
            {error && (
              <Grid item xs={12}>
                <Typography color="error" align="center" sx={{ fontWeight: 'bold' }}>{error}</Typography>
              </Grid>
            )}
            <Grid item xs={12} md={6}>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full bg-blue-500 text-white font-bold py-4 px-3 rounded-lg text-sm" onClick={hitungLuas}>
                Hitung Luas
              </motion.button>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full bg-green-500 text-white font-bold py-4 px-3 rounded-lg text-sm" onClick={hitungKeliling}>
                Hitung Keliling
              </motion.button>
            </Grid>
            {luas && !error && (
              <Grid item xs={12}>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center text-white font-bold text-lg">
                  Luas: {`${luas.toFixed(2)} cm²`}
                </motion.div>
              </Grid>
            )}
            {keliling && !error && (
              <Grid item xs={12}>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center text-white font-bold text-lg">
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

export default LayangLayang;