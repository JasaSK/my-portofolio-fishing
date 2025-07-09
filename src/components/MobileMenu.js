"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function MobileMenu({ isOpen, onClose }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    onClose(); // tutup menu
    router.push("/auth/login"); // redirect ke login
  };

  return (
    <>
      {/* Overlay Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>

      {/* Slide-in Panel */}
      <div
        className={`fixed inset-0 z-50 h-screen bg-white p-6 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
        } overflow-y-auto`}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image
              className="h-8 w-auto"
              src="/images/background.jpg"
              alt="Logo"
              width={50}
              height={60}
            />
          </Link>
          <button
            onClick={onClose}
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Close menu</span>
            <svg
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="mt-6">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {[
                { name: "Home", href: "/main/home" },
                { name: "PondZone", href: "/main/pondzone" },
                { name: "Profile", href: "/main/profile" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={onClose}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="py-6">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="-mx-3 w-full text-left rounded-lg px-3 py-2.5 text-base font-semibold text-red-600 hover:bg-gray-100"
                >
                  Logout
                </button>
              ) : (
                <Link
                  href="/auth/login"
                  onClick={onClose}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
              )}
              {!isLoggedIn && (
                <Link
                  href="/auth/register"
                  onClick={onClose}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Daftar
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
