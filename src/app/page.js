'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/background_math.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay transparan */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Konten utama */}
      <motion.div
        className="text-center mb-8 z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-bold font-mono mb-6 text-white text-stroke-sm md:text-stroke-lg drop-shadow-[2px_2px_0_black]">Kelompok 3</h1>
        <h2 className="text-5xl text-white font-bold font-mono text-stroke-sm md:text-stroke-lg drop-shadow-[1px_1px_0_black]">XI RPL 4</h2>
      </motion.div>

      {/* Tombol dengan animasi */}
      <motion.div
        className="flex flex-row space-x-4 z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Link href="/kalkulator-bangun-datar">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-64 bg-blue-500 text-white text-center py-3 px-6 rounded-lg font-bold text-xl hover:bg-blue-600 transition duration-300"
          >
            Kalkulator Bangun Datar
          </motion.button>
        </Link>
        <Link href="/kalkulator-bangun-ruang">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
