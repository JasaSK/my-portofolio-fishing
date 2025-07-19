"use client";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import MiniCartDropdown from "./MiniCartDropdown";
import { useRouter } from "next/navigation";

export default function Navbar({
  bg = "bg-white",
  className = "",
  transparent = true,
  scrollEffect = true,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [showCart, setShowCart] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token); // true kalau ada token
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    router.push("/auth/login"); // Redirect ke login
  };

  useEffect(() => {
    const checkLogin = () => {
      const token = localStorage.getItem("authToken");
      setIsLoggedIn(!!token);
    };

    checkLogin();

    window.addEventListener("storage", checkLogin); // kalau pakai lebih dari 1 tab
    return () => window.removeEventListener("storage", checkLogin);
  }, []);

  let cartTimeout;
  const handleEnter = () => {
    clearTimeout(cartTimeout);
    setShowCart(true);
  };

  const handleLeave = () => {
    cartTimeout = setTimeout(() => {
      setShowCart(false);
    }, 200);
  };

  const cartItems = [
    {
      name: "Ikan Lele Jumbo",
      quantity: 2,
      price: 15000,
      image: "/images/pancing1.jpg",
    },
    {
      name: "Ikan Patin",
      quantity: 1,
      price: 20000,
      image: "/images/pancing2.jpg",
    },
  ];

  useEffect(() => {
    if (!scrollEffect) return;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      setShowNavbar(currentScrollY <= lastScrollY || currentScrollY <= 10);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, scrollEffect]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  const headerBg = transparent ? (isScrolled ? bg : "bg-transparent") : bg;
  const shadowClass = transparent && !isScrolled ? "" : "shadow-md";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${headerBg} ${shadowClass} ${
        scrollEffect && !showNavbar ? "-translate-y-full" : "translate-y-0"
      } ${className}`}
    >
      {/* TOPBAR */}
      <div className="hidden md:block bg-gray-900 text-gray-100 text-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          <div className="flex gap-6">
            <Link href="/faq" className="hover:text-orange-400 transition">
              FAQ
            </Link>
            <Link
              href="/tentang-kami"
              className="hover:text-orange-400 transition"
            >
              Tentang Kami
            </Link>
          </div>
          <div className="flex gap-4">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="hover:text-orange-400 transition"
              >
                Keluar
              </button>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  className="hover:text-orange-400 transition"
                >
                  Masuk
                </Link>
                <Link
                  href="/auth/register"
                  className="hover:text-orange-400 transition"
                >
                  Daftar
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="gap-6 bg-white flex items-center justify-between flex-wrap py-4 lg:px-10 px-4 text-gray-800 shadow-sm">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-orange-600"
          >
            🎣 Pemancingan
          </Link>
        </div>

        {/* Search */}
        <div className="hidden lg:flex lg:flex-1 justify-center">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Cari tempat..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-full border border-gray-300 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Menu + Cart + Login */}
        <div className="flex items-center gap-4">
          {/* Desktop Nav */}
          <div className="hidden lg:flex lg:gap-x-6">
            {["Home", "PondZone", "Profile"].map((label) => (
              <Link
                key={label}
                href={`/main/${
                  label === "Home" ? "home" : label.toLowerCase()
                }`}
                className="text-sm font-medium hover:text-orange-600 transition"
              >
                {label}
              </Link>
            ))}
          </div>
          {/* Cart */}
          <div
            className="relative"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            <button
              className="relative text-gray-700 hover:text-orange-500 transition"
              onClick={() => setShowCart((prev) => !prev)} // opsional kalau mau klik juga bisa toggle
            >
              <FaShoppingCart className="text-xl" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-1.5 rounded-full shadow">
                  {cartItems.length}
                </span>
              )}
            </button>

            {/* Keep this inside the same parent so hover works */}
            {showCart && (
              <div
                className="absolute right-0 mt-2 w-max"
                onMouseEnter={() => setShowCart(true)}
                onMouseLeave={() => setShowCart(false)}
              >
                <MiniCartDropdown cartItems={cartItems} />
              </div>
            )}
          </div>

          {/* Login button */}
          {isLoggedIn ? (
            <>
              <Link
                href="/dashboard"
                className="hidden lg:inline-flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-orange-500 transition group"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="hidden lg:inline-flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-orange-500 transition group"
              >
                Logout
                <span className="group-hover:translate-x-1 transition-transform">
                  ↩
                </span>
              </button>
            </>
          ) : (
            <Link
              href="/auth/login"
              className="hidden lg:inline-flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-orange-500 transition group"
            >
              Login
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          )}

          {/* Hamburger menu */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 text-gray-700 hover:text-orange-500"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}
