// pages/kalkulator-bangun-datar/index.js
import Link from 'next/link';

export default function KalkulatorBangunDatar() {
  const bangunDatar = [
    { name: 'Persegi', link: '/kalkulator-bangun-datar/persegi' },
    { name: 'Persegi Panjang', link: '/kalkulator-bangun-datar/persegi-panjang' },
    { name: 'Jajar Genjang', link: '/kalkulator-bangun-datar/jajar-genjang' },
    { name: 'Segitiga', link: '/kalkulator-bangun-datar/segitiga' },
    { name: 'Belah Ketupat', link: '/kalkulator-bangun-datar/belah-ketupat' },
    { name: 'Layang-Layang', link: '/kalkulator-bangun-datar/layang-layang' },
    { name: 'Trapesium', link: '/kalkulator-bangun-datar/trapesium' },
    { name: 'Lingkaran', link: '/kalkulator-bangun-datar/lingkaran' },
  ];

  return (
    <div className="min-h-screen bg-gray-500 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-white">Kalkulator Bangun Datar</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {bangunDatar.map((bangun, index) => (
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