'use client';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Import framer-motion

export default function KalkulatorBangunRuang() {
  const bangunRuang = [
    { name: 'Kubus', link: '/kalkulator-bangun-ruang/kubus' },
    { name: 'Balok', link: '/kalkulator-bangun-ruang/balok' },
    { name: 'Tabung', link: '/kalkulator-bangun-ruang/tabung' },
    { name: 'Kerucut', link: '/kalkulator-bangun-ruang/kerucut' },
    { name: 'Bola', link: '/kalkulator-bangun-ruang/bola' },
    { name: 'Prisma Segitiga', link: '/kalkulator-bangun-ruang/prisma-segitiga' },
    { name: 'Limas Segiempat', link: '/kalkulator-bangun-ruang/limas-segiempat' },
    { name: 'Limas Segitiga', link: '/kalkulator-bangun-ruang/limas-segitiga' },
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4 relative">
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
      {/* Overlay transparan */}

      {/* Judul dengan animasi */}
      <motion.h1
        className="text-5xl font-bold mb-10 text-white z-10 font-mono text-stroke-sm md:text-stroke-lg drop-shadow-[1px_3px_0_black]"
        initial={{ opacity: 0, y: -50 }} // Animasi awal
        animate={{ opacity: 1, y: 0 }} // Animasi saat muncul
        transition={{ duration: 1, ease: "easeOut" }} // Animasi lebih smooth
      >
        Kalkulator Bangun Ruang
      </motion.h1>

      {/* Grid tombol dengan animasi */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 z-10 font-bold">
        {bangunRuang.map((bangun, index) => (
          <Link key={index} href={bangun.link}>
            <motion.button
              className="w-48 bg-blue-500 text-white text-center text-xl py-6 px-3 rounded-lg hover:bg-blue-600 transition duration-300 active:scale-95"
              whileHover={{ scale: 1.05 }} // Animasi saat hover
              whileTap={{ scale: 0.95 }} // Animasi saat diklik
              initial={{ opacity: 0, y: 50 }} // Animasi awal
              animate={{ opacity: 1, y: 0 }} // Animasi saat muncul
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut", // Animasi lebih smooth
              }}
            >
              {bangun.name}
            </motion.button>
          </Link>
        ))}
      </div>
    </div>
  );
}