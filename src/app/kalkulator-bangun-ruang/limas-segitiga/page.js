'use client';
import React, { useState } from 'react';
import { TextField, Typography, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';

function LimasSegitiga() {
  const [alas, setAlas] = useState('');
  const [tinggiSegitiga, setTinggiSegitiga] = useState('');
  const [tinggiLimas, setTinggiLimas] = useState('');
  const [luasSisi1, setLuasSisi1] = useState('');
  const [luasSisi2, setLuasSisi2] = useState('');
  const [luasSisi3, setLuasSisi3] = useState('');
  const [luasSisi4, setLuasSisi4] = useState('');
  const [luasPermukaan, setLuasPermukaan] = useState('');
  const [volume, setVolume] = useState('');
  const [error, setError] = useState('');

  const hitungLuasPermukaan = () => {
    const ls1 = parseFloat(luasSisi1);
    const ls2 = parseFloat(luasSisi2);
    const ls3 = parseFloat(luasSisi3);
    const ls4 = parseFloat(luasSisi4);

    if (isNaN(ls1) || isNaN(ls2) || isNaN(ls3) || isNaN(ls4) || ls1 <= 0 || ls2 <= 0 || ls3 <= 0 || ls4 <= 0) {
      setError('Masukkan nilai luas sisi yang valid.');
      setLuasPermukaan('');
    } else {
      setError('');
      setLuasPermukaan(ls1 + ls2 + ls3 + ls4);
    }
  };

  const hitungVolume = () => {
    const a = parseFloat(alas);
    const tSegitiga = parseFloat(tinggiSegitiga);
    const tLimas = parseFloat(tinggiLimas);

    if (isNaN(a) || isNaN(tSegitiga) || isNaN(tLimas) || a <= 0 || tSegitiga <= 0 || tLimas <= 0) {
      setError('Masukkan nilai alas, tinggi segitiga, dan tinggi limas yang valid.');
      setVolume('');
    } else {
      setError('');
      const luasAlas = (a * tSegitiga) / 2;
      setVolume((1 / 3) * luasAlas * tLimas);
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
        <Paper elevation={10} sx={{ padding: 4, backgroundColor: 'rgba(13, 147, 145, 0.676)', backdropFilter: 'blur(10px)', borderRadius: '10px', color: 'white' }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>Kalkulator Limas Segitiga</Typography>
           <Typography variant="subtitle1" align="center" gutterBottom sx={{ fontWeight: 'bold', color: 'white' }}>
                      Oleh: Davique Ananda Perwira
                    </Typography>
          <Grid container spacing={3}>
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
                label="Tinggi Limas (cm)"
                type="number"
                value={tinggiLimas}
                onChange={(e) => setTinggiLimas(e.target.value)}
                variant="outlined"
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ sx: { color: 'white', '& .MuiOutlinedInput-notchedOutline': { borderColor: 'black' } } }}
                sx={{ backgroundColor: 'rgba(128, 128, 128, 0.5)', borderRadius: '4px' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Luas Sisi 1 (cm)"
                type="number"
                value={luasSisi1}
                onChange={(e) => setLuasSisi1(e.target.value)}
                variant="outlined"
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ sx: { color: 'white', '& .MuiOutlinedInput-notchedOutline': { borderColor: 'black' } } }}
                sx={{ backgroundColor: 'rgba(128, 128, 128, 0.5)', borderRadius: '4px' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Luas Sisi 2 (cm)"
                type="number"
                value={luasSisi2}
                onChange={(e) => setLuasSisi2(e.target.value)}
                variant="outlined"
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ sx: { color: 'white', '& .MuiOutlinedInput-notchedOutline': { borderColor: 'black' } } }}
                sx={{ backgroundColor: 'rgba(128, 128, 128, 0.5)', borderRadius: '4px' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Luas Sisi 3 (cm)"
                type="number"
                value={luasSisi3}
                onChange={(e) => setLuasSisi3(e.target.value)}
                variant="outlined"
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ sx: { color: 'white', '& .MuiOutlinedInput-notchedOutline': { borderColor: 'black' } } }}
                sx={{ backgroundColor: 'rgba(128, 128, 128, 0.5)', borderRadius: '4px' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Luas Sisi 4 (cm)"
                type="number"
                value={luasSisi4}
                onChange={(e) => setLuasSisi4(e.target.value)}
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
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-500 text-white font-bold py-2 px-3 rounded-lg text-sm"
                onClick={hitungLuasPermukaan}
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
            {luasPermukaan && !error && (
              <Grid item xs={12}>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center text-white font-bold text-lg">
                  Luas Permukaan: {luasPermukaan.toFixed(2)}
                </motion.div>
              </Grid>
            )}
            {volume && !error && (
              <Grid item xs={12}>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center text-white font-bold text-lg">
                  Volume: {volume.toFixed(2)}
                </motion.div>
              </Grid>
            )}
          </Grid>
        </Paper>
      </motion.div>
    </div>
  );
}

export default LimasSegitiga;