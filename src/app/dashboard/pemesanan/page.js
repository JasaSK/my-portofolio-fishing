"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const dummyPesanan = [
  {
    id: 1,
    namaPemesan: "Budi Santoso",
    tempat: "Kolam Harapan Jaya",
    tanggal: "2025-07-20",
    jam: "08:00",
    jumlahTiket: 2,
    status: "Terkonfirmasi",
  },
  {
    id: 2,
    namaPemesan: "Siti Aminah",
    tempat: "Mancing Asri",
    tanggal: "2025-07-21",
    jam: "09:00",
    jumlahTiket: 1,
    status: "Pending",
  },
];

export default function PemesananPage() {
  const searchParams = useSearchParams();
  const tempat = searchParams.get("tempat");

  const [filteredPesanan, setFilteredPesanan] = useState([]);

  useEffect(() => {
    if (tempat) {
      const hasilFilter = dummyPesanan.filter((p) => p.tempat === tempat);
      setFilteredPesanan(hasilFilter);
    } else {
      setFilteredPesanan(dummyPesanan);
    }
  }, [tempat]);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">
        Monitoring Pemesanan {tempat ? `untuk "${tempat}"` : ""}
      </h2>

      <div className="overflow-x-auto bg-gray-800 rounded-lg shadow">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-700 text-left text-gray-200">
              <th className="py-3 px-4">Nama Pemesan</th>
              <th className="py-3 px-4">Tempat</th>
              <th className="py-3 px-4">Tanggal</th>
              <th className="py-3 px-4">Jam</th>
              <th className="py-3 px-4">Jumlah Tiket</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredPesanan.length > 0 ? (
              filteredPesanan.map((pesanan) => (
                <tr
                  key={pesanan.id}
                  className="border-t border-gray-700 hover:bg-gray-700/50"
                >
                  <td className="py-3 px-4">{pesanan.namaPemesan}</td>
                  <td className="py-3 px-4">{pesanan.tempat}</td>
                  <td className="py-3 px-4">{pesanan.tanggal}</td>
                  <td className="py-3 px-4">{pesanan.jam}</td>
                  <td className="py-3 px-4">{pesanan.jumlahTiket}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 text-xs rounded-full font-medium ${
                        pesanan.status === "Terkonfirmasi"
                          ? "bg-green-600 text-white"
                          : "bg-yellow-500 text-black"
                      }`}
                    >
                      {pesanan.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="py-4 px-4 text-center text-gray-400" colSpan={6}>
                  Belum ada pemesanan untuk tempat ini.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
