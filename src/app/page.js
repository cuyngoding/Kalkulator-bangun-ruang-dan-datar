'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Untuk animasi

function Page() {
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

      {/* Konten utama */}
      <motion.div
        className="text-center mb-8 z-10" // z-10 untuk memastikan konten di atas overlay
        initial={{ opacity: 0, y: -50 }} // Animasi awal
        animate={{ opacity: 1, y: 0 }} // Animasi saat muncul
        transition={{ duration: 1 }} // Durasi animasi
      >
        <h1 className="text-6xl font-bold font-mono mb-6 text-white">Kelompok 3</h1>
        <h2 className="text-4xl text-white font-bold font-mono">XI RPL 4</h2>
      </motion.div>

      {/* Tombol dengan animasi */}
      <motion.div
        className="flex flex-row space-x-4 z-10" // z-10 untuk memastikan tombol di atas overlay
        initial={{ opacity: 0, y: 50 }} // Animasi awal
        animate={{ opacity: 1, y: 0 }} // Animasi saat muncul
        transition={{ duration: 1, delay: 0.5 }} // Durasi animasi dengan delay
      >
        <Link href="/kalkulator-bangun-datar">
          <motion.button
            whileHover={{ scale: 1.05 }} // Animasi saat hover
            whileTap={{ scale: 0.95 }} // Animasi saat diklik
            className="w-64 bg-blue-500 text-white text-center py-3 px-6 rounded-lg font-bold text-xl hover:bg-blue-600 transition duration-300"
          >
            Kalkulator Bangun Datar
          </motion.button>
        </Link>
        <Link href="/kalkulator-bangun-ruang">
          <motion.button
            whileHover={{ scale: 1.05 }} // Animasi saat hover
            whileTap={{ scale: 0.95 }} // Animasi saat diklik
            className="w-64 bg-blue-500 text-white text-center py-3 px-6 rounded-lg font-bold text-xl hover:bg-blue-600 transition duration-300"
          >
            Kalkulator Bangun Ruang
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}

export default Page;