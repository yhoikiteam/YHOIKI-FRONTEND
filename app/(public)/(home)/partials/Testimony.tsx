import Image from "next/image";

interface Props {
  gambar: string;
  nama: string;
  komennya: string;
}

export default function Testimony({ gambar, nama, komennya }: Props) {
  return (
    <div className="flex h-28 w-72 items-center space-x-4 rounded-3xl border border-gray-300 bg-gray-200 p-3 text-gray-700 shadow-xl">
      <div id="profile">
        <Image
          src={gambar}
          alt="User Avatar"
          width={62}
          height={62}
          className="rounded-full"
        />
      </div>
      <div className="flex-col items-center">
        <div id="nama">
          <h1 className="rounded-full bg-gradient-to-r from-color1 to-color2 text-center text-sm font-medium text-white">
            {nama}
          </h1>
        </div>
        <div id="komennya" className="h-10 w-44 overflow-hidden">
          <p className="p-0.5 text-xs">{komennya}</p>
        </div>
      </div>
    </div>
  );
}
