"use client";

import { MapPin, Star } from "lucide-react";

const tempatList = [
  {
    nama: "Kolam Harapan Jaya",
    alamat: "Jl. Ikan Mas No.12, Jakarta",
    rating: 4.5,
    status: "Aktif",
    jadwal: "07.00 - 18.00",
  },
  {
    nama: "Mancing Asri",
    alamat: "Ds. Kalanganyar, Banyuwangi",
    rating: 4.2,
    status: "Aktif",
    jadwal: "08.00 - 17.00",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Daftar Tempat Pemancingan</h2>

      <div className="overflow-x-auto bg-gray-800 rounded-lg shadow">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-700 text-left text-gray-200">
              <th className="py-3 px-4">Nama</th>
              <th className="py-3 px-4">Alamat</th>
              <th className="py-3 px-4">Rating</th>
              <th className="py-3 px-4">Jadwal</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {tempatList.map((tempat, idx) => (
              <tr
                key={idx}
                className="border-t border-gray-700 hover:bg-gray-700/50"
              >
                <td className="py-3 px-4">{tempat.nama}</td>

                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-400" />
                    <span>{tempat.alamat}</span>
                  </div>
                </td>

                <td className="py-3 px-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>{tempat.rating}</span>
                  </div>
                </td>

                <td className="py-3 px-4">{tempat.jadwal}</td>

                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 text-xs rounded-full font-medium ${
                      tempat.status === "Aktif"
                        ? "bg-green-600 text-white"
                        : "bg-gray-500 text-gray-300"
                    }`}
                  >
                    {tempat.status}
                  </span>
                </td>

                <td className="py-3 px-4 space-x-2">
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
