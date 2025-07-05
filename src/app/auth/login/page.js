"use client";

import Image from "next/image";
import PasswordInput from "../../../components/Input.js";
import FadeInSection from "../../../components/FadeInSection.js";

export default function Login() {
  return (
    <FadeInSection direction="in">
      <main className="min-h-screen bg-zinc-900 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md bg-zinc-800 text-white shadow-xl rounded-2xl p-6 sm:p-8">
          <h2 className="text-3xl font-bold text-orange-400 text-center mb-2">
            Selamat Datang
          </h2>
          <p className="text-zinc-300 text-center mb-6 text-sm">
            Masuk ke akun Anda di{" "}
            <span className="font-semibold text-orange-500">PondZone</span>
          </p>

          <button
            type="button"
            className="flex items-center justify-center w-full py-3 mb-6 rounded-xl border border-zinc-600 bg-zinc-700 hover:bg-zinc-600 transition text-sm text-white font-medium"
          >
            <Image
              src="/images/google.png"
              alt="Google Logo"
              width={20}
              height={20}
              className="mr-2"
            />
            Masuk dengan Google
          </button>

          <div className="flex items-center my-6">
            <hr className="flex-grow border-zinc-600" />
            <span className="mx-4 text-zinc-400 text-sm">atau</span>
            <hr className="flex-grow border-zinc-600" />
          </div>

          <form action="/" className="space-y-5">
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
                className="w-full px-4 py-3 border border-zinc-600 bg-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm text-white placeholder-zinc-400"
              />
            </div>

            <PasswordInput dark />

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 mr-2 text-orange-500 bg-zinc-700 border-zinc-500 focus:ring-orange-500 rounded"
                />
                <span className="text-zinc-300">Ingat saya</span>
              </label>
              <a href="#" className="text-orange-400 hover:underline">
                Lupa password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white font-semibold py-3 rounded-xl hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 transition"
            >
              Masuk
            </button>
          </form>

          <p className="text-center text-sm text-zinc-400 mt-6">
            Belum punya akun?{" "}
            <a
              href="/auth/register"
              className="text-orange-400 hover:underline font-semibold"
            >
              Daftar sekarang
            </a>
          </p>
        </div>
      </main>
    </FadeInSection>
  );
}
