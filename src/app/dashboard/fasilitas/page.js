"use client";

import { CheckCircle, Fish, ParkingCircle, Store, Tent } from "lucide-react";

const fasilitasList = [
  {
    nama: "Gazebo",
    icon: <Tent className="w-5 h-5 text-orange-400" />,
    deskripsi: "Tempat bersantai untuk pengunjung yang ingin istirahat.",
  },
  {
    nama: "Warung",
    icon: <Store className="w-5 h-5 text-green-400" />,
    deskripsi: "Menyediakan makanan, minuman, dan kebutuhan memancing.",
  },
  {
    nama: "Sewa Alat",
    icon: <Fish className="w-5 h-5 text-blue-400" />,
    deskripsi: "Tersedia penyewaan alat pancing dan umpan.",
  },
  {
    nama: "Parkir Luas",
    icon: <ParkingCircle className="w-5 h-5 text-purple-400" />,
    deskripsi: "Area parkir aman dan cukup luas untuk kendaraan.",
  },
];

export default function FasilitasPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold flex items-center gap-2">
        <CheckCircle className="w-6 h-6 text-teal-400" />
        Fasilitas Tersedia
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {fasilitasList.map((fasilitas, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 p-4 bg-gray-800 rounded-lg shadow"
          >
            <div>{fasilitas.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                {fasilitas.nama}
              </h3>
              <p className="text-gray-300 text-sm">{fasilitas.deskripsi}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
