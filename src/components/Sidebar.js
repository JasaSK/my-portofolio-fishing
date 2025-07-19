"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Ticket,
  Info,
  LogOut,
  MapPin,
  Calendar,
  ClipboardList,
  BarChart2,
  Star,
} from "lucide-react";

const menu = [
  { label: "Beranda", icon: Home, href: "/dashboard" },
  { label: "Tempat Saya", icon: MapPin, href: "/dashboard/tempat" },
  { label: "Jadwal & Slot", icon: Calendar, href: "/dashboard/jadwal" },
  { label: "Pemesanan", icon: ClipboardList, href: "/dashboard/pemesanan" },
  { label: "Tiket", icon: Ticket, href: "/dashboard/tiket" },
  { label: "Fasilitas", icon: Info, href: "/dashboard/fasilitas" },
  { label: "Statistik", icon: BarChart2, href: "/dashboard/statistik" },
  { label: "Ulasan", icon: Star, href: "/dashboard/ulasan" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 w-64 bg-gray-800 p-5 flex flex-col">
      <h1 className="text-2xl font-bold text-orange-500 mb-8">PondZone</h1>

      <nav className="space-y-1 flex-grow">
        {menu.map(({ label, icon: Icon, href }) => (
          <Link
            key={label}
            href={href}
            className={`flex items-center gap-3 px-3 py-2 rounded-md 
              hover:bg-gray-700 transition
              ${
                pathname === href ? "bg-orange-600 text-white" : "text-gray-300"
              }`}
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </Link>
        ))}
      </nav>

      {/* Tombol Keluar */}
      <button
        className="mt-8 flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-700 w-full text-gray-300"
        onClick={() => {
          // Panggil fungsi logout
        }}
      >
        <LogOut className="w-5 h-5" />
        Keluar
      </button>
    </aside>
  );
}
