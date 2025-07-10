"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Ticket,
  Info,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Menu,
} from "lucide-react";
import Image from "next/image";
import classNames from "classnames";
import SidebarDrawer from "./SidebarDrawer";

const MENUS = [
  { label: "Beranda", icon: Home, href: "/dashboard" },
  { label: "Tiket", icon: Ticket, href: "/dashboard/tiket" },
  { label: "Fasilitas", icon: Info, href: "/dashboard/fasilitas" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    setCollapsed(localStorage.getItem("sidebar-collapsed") === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("sidebar-collapsed", String(collapsed));
  }, [collapsed]);

  const toggleCollapse = useCallback(() => setCollapsed((prev) => !prev), []);

  const NavItem = ({ label, icon: Icon, href }) => {
    const active = pathname === href || pathname.startsWith(`${href}/`);
    return (
      <Link
        href={href}
        className={classNames(
          "group relative flex items-center gap-3 rounded-lg px-4 py-2 font-medium transition-colors",
          collapsed ? "justify-center" : "",
          active
            ? "bg-white/5 text-orange-400"
            : "text-slate-300 hover:bg-white/5 hover:text-white"
        )}
        aria-current={active ? "page" : undefined}
      >
        <span
          className={classNames(
            "absolute left-0 top-0 h-full w-1 rounded-r transition-all",
            active
              ? "bg-orange-500"
              : "bg-transparent group-hover:bg-orange-400/80 group-hover:opacity-70"
          )}
        />
        <Icon className="h-5 w-5 shrink-0" />
        {!collapsed && <span className="truncate">{label}</span>}
        {collapsed && (
          <span className="pointer-events-none absolute left-full top-1/2 ml-2 -translate-y-1/2 whitespace-nowrap rounded bg-slate-800 px-2 py-1 text-xs text-white opacity-0 shadow-md transition-all group-hover:opacity-100 z-50">
            {label}
          </span>
        )}
      </Link>
    );
  };

  const SidebarInner = () => (
    <div className="flex h-full flex-col pt-6">
      <div
        className={classNames(
          "mx-4 mb-6 flex items-center border-b border-white/10 pb-5",
          collapsed ? "justify-center" : "justify-between"
        )}
      >
        <div className="flex items-center gap-3">
          <Image
            src="/images/pancing1.jpg"
            alt="logo"
            width={40}
            height={40}
            className="rounded-full ring-2 ring-orange-400"
            priority
          />
          {!collapsed && (
            <span className="text-xl font-bold tracking-wide text-orange-400">
              PondZone
            </span>
          )}
        </div>

        <button
          onClick={toggleCollapse}
          className="rounded p-1 text-slate-300 transition hover:bg-white/5"
          aria-label="Toggle sidebar"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <nav className="scrollbar-hide flex-1 space-y-1 overflow-y-auto px-3">
        {MENUS.map((item) => (
          <NavItem key={item.href} {...item} />
        ))}
      </nav>

      <button
        onClick={() => console.log("TODO: Logout")}
        className={classNames(
          "m-4 flex items-center gap-3 rounded-lg px-4 py-2 text-slate-300 transition hover:bg-white/5",
          { "justify-center": collapsed }
        )}
      >
        <LogOut className="h-5 w-5" />
        {!collapsed && <span>Keluar</span>}
      </button>
    </div>
  );

  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <aside
        className={classNames(
          "fixed inset-y-0 left-0 z-40 bg-gradient-to-b from-slate-900/95 to-slate-800/95 shadow-xl backdrop-blur transition-[width] duration-300",
          collapsed ? "w-20" : "w-60",
          "hidden lg:flex"
        )}
      >
        {SidebarInner()}
      </aside>

      {/* MOBILE DRAWER */}
      <div className="lg:hidden">
        <SidebarDrawer />
      </div>
    </>
  );
}
