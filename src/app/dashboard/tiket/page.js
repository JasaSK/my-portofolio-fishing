"use client";

import { TicketCheck, CalendarDays, MapPin } from "lucide-react";

const tiketList = [
  {
    tempat: "Kolam Harapan Jaya",
    tanggal: "2025-07-21",
    jam: "08:00",
    status: "Berhasil",
  },
  {
    tempat: "Mancing Asri",
    tanggal: "2025-07-25",
    jam: "10:00",
    status: "Menunggu Pembayaran",
  },
];

export default function TiketPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold flex items-center gap-2">
        <TicketCheck className="w-6 h-6 text-green-500" />
        Tiket Saya
      </h2>

      {tiketList.length === 0 ? (
        <p className="text-gray-400">Belum ada tiket yang dipesan.</p>
      ) : (
        <div className="grid gap-4">
          {tiketList.map((tiket, idx) => (
            <div
              key={idx}
              className="p-4 bg-gray-800 rounded-lg shadow flex flex-col sm:flex-row justify-between"
            >
              <div className="space-y-1">
                <h3 className="text-lg font-bold">{tiket.tempat}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <CalendarDays className="w-4 h-4 text-blue-400" />
                  <span>
                    {tiket.tanggal} | {tiket.jam}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <MapPin className="w-4 h-4 text-orange-400" />
                  <span>Lokasi: {tiket.tempat}</span>
                </div>
              </div>
              <div className="mt-2 sm:mt-0">
                <span
                  className={`px-3 py-1 text-sm font-medium rounded-full ${
                    tiket.status === "Berhasil"
                      ? "bg-green-600 text-white"
                      : "bg-yellow-500 text-black"
                  }`}
                >
                  {tiket.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
