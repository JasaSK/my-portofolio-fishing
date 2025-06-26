"use client";

import { useState } from "react";

export default function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-6 text-start">
      <label htmlFor="password" className="mb-2 block text-sm text-gray-900">
        Password*
      </label>
      <div className="relative">
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          className="w-full px-5 py-4 text-sm font-medium bg-gray-200 text-gray-900 rounded-2xl placeholder:text-gray-700 outline-none focus:bg-gray-300 transition pr-24"
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-orange-600 hover:text-orange-800 focus:outline-none"
        >
          {showPassword ? "Sembunyikan" : "Tampilkan"}
        </button>
      </div>
    </div>
  );
}
