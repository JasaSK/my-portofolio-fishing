// Sidebar.jsx – revamped, modern look (JavaScript version)

"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Ticket,
  Info,
  LogOut,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import classNames from "classnames";

// Menu config
const MENUS = [
  { label: "Beranda", icon: Home, href: "/dashboard" },
  { label: "Tiket", icon: Ticket, href: "/dashboard/tiket" },
  { label: "Fasilitas", icon: Info, href: "/dashboard/fasilitas" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setCollapsed(localStorage.getItem("sidebar-collapsed") === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("sidebar-collapsed", String(collapsed));
  }, [collapsed]);

  useEffect(() => setMobileOpen(false), [pathname]);
  useEffect(() => {
    const handler = (e) => e.key === "Escape" && setMobileOpen(false);
    if (mobileOpen) window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [mobileOpen]);

  const toggleCollapse = useCallback(() => setCollapsed((p) => !p), []);
  const openDrawer = useCallback(() => setMobileOpen(true), []);
  const closeDrawer = useCallback(() => setMobileOpen(false), []);

  const Item = ({ label, icon: Icon, href }) => {
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
        {!collapsed && <span className="truncate leading-tight">{label}</span>}
        {collapsed && (
          <span className="pointer-events-none absolute left-full ml-3 translate-y-[-50%] rounded bg-slate-800 px-2 py-1 text-xs text-white opacity-0 shadow-md transition-all group-hover:translate-y-0 group-hover:opacity-100">
            {label}
          </span>
        )}
      </Link>
    );
  };

  const Inner = (mobile = false) => (
    <div className="flex h-full flex-col">
      <div
        className={classNames(
          "mx-4 mb-6 flex items-center border-b border-white/10 pb-5",
          collapsed && !mobile ? "justify-center" : "justify-between"
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
        {!mobile && (
          <button
            onClick={toggleCollapse}
            className="rounded p-1 text-slate-300 transition hover:bg-white/5"
            aria-label="Toggle sidebar"
          >
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        )}
      </div>
      <nav className="scrollbar-hide flex-1 space-y-1 overflow-y-auto px-2">
        {MENUS.map((item) => (
          <Item key={item.href} {...item} />
        ))}
      </nav>
      <button
        onClick={() => console.log("TODO: logout")}
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
      <aside
        className={classNames(
          "fixed inset-y-0 left-0 z-40 hidden bg-gradient-to-b from-slate-900/95 to-slate-800/95 shadow-xl backdrop-blur lg:flex",
          "transition-[width] duration-300",
          collapsed ? "w-20" : "w-64"
        )}
      >
        {Inner(false)}
      </aside>
      <header className="lg:hidden z-40 flex items-center justify-between bg-slate-900/95 px-4 py-3 shadow-md backdrop-blur">
        <button
          onClick={openDrawer}
          className="rounded-md bg-white/5 p-2 text-orange-400 hover:bg-orange-500 hover:text-white"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
        <span className="text-lg font-semibold text-white">PondZone</span>
      </header>
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur"
            onClick={closeDrawer}
          />
          <aside className="relative h-full w-64 max-w-[80%] animate-slideIn bg-gradient-to-b from-slate-900/95 to-slate-800/95 shadow-xl">
            <button
              onClick={closeDrawer}
              className="absolute right-4 top-4 rounded p-1 text-slate-300 transition hover:bg-white/5"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
            {Inner(true)}
          </aside>
        </div>
      )}
    </>
  );
}
