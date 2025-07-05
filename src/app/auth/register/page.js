"use client";

import Image from "next/image";
import PasswordInput from "../../../components/Input.js";
import FadeInSection from "../../../components/FadeInSection.js";

export default function Register() {
  return (
    <FadeInSection direction="in">
      <main className="min-h-screen bg-zinc-900 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md bg-zinc-800 text-white shadow-xl rounded-2xl p-6 sm:p-8">
          <h2 className="text-3xl font-bold text-orange-400 text-center mb-2">
            Buat Akun Baru
          </h2>
          <p className="text-zinc-300 text-center mb-6 text-sm">
            Yuk bergabung dengan{" "}
            <span className="font-semibold text-orange-500">PondZone</span>
          </p>

          {/* Google Button */}
          <button
            type="button"
            className="flex items-center justify-center gap-2 w-full py-3 mb-6 rounded-xl border border-zinc-600 bg-zinc-700 hover:bg-zinc-600 transition text-sm text-white font-medium"
          >
            <Image
              src="/images/google.png"
              alt="Google Logo"
              width={20}
              height={20}
              className="inline-block"
            />
            Daftar dengan Google
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-zinc-600" />
            <span className="mx-4 text-zinc-400 text-sm">atau</span>
            <hr className="flex-grow border-zinc-600" />
          </div>

          {/* Form */}
          <form action="/auth/confirmation" className="space-y-5">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-zinc-300 mb-1"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="john_doe"
                className="w-full px-4 py-3 border border-zinc-600 bg-zinc-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm placeholder-zinc-400"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-zinc-300 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-zinc-600 bg-zinc-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm placeholder-zinc-400"
              />
            </div>

            <div>
              <label
                htmlFor="no_telp"
                className="block text-sm font-medium text-zinc-300 mb-1"
              >
                No. Telepon
              </label>
              <input
                id="no_telp"
                type="tel"
                placeholder="08xxxxxxxxxx"
                className="w-full px-4 py-3 border border-zinc-600 bg-zinc-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm placeholder-zinc-400"
              />
            </div>

            <PasswordInput dark />

            {/* Checkbox Agreement */}
            <div className="flex items-center gap-2 text-sm text-zinc-300">
              <input
                type="checkbox"
                id="agree"
                className="w-4 h-4 rounded border-zinc-600 text-orange-500 bg-zinc-700 focus:ring-orange-500"
              />
              <label htmlFor="agree" className="leading-snug">
                Saya setuju dengan{" "}
                <a href="#" className="text-orange-400 hover:underline">
                  Syarat & Ketentuan
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white font-semibold py-3 rounded-xl hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 transition"
            >
              Daftar
            </button>
          </form>

          <p className="text-center text-sm text-zinc-400 mt-6">
            Sudah punya akun?{" "}
            <a
              href="/auth/login"
              className="text-orange-400 hover:underline font-semibold"
            >
              Masuk di sini
            </a>
          </p>
        </div>
      </main>
    </FadeInSection>
  );
}
