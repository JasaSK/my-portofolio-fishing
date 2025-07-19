"use client";

import { MapPin, PlusCircle, Star } from "lucide-react";

export default function TempatPage() {
  const tempatList = [
    {
      nama: "Kolam Indah",
      alamat: "Jl. Ikan Mas No. 7, Malang",
      rating: 4.7,
      status: "Aktif",
    },
    {
      nama: "Pancing Jaya",
      alamat: "Jl. Umpan Segar No. 12, Batu",
      rating: 4.5,
      status: "Aktif",
    },
    {
      nama: "Fishing Valley",
      alamat: "Jl. Kolam Besar No. 5, Kepanjen",
      rating: 4.2,
      status: "Nonaktif",
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Manajemen Tempat</h2>
        <button className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md transition">
          <PlusCircle className="w-5 h-5" />
          Tambah Tempat
        </button>
      </div>

      <div className="bg-gray-800 rounded-xl shadow p-4 overflow-x-auto">
        <table className="min-w-full text-sm text-white">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left py-3 px-4">Nama Tempat</th>
              <th className="text-left py-3 px-4">Alamat</th>
              <th className="text-left py-3 px-4">Rating</th>
              <th className="text-left py-3 px-4">Status</th>
              <th className="text-left py-3 px-4">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {tempatList.map((tempat, idx) => (
              <tr
                key={idx}
                className="border-b border-gray-700 hover:bg-gray-700/50"
              >
                <td className="py-3 px-4 whitespace-nowrap">{tempat.nama}</td>

                <td className="py-3 px-4 whitespace-nowrap">
                  <div className="flex items-center gap-2 text-gray-300">
                    <MapPin className="w-4 h-4 text-orange-400" />
                    <span>{tempat.alamat}</span>
                  </div>
                </td>

                <td className="py-3 px-4 whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>{tempat.rating}</span>
                  </div>
                </td>

                <td className="py-3 px-4 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      tempat.status === "Aktif"
                        ? "bg-green-600 text-white"
                        : "bg-gray-600 text-gray-300"
                    }`}
                  >
                    {tempat.status}
                  </span>
                </td>

                <td className="py-3 px-4 whitespace-nowrap space-x-2">
                  <button className="text-blue-400 hover:underline text-xs">
                    Edit
                  </button>
                  <button className="text-red-400 hover:underline text-xs">
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
