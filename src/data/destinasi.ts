export type Destinasi = {
  slug: string; // Tambahkan properti slug
  name: string;
  description: string;
  location: string;
  facilities: string;
  open_time: string | null;
  close_time: string | null;
  price_weekday_child: number | null;
  price_weekday_adult: number | null;
  price_weekend: number | null;
  contact_info: string;
  transport_access: string;
  additional_info: string;
  image: string;
};

export const destinasi: Destinasi[] = [
  {
    name: "Kolam Renang BKJI",
    slug: "kolam-renang-bkji",
    description:
      "Kolam Renang BKJI (Bukit Kubang Jaya Indah) merupakan satu-satunya kolam renang yang ada di Desa Wakap. Oleh karena itu, Kolam Renang BKJI diresmikan pada 13 Maret 2023. Kolam renang ini memiliki lokasi yang cukup strategis, yaitu di belakang Kantor Desa Wakap, dan mudah dijangkau oleh warga sekitar. Kolam renang dewasa di Kolam Renang BKJI memiliki kedalaman 70-190 cm. Tidak hanya kolam dewasa, kolam renang ini pun memiliki kolam renang anak dengan kedalaman 60 cm. Adanya ember tumpah dan perosotan di kolam anak menjadi daya tarik lain bagi anak-anak.",
    location:
      "Kubangjaya RT. 004 RW. 002 Jalan Raya Derah Pamijahan Desa Wakap, Kecamatan Bantarkalong, Kabupaten Tasikmalaya, Jawa Barat 46187",
    facilities:
      "Tempat parkir, toilet, gazebo, kolam anak, kolam dewasa, ember tumpah, perosotan, pojok baca, live music, WiFi, mushola",
    open_time: "08:00:00",
    close_time: "16:00:00",
    price_weekday_child: 5000,
    price_weekday_adult: 8000,
    price_weekend: 12000,
    contact_info:
      "Email: bumdeswakap854@gmail.com, Narahubung: Pak Ii - 085244845691, Pak Wahyu, Pak Amin - 085320442157, TikTok: @kolam.renang.b.k",
    transport_access:
      "Elf: Tasikmalaya - Pamijahan, Sodong - Simpang, Bandung - Pamijahan, Ojek tersedia",
    additional_info:
      "Menyediakan layanan untuk lomba melukis, ulang tahun, dll.",
    image: "/img/kolam_renang.jpg",
  },
  {
    name: "Curug Cilumping",
    slug: "curug-cilumping",
    description:
      "Curug Cilumping adalah curug yang ada di Desa Wakap. Curug ini sudah ditemukan warga setempat sebelum bendungan yang dibangun 15 tahun lalu dibangun. Curug Cilumping merupakan salah satu hidden gem yang ada di Desa Wakap. Sampai laman ini terbit, Curug Cilumping belum diresmikan oleh pihak desa sebagai destinasi wisata. Namun, bagi yang ingin mengunjungi tetap bisa, hanya saja keamanan belum dijamin oleh pengelola. Begitu juga transportasi. Tidak ada transportasi umum yang dapat langsung sampai ke lokasi, kecuali ojek. Oleh karena itu, beberapa hal, seperti akomodasi dan kuliner masih mengandalkan sukarela dari warga setempat.",
    location:
      "Kampung Singkup RT 07, RW 03, Desa Wakap, Kecamatan Bantarkalong, Kabupaten Tasikmalaya, Jawa Barat",
    facilities: "Belum ada fasilitas.",
    open_time: "08:00:00",
    close_time: "16:00:00",
    price_weekday_child: null,
    price_weekday_adult: null,
    price_weekend: null,
    contact_info: "Narahubung: Pak Iman - 082219730484",
    transport_access: "Belum ada transportasi umum, kecuali ojek.",
    additional_info: "Rencana paket wisata oleh Pokdarwis desa.",
    image: "/img/curugfix.jpg",
  },
  {
    name: "Sirkuit Sicareuh",
    slug: "sirkuit-sicareuh",
    description:
      "Pertama kali dibangun ditujukan sebagai lapangan sepak bola, hanya saja karena keadaan tanah yang miring, tidak memungkinkan untuk dijadikan lapangan sepak bola. Ketertarikan Punduh Pencut Kondang dan beberapa perangkat desa lain pada motor, membuat lahan tersebut akhirnya dijadikan sebagai sirkuit motor cross. Panjang jalurnya kurang lebih 800 km, lebar start 23m, lebar jalur 6m, belokan 9. Sekali start bisa sampai 20 motor. Sudah terdaftar di Ikatan Motor Indonesia (IMI) sejak event pertamanya pada tahun 2019.",
    location:
      "Kampung Pencut Kondang RT 16, RW 07, Desa Wakap, Kecamatan Bantarkalong, Kabupaten Tasikmalaya, Jawa Barat",
    facilities: "Mushola, MCK, area parkir, area penjual, area persiapan",
    open_time: "12:00:00",
    close_time: "17:00:00",
    price_weekday_child: null,
    price_weekday_adult: null,
    price_weekend: null,
    contact_info: "Narahubung: Punduh Pencut Kondang",
    transport_access: "Tidak ada transportasi umum ke Sirkuit Sicareuh.",
    additional_info: "Wakap Open Championship diadakan setiap tahun.",
    image: "/img/circuit.jpg",
  },
  {
    name: "Leuwi Mangu",
    slug: "leuwi-mangu",
    description:
      "Sebelum leuwi terbentuk, lokasi tersebut banyak pohon manggu (manggis). Kemudian, pohon-pohon tersebut terendam oleh leuwi (danau). Selain itu, di daerah tersebut banyak manggis. (Perkiraan sejarah). Kedalaman leuwi berkisar 5–10 meter.",
    location:
      "Dusun Sarongge, RT 17, RW 08, Desa Wakap, Kec. Bantarkalong, Kab. Tasikmalaya",
    facilities: "Tidak ada fasilitas.",
    open_time: null,
    close_time: null,
    price_weekday_child: null,
    price_weekday_adult: null,
    price_weekend: null,
    contact_info: "Dapat bertanya pada warga sekitar.",
    transport_access: "Tidak ada akses transportasi umum, kecuali ojek.",
    additional_info: "Diri sendiri, tidak ada jaminan keamanan dan kesehatan.",
    image: "/img/leuwi_mangu.jpg",
  },
  {
    name: "Gua Lanang",
    slug: "gua-lanang",
    description:
      "Gua Lanang lebih dikenal dengan Gua Kaham oleh para warga setempat. Ada cerita di balik penamaan Gua Kaham. Kaham sebenarnya adalah nama salah satu warga. Suatu hari warga yang bernama Kaham terjatuh saat mengarit untuk pakan ternak dan dinyatakan hilang. Namun, warga tersebut ditemukan di Gua Lanang.",
    location:
      "Dusun Sarongge RT 18, RW 08, Desa Wakap, Kec. Bantarkalong, Kab. Tasikmalaya",
    facilities: "Tidak ada fasilitas.",
    open_time: null,
    close_time: null,
    price_weekday_child: null,
    price_weekday_adult: null,
    price_weekend: null,
    contact_info: "Dapat bertanya pada warga sekitar.",
    transport_access: "Tidak ada akses transportasi umum, kecuali ojek.",
    additional_info: "Diri sendiri, tidak ada jaminan keamanan dan kesehatan.",
    image: "/img/gua_lanang.jpg",
  },
];
