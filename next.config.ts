import type { NextConfig } from "next";

if (process.env.NODE_ENV === "production") {
  console.log = () => {};
  console.error = () => {};
  console.warn = () => {};
}

const nextConfig: NextConfig = {
  // Mengaktifkan pengaturan eksperimental untuk mengatur batas data halaman

  reactStrictMode: true,
  // Konfigurasi lain jika dibutuhkan
  // reactStrictMode: true, // Mengaktifkan Strict Mode untuk pengembangan
  // swcMinify: true, // Menggunakan SWC untuk minifikasi kode
};

export default nextConfig;
