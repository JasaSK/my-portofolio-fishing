"use client";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

export default function Navbar({ bg = "bg-black/30 backdrop-blur shadow-md" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Atur background saat scroll melewati 50px
      setIsScrolled(currentScrollY > 50);

      // Sembunyikan navbar saat scroll ke bawah
      if (currentScrollY > lastScrollY && currentScrollY > 10) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-white transition-all duration-300 ${
        isScrolled ? bg : "bg-transparent"
      } ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
    >
      <nav className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="#" className="-m-1.5 p-1.5">
            <h1 className="font-bold">Pemancingan</h1>
          </Link>
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/main/home"
            className="text-sm font-semibold hover:text-white/70"
          >
            Home
          </Link>
          <Link
            href="/main/PondZone"
            className="text-sm font-semibold hover:text-white/70"
          >
            PondZone
          </Link>
          <Link
            href="/main/profile"
            className="text-sm font-semibold hover:text-white/70"
          >
            Profile
          </Link>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/auth/login"
            className="inline-flex items-center gap-1 text-sm font-semibold text-gray-500 hover:text-orange-600 transition-colors duration-300 group"
          >
            Log in
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Hamburger icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="-m-2.5 p-2.5 text-gray-300"
          >
            <svg className="size-6" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 6h18M3 12h18M3 18h18"
              />
            </svg>
          </button>
        </div>
      </nav>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}
