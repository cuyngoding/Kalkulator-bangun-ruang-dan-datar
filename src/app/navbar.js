"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import CalculateIcon from "@mui/icons-material/Calculate";
import Typography from "@mui/material/Typography";

function Navbar() {
  const router = useRouter();
  const pathname = usePathname(); // Dapatkan path halaman saat ini

  // Tentukan halaman yang harus tetap hijau tua
  const isGreenNavbar =
    pathname.startsWith("/kalkulator-bangun-datar")

  // Warna navbar: hijau tua jika di halaman tertentu, biru polos di halaman lain
  const navbarColor = isGreenNavbar ? "#1B5E20" : "#2b7fffF"; // Hijau tua atau biru polos

  // Fungsi untuk kembali ke halaman sebelumnya
  const handleBack = () => {
    router.back();
  };

  // Fungsi untuk kembali ke halaman utama
  const handleHome = () => {
    router.push("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: navbarColor,
          transition: "background-color 0.3s ease-in-out", // Efek transisi warna
        }}
      >
        <Toolbar variant="dense">
          {/* Tombol Back */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="back"
            onClick={handleBack}
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
            onClick={handleHome}
          >
            <CalculateIcon />
          </IconButton>

          {/* Judul Navbar */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="text-right">
            Kalkulator Bangun Ruang & Datar
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
