export function getGalleryImages(slug: string): string[] {
  const images: string[] = [];

  // Konfigurasi jumlah gambar per slug
  const imageCountPerSlug: { [key: string]: number } = {
    "kolam-renang-bkji": 20,
    "gua-lanang": 20,
    "curug-cilumping": 20,
    "sirkuit-sicareuh": 17,
    "leuwi-mangu": 20,
  };

  // Dapatkan jumlah gambar untuk slug tertentu
  const maxImages = imageCountPerSlug[slug] || 0;

  // Loop untuk menambahkan gambar sesuai jumlah yang ditentukan
  for (let index = 1; index <= maxImages; index++) {
    const imagePath = `/img/${slug}/image (${index}).jpg`;
    images.push(imagePath);
  }

  return images;
}
