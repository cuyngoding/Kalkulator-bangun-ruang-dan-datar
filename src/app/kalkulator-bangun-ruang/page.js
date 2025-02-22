// pages/kalkulator-bangun-datar/index.js
import Link from 'next/link';

export default function KalkulatorBangunDatar() {
  const bangunRuang = [
    { name: 'Kubus', link: '/kalkulator-bangun-ruang/kubus' },
    { name: 'Balok', link: '/kalkulator-bangun-ruang/balok' },
    { name: 'Limas Segiempat', link: '/kalkulator-bangun-ruang/limas-segiempat' },
    { name: 'Prisma Segitiga', link: '/kalkulator-bangun-ruang/prisma-segitiga' },
    { name: 'Limas Segitiga', link: '/kalkulator-bangun-ruang/limas-segitiga' },
    { name: 'Tabung', link: '/kalkulator-bangun-ruang/tabung' },
    { name: 'Kerucut', link: '/kalkulator-bangun-ruang/kerucut' },
    { name: 'Bola', link: '/kalkulator-bangun-ruang/bola' },
  ];

  return (
    <div className="min-h-screen bg-gray-500 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-white">Kalkulator Bangun Ruang</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {bangunRuang.map((bangun, index) => (
          <Link key={index} href={bangun.link}>
            <button className="w-48 bg-blue-500 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
              {bangun.name}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}