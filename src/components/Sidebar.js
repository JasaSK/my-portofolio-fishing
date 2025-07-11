"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Ticket, Info, LogOut } from "lucide-react";

const menu = [
  { label: "Beranda", icon: Home, href: "/dashboard" },
  { label: "Tiket", icon: Ticket, href: "/dashboard/tiket" },
  { label: "Fasilitas", icon: Info, href: "/dashboard/fasilitas" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 w-64 bg-gray-800 p-5">
      <h1 className="text-2xl font-bold text-orange-500 mb-8">PondZone</h1>

      <nav className="space-y-1">
        {menu.map(({ label, icon: Icon, href }) => (
          <Link
            key={label}
            href={href}
            className={`flex items-center gap-3 px-3 py-2 rounded-md 
              hover:bg-gray-700 transition
              ${pathname === href ? "bg-orange-600" : ""}`}
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </Link>
        ))}
      </nav>

      {/* Tombol Keluar */}
      <button
        className="mt-auto flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-700 w-full"
        onClick={() => {/* panggil logout */}}
      >
        <LogOut className="w-5 h-5" />
        Keluar
      </button>
    </aside>
  );
}
