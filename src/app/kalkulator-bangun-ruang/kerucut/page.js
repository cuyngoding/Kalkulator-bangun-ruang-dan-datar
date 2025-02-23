'use client';
import React, { useState } from 'react';
import { TextField, Typography, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';

function Kerucut() {
  const [jariJari, setJariJari] = useState('');
  const [tinggi, setTinggi] = useState('');
  const [garisPelukis, setGarisPelukis] = useState('');
  const [luasPermukaan, setLuasPermukaan] = useState('');
  const [luasSelimut, setLuasSelimut] = useState('');
  const [volume, setVolume] = useState('');
  const [error, setError] = useState('');

  const hitungLuasSelimut = () => {
    const r = parseFloat(jariJari);
    const s = parseFloat(garisPelukis);

    if (isNaN(r) || isNaN(s) || r <= 0 || s <= 0) {
      setError('Masukkan nilai jari-jari dan garis pelukis yang valid.');
      setLuasSelimut('');
    } else {
      setError('');
      setLuasSelimut(Math.PI * r * s);
    }
  };

  const hitungLuasPermukaan = () => {
    const r = parseFloat(jariJari);
    const s = parseFloat(garisPelukis);

    if (isNaN(r) || isNaN(s) || r <= 0 || s <= 0) {
      setError('Masukkan nilai jari-jari dan garis pelukis yang valid.');
      setLuasPermukaan('');
    } else {
      setError('');
      setLuasPermukaan(Math.PI * r * s + Math.PI * r * r);
    }
  };

  const hitungVolume = () => {
    const r = parseFloat(jariJari);
    const t = parseFloat(tinggi);

    if (isNaN(r) || isNaN(t) || r <= 0 || t <= 0) {
      setError('Masukkan nilai jari-jari dan tinggi yang valid.');
      setVolume('');
    } else {
      setError('');
      setVolume((1 / 3) * Math.PI * r * r * t);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative bg-cover bg-center" style={{ backgroundImage: "url('/ruang.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <motion.div className="relative z-10 w-full max-w-md" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <Paper elevation={10} sx={{ padding: 4, backgroundColor: 'rgba(51, 247, 7, 0.445)', backdropFilter: 'blur(10px)', borderRadius: '10px', color: 'white' }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>Kalkulator Kerucut</Typography>
          <Typography variant="subtitle1" align="center" gutterBottom sx={{ fontWeight: 'bold', color: 'white' }}>
            Oleh: Muhammad Abhy
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Jari-Jari (cm)"
                type="number"
                value={jariJari}
                onChange={(e) => setJariJari(e.target.value)}
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
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Garis Pelukis (cm)"
                type="number"
                value={garisPelukis}
                onChange={(e) => setGarisPelukis(e.target.value)}
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
            <Grid item xs={12} md={4}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-500 text-white font-bold py-2 px-3 rounded-lg text-sm"
                onClick={hitungLuasSelimut}
              >
                Hitung Luas Selimut
              </motion.button>
            </Grid>
            <Grid item xs={12} md={4}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-green-500 text-white font-bold py-2 px-3 rounded-lg text-sm"
                onClick={hitungLuasPermukaan}
              >
                Hitung Luas Permukaan
              </motion.button>
            </Grid>
            <Grid item xs={12} md={4}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-purple-500 text-white font-bold py-2 px-3 rounded-lg text-sm"
                onClick={hitungVolume}
              >
                Hitung Volume
              </motion.button>
            </Grid>
            {luasSelimut && !error && (
              <Grid item xs={12}>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center text-white font-bold text-lg">
                  Luas Selimut: {`${luasSelimut.toFixed(2)} cm²`}
                </motion.div>
              </Grid>
            )}
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

export default Kerucut;