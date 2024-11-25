import type { NextConfig } from "next";

if (process.env.NODE_ENV === "production") {
  console.log = () => {};
  console.error = () => {};
  console.warn = () => {};
}

const nextConfig: NextConfig = {
  // Mengaktifkan pengaturan eksperimental untuk mengatur batas data halaman
  experimental: {
    largePageDataBytes: 1280 * 1000, // Membatasi ukuran data halaman (dalam byte)
  },

  reactStrictMode: true,
  // Konfigurasi lain jika dibutuhkan
  // reactStrictMode: true, // Mengaktifkan Strict Mode untuk pengembangan
  // swcMinify: true, // Menggunakan SWC untuk minifikasi kode
};

export default nextConfig;
