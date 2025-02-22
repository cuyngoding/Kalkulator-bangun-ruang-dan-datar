"use client";
import React from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter dari Next.js
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import CalculateIcon from '@mui/icons-material/Calculate';
import Typography from '@mui/material/Typography';

function Navbar() {
  const router = useRouter(); // Inisialisasi useRouter

  // Fungsi untuk kembali ke halaman sebelumnya
  const handleBack = () => {
    router.back();
  };

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static">
        <Toolbar variant="dense">
          {/* Tombol Back */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="back"
            onClick={handleBack} // Panggil fungsi handleBack saat tombol diklik
            sx={{ mr: 2 }}
          >
            <ArrowBackOutlinedIcon />
          </IconButton>

          {/* Tombol Calculator */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="calculator"
            sx={{ mr: 2 }}
          >
            <CalculateIcon />
          </IconButton>

          {/* Judul Navbar */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className='text-right'>
            Kalkulator Bangun Ruang & Datar
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;