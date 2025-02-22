'use client';
import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Paper, Grid } from '@mui/material';

function Page() {
  const [panjang, setPanjang] = useState('');
  const [lebar, setLebar] = useState('');
  const [tinggi, setTinggi] = useState('');
  const [luas, setLuas] = useState('');
  const [volume, setVolume] = useState('');
  const [error, setError] = useState('');

  const hitungLuas = () => {
    const p = parseFloat(panjang);
    const l = parseFloat(lebar);
    const t = parseFloat(tinggi);

    if (isNaN(p) || isNaN(l) || isNaN(t) || p <= 0 || l <= 0 || t <= 0) {
      setError('Masukkan nilai panjang, lebar, dan tinggi yang valid.');
      setLuas('');
    } else {
      setError('');
      setLuas(2 * ((p * l) + (p * t) + (l * t)));
    }
  };

  const hitungVolume = () => {
    const p = parseFloat(panjang);
    const l = parseFloat(lebar);
    const t = parseFloat(tinggi);

    if (isNaN(p) || isNaN(l) || isNaN(t) || p <= 0 || l <= 0 || t <= 0) {
      setError('Masukkan nilai panjang, lebar, dan tinggi yang valid.');
      setVolume('');
    } else {
      setError('');
      setVolume(p * l * t);
    }
  };

  return (
    <div className="min-h-screen bg-gray-500 flex flex-col items-center justify-center p-4">
      <Paper
        elevation={10} // Shadow lebih tebal
        sx={{
          padding: 4,
          marginTop: 4,
          backgroundColor: '#808588', // Warna background Paper sedikit lebih terang
          color: 'white', // Warna font putih
        }}
      >
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
          Kalkulator Balok
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom sx={{ fontWeight: 'bold', color: 'white' }}>
          Oleh: Ugrasena Wira Nurrahman
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Panjang"
              type="number"
              value={panjang}
              onChange={(e) => setPanjang(e.target.value)}
              variant="outlined"
              sx={{
                backgroundColor: 'white', // Warna background input putih
                borderRadius: '4px',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white', // Outline putih
                  },
                  '&:hover fieldset': {
                    borderColor: 'white', // Outline putih saat hover
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Lebar"
              type="number"
              value={lebar}
              onChange={(e) => setLebar(e.target.value)}
              variant="outlined"
              sx={{
                backgroundColor: 'white', // Warna background input putih
                borderRadius: '4px',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white', // Outline putih
                  },
                  '&:hover fieldset': {
                    borderColor: 'white', // Outline putih saat hover
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Tinggi"
              type="number"
              value={tinggi}
              onChange={(e) => setTinggi(e.target.value)}
              variant="outlined"
              sx={{
                backgroundColor: 'white', // Warna background input putih
                borderRadius: '4px',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white', // Outline putih
                  },
                  '&:hover fieldset': {
                    borderColor: 'white', // Outline putih saat hover
                  },
                },
              }}
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
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={hitungLuas}
              sx={{ fontWeight: 'bold' }}
            >
              Hitung Luas Permukaan
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              onClick={hitungVolume}
              sx={{ fontWeight: 'bold' }}
            >
              Hitung Volume
            </Button>
          </Grid>
          {luas && !error && (
            <Grid item xs={12}>
              <Typography variant="h6" align="center" sx={{ fontWeight: 'bold', color: 'white' }}>
                Luas Permukaan: {luas}
              </Typography>
            </Grid>
          )}
          {volume && !error && (
            <Grid item xs={12}>
              <Typography variant="h6" align="center" sx={{ fontWeight: 'bold', color: 'white' }}>
                Volume: {volume}
              </Typography>
            </Grid>
          )}
        </Grid>
      </Paper>
    </div>
  );
}

export default Page;