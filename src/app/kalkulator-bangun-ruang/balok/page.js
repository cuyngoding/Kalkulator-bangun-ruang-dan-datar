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
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 4, backgroundColor: '#f5f5f5' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Kalkulator Balok
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom>
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
            />
          </Grid>
          {error && (
            <Grid item xs={12}>
              <Typography color="error" align="center">
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
            >
              Hitung Volume
            </Button>
          </Grid>
          {luas && !error && (
            <Grid item xs={12}>
              <Typography variant="h6" align="center">
                Luas Permukaan: {luas}
              </Typography>
            </Grid>
          )}
          {volume && !error && (
            <Grid item xs={12}>
              <Typography variant="h6" align="center">
                Volume: {volume}
              </Typography>
            </Grid>
          )}
        </Grid>
      </Paper>
    </Container>
  );
}

export default Page;