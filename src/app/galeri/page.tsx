"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function GalleryPage() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = () => {
      const folderConfig: { [key: string]: number } = {
        "kolam-renang-bkji": 20,
        "gua-lanang": 20,
        "curug-cilumping": 20,
        "sirkuit-sicareuh": 17,
        "leuwi-mangu": 20,
      };

      const folderImages: string[] = [];
      for (const [folder, imageCount] of Object.entries(folderConfig)) {
        for (let i = 1; i <= imageCount; i++) {
          const path = `/img/${folder}/image (${i}).jpg`;
          folderImages.push(path);
        }
      }

      setImages(folderImages);
    };

    fetchImages();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Galeri Wisata
        </h1>
        {images.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div key={index} className="flex items-center justify-center">
                <Image
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  width={300}
                  height={200}
                  className="rounded-lg shadow-md object-cover"
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-4">
            Tidak ada gambar yang tersedia untuk galeri.
          </p>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-4">
        &copy; Kelompok KKN 53 Periode 2 2024 - Desa Wakap - Universitas
        Siliwangi
      </footer>
    </div>
  );
}
