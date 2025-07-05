"use client";

import { useState } from "react";

export default function PasswordInput({ dark = false }) {
  const [showPassword, setShowPassword] = useState(false);

  const baseInputClass =
    "w-full px-5 py-4 text-sm font-medium rounded-xl outline-none transition pr-24";

  const lightStyle =
    "bg-orange-50 border border-orange-200 text-gray-900 placeholder:text-gray-600 focus:ring-2 focus:ring-orange-400 focus:border-transparent";
  const darkStyle =
    "bg-zinc-700 border border-zinc-600 text-white placeholder:text-zinc-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent";

  return (
    <div className="text-start">
      <label
        htmlFor="password"
        className={`mb-2 block text-sm ${
          dark ? "text-zinc-200" : "text-gray-900"
        }`}
      >
        Password*
      </label>
      <div className="relative">
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          className={`${baseInputClass} ${dark ? darkStyle : lightStyle}`}
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className={`absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold focus:outline-none ${
            dark
              ? "text-orange-400 hover:text-orange-300"
              : "text-orange-600 hover:text-orange-800"
          }`}
        >
          {showPassword ? "Sembunyikan" : "Tampilkan"}
        </button>
      </div>
    </div>
  );
}
