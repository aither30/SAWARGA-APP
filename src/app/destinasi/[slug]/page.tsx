"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { destinasi } from "../../../../backend/destinasi";
import { getGalleryImages } from "../../lib/getGalleryImages";
import Navbar from "../../components/Navbar";

export default function DestinasiDetail() {
  const { slug } = useParams();
  const destination = destinasi.find((d) => d.slug === slug);

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-800 bg-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Destinasi tidak ditemukan</h1>
          <Link
            href="/"
            className="text-blue-500 hover:underline text-lg font-medium"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  console.log(destination.image);

  const galleryImages = getGalleryImages(destination.slug);

  return (
    <div className="min-h-screen bg-white text-gray-700">
      {/* Navbar */}
      {/* Navbar */}
      <Navbar />

      {/* Konten Utama */}
      <div className="max-w-5xl mx-auto bg-white p-6 mt-10 rounded-lg shadow-lg">
        {/* Gambar Utama */}
        <div className="mb-6">
          <Image
            src={destination.image}
            alt={destination.name}
            width={1000}
            height={500}
            className="rounded-lg shadow-md w-full h-64 object-cover"
          />
        </div>

        {/* Judul */}
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          {destination.name}
        </h1>

        {/* Detail Informasi */}
        <div className="flex flex-col md:flex-row md:gap-10">
          <div className="flex-1 space-y-4">
            <p>{destination.description || "Deskripsi tidak tersedia."}</p>
            <p>
              <strong className="text-blue-600">Lokasi:</strong>{" "}
              {destination.location || "Lokasi tidak tersedia."}
            </p>
          </div>
          <div className="flex-1 space-y-4">
            <ul className="space-y-4">
              <li>
                <strong className="text-blue-600 block">Fasilitas:</strong>
                {destination.facilities || "Tidak ada fasilitas yang tersedia."}
              </li>
              <li>
                <strong className="text-blue-600 block">
                  Jam Operasional:
                </strong>
                {destination.open_time || "Tidak diketahui"} -{" "}
                {destination.close_time || "Tidak diketahui"}
              </li>
              <li>
                <strong className="text-blue-600 block">Harga Tiket:</strong>
                Weekday Anak: Rp{" "}
                {destination.price_weekday_child?.toLocaleString() || "0"}
                <br />
                Weekday Dewasa: Rp{" "}
                {destination.price_weekday_adult?.toLocaleString() || "0"}
                <br />
                Weekend: Rp {destination.price_weekend?.toLocaleString() || "0"}
              </li>
              <li>
                <strong className="text-blue-600 block">Kontak:</strong>
                {destination.contact_info || "Tidak ada kontak tersedia."}
              </li>
              <li>
                <strong className="text-blue-600 block">
                  Akses Transportasi:
                </strong>
                {destination.transport_access ||
                  "Tidak ada informasi transportasi."}
              </li>
              <li>
                <strong className="text-blue-600 block">Info Tambahan:</strong>
                {destination.additional_info || "Tidak ada info tambahan."}
              </li>
            </ul>
          </div>
        </div>

        {/* Galeri */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
            Galeri - {destination.name}
          </h2>

          {galleryImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <div key={index} className="flex-none">
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
              Tidak ada galeri untuk {destination.name}.
            </p>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-4 mt-10">
        &copy; Kelompok KKN 53 Periode 2 2024 - Desa Wakap - Universitas
        Siliwangi
      </footer>
    </div>
  );
}
