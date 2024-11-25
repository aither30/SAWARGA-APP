import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Mengaktifkan pengaturan eksperimental untuk mengatur batas data halaman
  experimental: {
    largePageDataBytes: 1280 * 1000, // Membatasi ukuran data halaman (dalam byte)
  },

  // Konfigurasi lain jika dibutuhkan
  // reactStrictMode: true, // Mengaktifkan Strict Mode untuk pengembangan
  // swcMinify: true, // Menggunakan SWC untuk minifikasi kode
};

export default nextConfig;
