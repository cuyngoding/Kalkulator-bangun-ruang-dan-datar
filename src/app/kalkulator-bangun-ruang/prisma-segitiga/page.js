'use client';
import React, { useState } from 'react';
import { TextField, Typography, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';

function PrismaSegitiga() {
  const [sisi1, setSisi1] = useState('');
  const [sisi2, setSisi2] = useState('');
  const [sisi3, setSisi3] = useState('');
  const [alas, setAlas] = useState('');
  const [tinggiSegitiga, setTinggiSegitiga] = useState('');
  const [tinggiPrisma, setTinggiPrisma] = useState('');
  const [luasSelimut, setLuasSelimut] = useState('');
  const [luasPermukaan, setLuasPermukaan] = useState('');
  const [volume, setVolume] = useState('');
  const [error, setError] = useState('');

  const hitungLuasSelimut = () => {
    const s1 = parseFloat(sisi1);
    const s2 = parseFloat(sisi2);
    const s3 = parseFloat(sisi3);
    const t = parseFloat(tinggiPrisma);

    if (isNaN(s1) || isNaN(s2) || isNaN(s3) || isNaN(t) || s1 <= 0 || s2 <= 0 || s3 <= 0 || t <= 0) {
      setError('Masukkan nilai sisi dan tinggi prisma yang valid.');
      setLuasSelimut('');
    } else {
      setError('');
      const kelilingAlas = s1 + s2 + s3;
      setLuasSelimut(kelilingAlas * t);
    }
  };

  const hitungLuasPermukaan = () => {
    const s1 = parseFloat(sisi1);
    const s2 = parseFloat(sisi2);
    const s3 = parseFloat(sisi3);
    const a = parseFloat(alas);
    const tSegitiga = parseFloat(tinggiSegitiga);
    const tPrisma = parseFloat(tinggiPrisma);

    if (isNaN(s1) || isNaN(s2) || isNaN(s3) || isNaN(a) || isNaN(tSegitiga) || isNaN(tPrisma) || s1 <= 0 || s2 <= 0 || s3 <= 0 || a <= 0 || tSegitiga <= 0 || tPrisma <= 0) {
      setError('Masukkan nilai sisi, alas, tinggi segitiga, dan tinggi prisma yang valid.');
      setLuasPermukaan('');
    } else {
      setError('');
      const kelilingAlas = s1 + s2 + s3;
      const luasAlas = (a * tSegitiga) / 2;
      setLuasPermukaan(kelilingAlas * tPrisma + 2 * luasAlas);
    }
  };

  const hitungVolume = () => {
    const a = parseFloat(alas);
    const tSegitiga = parseFloat(tinggiSegitiga);
    const tPrisma = parseFloat(tinggiPrisma);

    if (isNaN(a) || isNaN(tSegitiga) || isNaN(tPrisma) || a <= 0 || tSegitiga <= 0 || tPrisma <= 0) {
      setError('Masukkan nilai alas, tinggi segitiga, dan tinggi prisma yang valid.');
      setVolume('');
    } else {
      setError('');
      const luasAlas = (a * tSegitiga) / 2;
      setVolume(luasAlas * tPrisma);
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
        <Paper elevation={10} sx={{ padding: 4, backgroundColor: 'rgba(42, 13, 147, 0.676)', backdropFilter: 'blur(10px)', borderRadius: '10px', color: 'white' }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>Kalkulator Prisma Segitiga</Typography>
            <Typography variant="subtitle1" align="center" gutterBottom sx={{ fontWeight: 'bold', color: 'white' }}>
                                Oleh: Muh.Rasya Akbar Bachtiar
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
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Sisi 3 (cm)"
                type="number"
                value={sisi3}
                onChange={(e) => setSisi3(e.target.value)}
                variant="outlined"
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ sx: { color: 'white', '& .MuiOutlinedInput-notchedOutline': { borderColor: 'black' } } }}
                sx={{ backgroundColor: 'rgba(128, 128, 128, 0.5)', borderRadius: '4px' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Alas Segitiga (cm)"
                type="number"
                value={alas}
                onChange={(e) => setAlas(e.target.value)}
                variant="outlined"
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ sx: { color: 'white', '& .MuiOutlinedInput-notchedOutline': { borderColor: 'black' } } }}
                sx={{ backgroundColor: 'rgba(128, 128, 128, 0.5)', borderRadius: '4px' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Tinggi Segitiga (cm)"
                type="number"
                value={tinggiSegitiga}
                onChange={(e) => setTinggiSegitiga(e.target.value)}
                variant="outlined"
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ sx: { color: 'white', '& .MuiOutlinedInput-notchedOutline': { borderColor: 'black' } } }}
                sx={{ backgroundColor: 'rgba(128, 128, 128, 0.5)', borderRadius: '4px' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Tinggi Prisma (cm)"
                type="number"
                value={tinggiPrisma}
                onChange={(e) => setTinggiPrisma(e.target.value)}
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

export default PrismaSegitiga;