'use client';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Import framer-motion

export default function KalkulatorBangunDatar() {
  const bangunDatar = [
    { name: 'Persegi', link: '/kalkulator-bangun-datar/persegi' },
    { name: 'Persegi Panjang', link: '/kalkulator-bangun-datar/persegi-panjang' },
    { name: 'Segitiga', link: '/kalkulator-bangun-datar/segitiga' },
    { name: 'Lingkaran', link: '/kalkulator-bangun-datar/lingkaran' },
    { name: 'Jajar Genjang', link: '/kalkulator-bangun-datar/jajar-genjang' },
    { name: 'Belah Ketupat', link: '/kalkulator-bangun-datar/belah-ketupat' },
    { name: 'Trapesium', link: '/kalkulator-bangun-datar/trapesium' },
    { name: 'Layang-Layang', link: '/kalkulator-bangun-datar/layang-layang' },
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4 relative"
      style={{
        backgroundImage: "url('/ruang.jpg')", // Gambar background
        backgroundSize: 'cover', // Menutupi seluruh layar
        backgroundPosition: 'center', // Posisi gambar di tengah
      }}
    >
      {/* Overlay transparan */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50" // Efek transparansi
      ></div>

      {/* Judul dengan animasi */}
      <motion.h1
        className="text-5xl font-bold mb-10 text-white z-10 font-mono"
        initial={{ opacity: 0, y: -50 }} // Animasi awal
        animate={{ opacity: 1, y: 0 }} // Animasi saat muncul
        transition={{ duration: 1 }} // Durasi animasi
      >
        Kalkulator Bangun Datar
      </motion.h1>

      {/* Grid tombol dengan animasi */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 z-10 font-bold">
        {bangunDatar.map((bangun, index) => (
          <Link key={index} href={bangun.link}>
            <motion.button
              className="w-48 bg-blue-500 text-white text-center text-xl py-6 px-4 rounded-lg hover:bg-blue-600 transition duration-300 active:scale-95"
              whileHover={{ scale: 1.05 }} // Animasi saat hover
              whileTap={{ scale: 0.95 }} // Animasi saat diklik
              initial={{ opacity: 0, y: 50 }} // Animasi awal
              animate={{ opacity: 1, y: 0 }} // Animasi saat muncul
              transition={{ duration: 0.5, delay: index * 0.1 }} // Durasi animasi dengan delay
            >
              {bangun.name}
            </motion.button>
          </Link> 
        ))}
      </div>
    </div>
  );
}