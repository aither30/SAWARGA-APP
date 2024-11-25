"use client";

import { useState } from "react";
import { destinasi } from "../../backend/destinasi";
import Navbar from "./components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    if (destinasi.length > 0) {
      setActiveIndex((activeIndex + 1) % destinasi.length);
    }
  };

  const prev = () => {
    if (destinasi.length > 0) {
      setActiveIndex((activeIndex - 1 + destinasi.length) % destinasi.length);
    }
  };

  const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  const activeDestinasi = destinasi[activeIndex];

  if (!destinasi || destinasi.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-black">
        <p className="text-xl">Destinasi tidak tersedia saat ini.</p>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col transition-all duration-300"
      style={{
        backgroundImage: `url(${activeDestinasi.image})`,
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Overlay untuk gelap */}
      <div className="bg-black bg-opacity-70 min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="flex-1 flex flex-col items-center justify-center text-white px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-7xl w-full">
            {/* Header */}
            <div className="text-center md:text-left w-full md:w-1/2 space-y-4">
              <h1 className="text-7xl font-extrabold mb-4 md:mt-0 sm:mt-10 tracking-tight text-yellow-400">
                SAWARGA
              </h1>
              <p className="text-lg leading-relaxed">
                Satu Wakap, Ragam Wisata (SAWARGA) adalah suatu program kerja
                yang diusung oleh KKN 53 Periode 2 Universitas Siliwangi 2024.
                Program kerja ini bertujuan untuk memperkenalkan wisata,
                sekaligus memublikasi potensi wisata yang ada di Desa Wakap,
                Kecamatan Bantarkalong kepada khalayak umum, baik yang sudah
                maupun belum dikelola.
              </p>
            </div>

            {/* Card Slider */}
            <div className="w-full md:w-1/2 flex flex-col items-center">
              {/* Active Card */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row items-center w-full mb-4">
                <Image
                  src={activeDestinasi.image}
                  alt={activeDestinasi.name}
                  width={300}
                  height={200}
                  className="w-full md:w-1/2 h-64 object-cover"
                />
                <div className="p-4 flex flex-col justify-between w-full md:w-1/2 space-y-2">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {activeDestinasi.name}
                  </h3>
                  <p className="text-gray-600">
                    {truncateText(activeDestinasi.description, 20)}
                  </p>
                  <Link
                    href={`/destinasi/${activeDestinasi.slug}`}
                    className="text-blue-500 hover:text-blue-600 font-medium"
                  >
                    Lihat Detail →
                  </Link>
                </div>
              </div>

              {/* Buttons Below Card */}
              <div className="flex items-center justify-center gap-6">
                <button
                  onClick={prev}
                  disabled={destinasi.length === 0}
                  className={`bg-yellow-400 text-white px-6 py-2 rounded-lg font-bold transition-all duration-300 ${
                    destinasi.length === 0
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-yellow-500"
                  }`}
                >
                  <i className="fa-solid fa-chevron-left mr-2"></i> Prev
                </button>
                <button
                  onClick={next}
                  disabled={destinasi.length === 0}
                  className={`bg-yellow-400 text-white px-6 py-2 rounded-lg font-bold transition-all duration-300 ${
                    destinasi.length === 0
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-yellow-500"
                  }`}
                >
                  Next <i className="fa-solid fa-chevron-right ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center py-6 mt-8 shadow-inner">
          <p className="text-lg font-medium">
            &copy; Kelompok KKN 53 Periode 2 2024 - Desa Wakap - Universitas
            Siliwangi
          </p>
        </footer>
      </div>
    </div>
  );
}
