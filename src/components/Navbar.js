"use client";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

export default function Navbar({
  bg = "bg-black/30 backdrop-blur shadow-md",
  className = "",
  transparent = true,
  scrollEffect = true,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (!scrollEffect) return;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 10) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, scrollEffect]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  const headerBg = transparent ? (isScrolled ? bg : "bg-transparent") : bg;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${headerBg} ${
        scrollEffect && !showNavbar ? "-translate-y-full" : "translate-y-0"
      } ${className}`}
    >
      <nav className="flex items-center justify-between p-6 lg:px-8 text-white">
        <div className="flex lg:flex-1">
          <Link href="#" className="-m-1.5 p-1.5">
            <h1 className="font-bold">Pemancingan</h1>
          </Link>
        </div>

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
            className="inline-flex items-center gap-1 text-sm font-semibold text-gray-300 hover:text-orange-500 transition-colors duration-300 group"
          >
            Log in
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

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
