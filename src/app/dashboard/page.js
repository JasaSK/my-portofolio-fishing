import { BackgroundImage } from "../../components/Background.js";
import {
  Ticket,
  CalendarCheck,
  Star,
  Fish,
  ChevronRight,
  PlusCircle,
  ClipboardList,
  Users,
} from "lucide-react";

export default function DashboardHome() {
  return (
    <>
      {/* Section: Welcome */}
      <section className="relative py-16">
        <BackgroundImage />
        <div className="container mx-auto px-4">
          <div className="bg-gray-900/80 backdrop-blur-md p-8 rounded-xl text-white shadow-md">
            <h2 className="text-3xl font-bold mb-2">
              Selamat datang kembali,{" "}
              <span className="text-orange-500">Admin</span> 🎣
            </h2>
            <p className="text-gray-300">
              Ini adalah ringkasan aktivitas harian dan status terkini kolam
              PondZone.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-24">
        {/* Section: Statistik */}
        <section>
          <h3 className="text-xl font-semibold text-orange-500 mb-4">
            Statistik Hari Ini
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                label: "Pemesanan",
                value: "1.284",
                icon: Ticket,
              },
              {
                label: "Tiket Hari Ini",
                value: "89",
                icon: CalendarCheck,
              },
              {
                label: "Rating",
                value: "4.8 / 5",
                icon: Star,
              },
              {
                label: "Ikan Terbesar",
                value: "12.6 kg",
                icon: Fish,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-800 rounded-xl p-5 flex items-center gap-4 shadow hover:shadow-lg transition"
              >
                <div className="p-3 bg-gray-700 rounded-full">
                  <item.icon className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">{item.label}</p>
                  <p className="text-xl font-bold text-white">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Shortcut Fitur */}
        <section>
          <h3 className="text-xl font-semibold text-orange-500 mb-4">
            Akses Cepat
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                label: "Buat Tiket Baru",
                icon: PlusCircle,
                href: "#",
              },
              {
                label: "Data Pemesanan",
                icon: ClipboardList,
                href: "#",
              },
              {
                label: "Manajemen Pengunjung",
                icon: Users,
                href: "#",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="bg-gray-800 hover:bg-gray-700 transition p-5 rounded-xl flex items-center justify-between group shadow"
              >
                <div className="flex items-center gap-4">
                  <item.icon className="w-6 h-6 text-orange-500" />
                  <p className="text-white font-semibold">{item.label}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition" />
              </a>
            ))}
          </div>
        </section>

        {/* Section: Tiket Terbaru */}
        <section>
          <h3 className="text-xl font-semibold text-orange-500 mb-4">
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
                  className="py-3 flex justify-between items-center"
                >
                  <div>
                    <p className="text-white font-medium">{tiket.nama}</p>
                    <p className="text-gray-400 text-sm">
                      {tiket.jenis} • {tiket.tanggal}
                    </p>
                  </div>
                  <span className="text-sm text-orange-400">
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
