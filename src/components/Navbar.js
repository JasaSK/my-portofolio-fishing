"use client";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 text-white">
      <nav className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1 ">
          <a href="#" className="-m-1.5 p-1.5">
            <h1 className="font-bold">Pemancingan</h1>
          </a>
        </div>
        

        {/* Desktop nav */}
        <div className="hidden lg:flex lg:gap-x-12 ">
          <a
            href="/home"
            className="text-sm font-semibold  hover:text-white/70"
          >
            Home
          </a>
          <a
            href="/PondZone"
            className="text-sm font-semibold  hover:text-white/70"
          >
            PondZone
          </a>
          <a
            href="#"
            className="text-sm font-semibold  hover:text-white/70"
          >
            Profile
          </a>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
          <a href="#" className="text-sm font-semibold ">
            Log in →
          </a>
        </div>

        {/* Hamburger icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="-m-2.5 p-2.5 text-gray-700"
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

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}
