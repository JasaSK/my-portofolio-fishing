"use client";

import {
  Ticket,
  CalendarCheck,
  Star,
  Fish,
  ChevronRight,
  PlusCircle,
  ClipboardList,
  Users,
  Bell,
  MapPin,
  BarChart2,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function DashboardHome() {
  const chartData = [
    { tanggal: "13 Jul", jumlah: 12 },
    { tanggal: "14 Jul", jumlah: 18 },
    { tanggal: "15 Jul", jumlah: 10 },
    { tanggal: "16 Jul", jumlah: 22 },
    { tanggal: "17 Jul", jumlah: 15 },
    { tanggal: "18 Jul", jumlah: 27 },
    { tanggal: "19 Jul", jumlah: 20 },
  ];

  return (
    <>
      {/* Section: Welcome */}
      <section className="relative py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900/80 backdrop-blur-md p-6 sm:p-8 rounded-xl text-white shadow-md">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Selamat datang kembali,{" "}
              <span className="text-orange-500">Admin</span> 🎣
            </h2>
            <p className="text-sm sm:text-base text-gray-300">
              Ini adalah ringkasan aktivitas harian dan status terkini kolam
              <span className="hidden sm:inline"> PondZone</span>.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-24">
        {/* Section: Notifikasi */}
        <section>
          <div className="bg-gray-800 p-4 sm:p-5 rounded-xl shadow flex items-center gap-4 text-sm text-orange-300">
            <Bell className="w-5 h-5 shrink-0" />
            <div className="space-y-1">
              <p>3 tempat menunggu verifikasi penyedia baru.</p>
              <p>Kolam C dijadwalkan tutup untuk perawatan pada 21 Juli.</p>
            </div>
          </div>
        </section>

        {/* Section: Statistik Hari Ini */}
        <section>
          <h3 className="text-lg sm:text-xl font-semibold text-orange-500 mb-4">
            Statistik Hari Ini
          </h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {[
              { label: "Pemesanan", value: "1.284", icon: Ticket },
              { label: "Tiket Hari Ini", value: "89", icon: CalendarCheck },
              { label: "Rating", value: "4.8 / 5", icon: Star },
              { label: "Ikan Terbesar", value: "12.6 kg", icon: Fish },
              { label: "Penyedia Aktif", value: "18", icon: Users },
              { label: "Kolam Aktif", value: "42", icon: MapPin },
              { label: "Permintaan Baru", value: "3", icon: ClipboardList },
              {
                label: "Statistik Mingguan",
                value: "Naik 15%",
                icon: BarChart2,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-800 rounded-xl p-4 sm:p-5 flex items-center gap-4 shadow hover:shadow-lg transition"
              >
                <div className="p-3 bg-gray-700 rounded-full">
                  <item.icon className="w-6 h-6 text-orange-500" />
                </div>
                <div className="truncate">
                  <p className="text-gray-400 text-sm">{item.label}</p>
                  <p className="text-lg sm:text-xl font-bold text-white">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Grafik */}
        <section>
          <h3 className="text-lg sm:text-xl font-semibold text-orange-500 mb-4">
            Grafik Pemesanan (7 Hari Terakhir)
          </h3>
          <div className="bg-gray-800 p-5 rounded-xl shadow">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={chartData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                <XAxis dataKey="tanggal" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="jumlah"
                  stroke="#F97316"
                  strokeWidth={2}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Section: Shortcut Fitur */}
        <section>
          <h3 className="text-lg sm:text-xl font-semibold text-orange-500 mb-4">
            Akses Cepat
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {[
              { label: "Buat Tiket Baru", icon: PlusCircle, href: "#" },
              { label: "Data Pemesanan", icon: ClipboardList, href: "#" },
              { label: "Manajemen Pengunjung", icon: Users, href: "#" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="bg-gray-800 hover:bg-gray-700 transition p-5 rounded-xl flex items-center justify-between group shadow"
              >
                <div className="flex items-center gap-4">
                  <item.icon className="w-6 h-6 text-orange-500 shrink-0" />
                  <p className="text-white font-semibold text-base sm:text-lg">
                    {item.label}
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition" />
              </a>
            ))}
          </div>
        </section>

        {/* Section: Tiket Terbaru */}
        <section>
          <h3 className="text-lg sm:text-xl font-semibold text-orange-500 mb-4">
            Tiket Terbaru
          </h3>
          <div className="bg-gray-800 rounded-xl p-4 shadow">
            <ul className="divide-y divide-gray-700">
              {[
                {
                  nama: "Ahmad F.",
                  tanggal: "10 Juli 2025",
                  jenis: "Reguler",
                  jumlah: 2,
                },
                {
                  nama: "Budi S.",
                  tanggal: "10 Juli 2025",
                  jenis: "VIP",
                  jumlah: 1,
                },
                {
                  nama: "Citra A.",
                  tanggal: "9 Juli 2025",
                  jenis: "Reguler",
                  jumlah: 4,
                },
                {
                  nama: "Dewi K.",
                  tanggal: "9 Juli 2025",
                  jenis: "Malam",
                  jumlah: 3,
                },
              ].map((tiket, idx) => (
                <li
                  key={idx}
                  className="py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center"
                >
                  <div>
                    <p className="text-white font-medium">{tiket.nama}</p>
                    <p className="text-gray-400 text-sm">
                      {tiket.jenis} • {tiket.tanggal}
                    </p>
                  </div>
                  <span className="text-sm text-orange-400 mt-1 sm:mt-0">
                    {tiket.jumlah} Tiket
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
  