'use client';
import React, { useState } from 'react';
import { TextField, Typography, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';

function LimasSegiEmpat() {
  const [sisiAlas, setSisiAlas] = useState('');
  const [tinggi, setTinggi] = useState('');
  const [luasPermukaan, setLuasPermukaan] = useState('');
  const [volume, setVolume] = useState('');
  const [error, setError] = useState('');

  const hitungLuasPermukaan = () => {
    const s = parseFloat(sisiAlas);
    const t = parseFloat(tinggi);
    if (isNaN(s) || isNaN(t) || s <= 0 || t <= 0) {
      setError('Masukkan nilai sisi alas dan tinggi yang valid.');
      setLuasPermukaan('');
    } else {
      setError('');
      // Tinggi segitiga sisi tegak (dianggap sama dengan tinggi limas)
      const tSegitiga = t;
      // Luas alas (persegi)
      const luasAlas = s * s;
      // Luas empat sisi tegak (segitiga)
      const luasSisiTegak = 4 * (0.5 * s * tSegitiga);
      // Total luas permukaan
      setLuasPermukaan(luasAlas + luasSisiTegak);
    }
  };
  
  const hitungVolume = () => {
    const s = parseFloat(sisiAlas);
    const t = parseFloat(tinggi);
    if (isNaN(s) || isNaN(t) || s <= 0 || t <= 0) {
      setError('Masukkan nilai sisi alas dan tinggi yang valid.');
      setVolume('');
    } else {
      setError('');
      // Volume limas segi empat
      setVolume((1 / 3) * s * s * t);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative bg-cover bg-center">
       <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/ruang.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay transparan */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <motion.div className="relative z-10 w-full max-w-md" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <Paper elevation={10} sx={{ padding: 4, backgroundColor: 'rgba(13, 91, 147, 0.676)', backdropFilter: 'blur(10px)', borderRadius: '10px', color: 'white' }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>Kalkulator Limas Segi Empat</Typography>
          <Typography variant="subtitle1" align="center" gutterBottom sx={{ fontWeight: 'bold', color: 'white' }}>Oleh: Nuraqilah</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Sisi Alas (cm)"
                type="number"
                value={sisiAlas}
                onChange={(e) => setSisiAlas(e.target.value)}
                variant="outlined"
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ sx: { color: 'white', '& .MuiOutlinedInput-notchedOutline': { borderColor: 'black' } } }}
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
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full bg-blue-500 text-white font-bold py-4 px-3 rounded-lg text-sm" onClick={hitungLuasPermukaan}>
                Hitung Luas Permukaan
              </motion.button>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full bg-green-500 text-white font-bold py-6 px-3 rounded-lg text-sm" onClick={hitungVolume}>
                Hitung Volume
              </motion.button>
            </Grid>
            {luasPermukaan && !error && (
              <Grid item xs={12}>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center text-white font-bold text-lg">
                  Luas Permukaan: {`${luasPermukaan.toFixed(2)} cm²`}
                </motion.div>
              </Grid>
            )}
            {volume && !error && (
              <Grid item xs={12}>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center text-white font-bold text-lg">
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

export default LimasSegiEmpat;
