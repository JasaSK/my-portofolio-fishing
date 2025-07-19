"use client";

import { Users, MapPin, TicketCheck, BarChart } from "lucide-react";

const statistik = {
  totalTempat: 12,
  totalTiket: 89,
  totalPengguna: 57,
  pemesananHariIni: 4,
};

export default function StatistikPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold flex items-center gap-2">
        <BarChart className="w-6 h-6 text-sky-400" />
        Statistik Sistem
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={<MapPin className="w-6 h-6 text-orange-500" />}
          label="Total Tempat"
          value={statistik.totalTempat}
        />
        <StatCard
          icon={<TicketCheck className="w-6 h-6 text-green-500" />}
          label="Total Tiket Dipesan"
          value={statistik.totalTiket}
        />
        <StatCard
          icon={<Users className="w-6 h-6 text-purple-500" />}
          label="Total Pengguna"
          value={statistik.totalPengguna}
        />
        <StatCard
          icon={<BarChart className="w-6 h-6 text-blue-500" />}
          label="Pemesanan Hari Ini"
          value={statistik.pemesananHariIni}
        />
      </div>
    </div>
  );
}

function StatCard({ icon, label, value }) {
  return (
    <div className="flex items-center p-4 bg-gray-800 rounded-lg shadow">
      <div className="mr-4">{icon}</div>
      <div>
        <div className="text-white text-lg font-bold">{value}</div>
        <div className="text-sm text-gray-300">{label}</div>
      </div>
    </div>
  );
}
