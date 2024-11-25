import Image from 'next/image';

type DestinasiProps = {
  name: string;
  description: string;
  image: string;
};

export default function DestinasiCard({ name, description, image }: DestinasiProps) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <Image
        src={image}
        alt={name}
        width={500} // Tentukan lebar
        height={300} // Tentukan tinggi
        className="object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold ">{name}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
}
