"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-3 shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide cursor-pointer hover:text-gray-200">
          <Link href="/">SAWARGA</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <Link
            href="/"
            className="hover:underline transition-all duration-300"
          >
            Beranda
          </Link>
          <Link
            href="/galeri"
            className="hover:underline transition-all duration-300"
          >
            Galeri
          </Link>
          <Link
            href="/tentang-kami"
            className="hover:underline transition-all duration-300"
          >
            Tentang Kami
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl hover:text-gray-200 transition-all duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden  mt-2 `}>
        <Link
          href="/"
          className="block py-2 hover:underline"
          onClick={() => setIsMenuOpen(false)}
        >
          Beranda
        </Link>
        <Link
          href="/galeri"
          className="block py-2 hover:underline"
          onClick={() => setIsMenuOpen(false)}
        >
          Galeri
        </Link>
        <Link
          href="/tentang-kami"
          className="block py-2 hover:underline"
          onClick={() => setIsMenuOpen(false)}
        >
          Tentang Kami
        </Link>
      </div>
    </nav>
  );
}
