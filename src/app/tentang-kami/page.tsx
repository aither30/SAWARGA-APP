"use client";

import { team } from "../../data/team";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Team() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto p-6">
        {/* SAWARGA Section */}
        {/* Logo Section */}

        <section className="mb-8">
          <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8">
            <div className="flex justify-center ">
              <Image
                src="/img/logo_KKN.png"
                alt="Logo KKN 53"
                width={160}
                height={160}
                className="w-40"
              />
            </div>
            <div className="flex flex-col md:w-3/5">
              <h2 className="text-center md:text-left text-2xl font-bold text-blue-600 mb-6">
                SAWARGA
              </h2>
              <p className="text-center md:text-left">
                Satu Wakap, Ragam Wisata (SAWARGA) adalah suatu program kerja
                yang diusung oleh KKN 53 Periode 2 Universitas Siliwangi 2024.
                Program kerja ini bertujuan untuk memperkenalkan wisata,
                sekaligus memublikasi potensi wisata yang ada di Desa Wakap,
                Kecamatan Bantarkalong kepada khalayak umum, baik yang sudah
                maupun belum dikelola.
              </p>
            </div>
          </div>
        </section>

        {/* Struktur Program Kerja */}
        <section>
          <h2 className="text-center text-2xl font-bold text-blue-600 mb-6">
            Struktur Program Kerja SAWARGA
          </h2>

          {/* Anggota Inti */}
          <div className="mb-12">
            <h2 className="text-center text-2xl font-bold text-blue-600 mb-6">
              Anggota Inti
            </h2>
            <div className="flex flex-wrap justify-center gap-8 items-center ">
              {team.slice(0, 4).map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col text-center items-center md:w-1/5"
                >
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={144}
                    height={144}
                    className="w-36 h-36 object-cover rounded-full mb-4"
                  />
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <span className="inline-block bg-yellow-500 text-white text-sm font-semibold px-4 py-1 rounded-full mb-2 uppercase ">
                    {member.role}
                  </span>
                  <p>
                    {member.program}, Semester {member.semester}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Anggota Lainnya */}
          <div>
            <h2 className="text-center text-2xl font-bold text-blue-600 mb-6">
              Anggota Lainnya
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {team.slice(4).map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col text-center items-center "
                >
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={144}
                    height={144}
                    className="w-36 h-36 object-cover rounded-full mb-4"
                  />
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <span className="inline-block bg-yellow-500 text-white text-sm font-semibold px-4 py-1 rounded-full mb-2 uppercase">
                    {member.role}
                  </span>
                  <p>
                    {member.program}, Semester {member.semester}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-4 mt-12">
        &copy; Kelompok KKN 53 Periode 2 2024 - Desa Wakap - Universitas
        Siliwangi
      </footer>
    </div>
  );
}
