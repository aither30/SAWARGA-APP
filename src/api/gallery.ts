import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const publicPath = path.join(process.cwd(), "public", "img");
  const folders = ["", "wisata"];
  const images: string[] = [];

  folders.forEach((folder) => {
    const folderPath = path.join(publicPath, folder);

    // Ambil semua file di folder
    if (fs.existsSync(folderPath)) {
      const files = fs.readdirSync(folderPath);
      files.forEach((file) => {
        if (file.endsWith(".jpg")) {
          const imagePath = folder
            ? `/img/${folder}/${file}`
            : `/img/${file}`;
          images.push(imagePath);
        }
      });
    }
  });

  res.status(200).json({ images });
}
