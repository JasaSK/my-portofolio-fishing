"use client";

import { Star } from "lucide-react";
import { useState } from "react";

// Contoh data dummy ulasan
const ulasanList = [
  {
    nama: "Budi Santoso",
    tempat: "Kolam Harapan Jaya",
    rating: 4,
    komentar: "Tempatnya nyaman dan ikannya banyak!",
    tanggal: "2025-07-19",
  },
  {
    nama: "Siti Aisyah",
    tempat: "Mancing Asri",
    rating: 5,
    komentar: "Pelayanan ramah dan bersih. Mantap!",
    tanggal: "2025-07-18",
  },
];

export default function HalamanUlasan() {
  const [ulasan, setUlasan] = useState(ulasanList);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Ulasan Pelanggan</h2>

      <div className="grid gap-4 md:grid-cols-2">
        {ulasan.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-lg shadow space-y-2"
          >
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold">{item.tempat}</h4>
              <span className="text-sm text-gray-400">{item.tanggal}</span>
            </div>

            <div className="flex items-center text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < item.rating ? "fill-current" : ""}`}
                />
              ))}
            </div>

            <p className="text-sm italic text-gray-300">{`"${item.komentar}"`}</p>
            <p className="text-xs text-right text-gray-400">- {item.nama}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
