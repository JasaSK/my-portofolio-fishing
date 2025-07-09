"use client";

import Image from "next/image";
import PasswordInput from "../../../components/Input.js";
import FadeInSection from "../../../components/FadeInSection.js";
import { login } from "../../../services/authService.js";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link.js";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [history, setHistory] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("loginHistory")) || [];
    setHistory(stored.slice(-5).reverse());
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("authToken");
      if (storedToken) {
        router.push("/main/home");
      }
    }
  }, [router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const loadingToast = toast.loading("Sedang login...");
    try {
      const token = await login({ email, password });

      // ✅ Selalu simpan token agar tetap login
      localStorage.setItem("authToken", token);

      // ✅ Hanya simpan riwayat login jika "Ingat saya" dicentang
      if (rememberMe) {
        let loginHistory =
          JSON.parse(localStorage.getItem("loginHistory")) || [];

        const existingIndex = loginHistory.findIndex(
          (item) => item.email === email
        );

        const newEntry = {
          email,
          time: new Date().toISOString(),
          token,
        };

        if (existingIndex !== -1) {
          loginHistory[existingIndex] = newEntry;
        } else {
          loginHistory.push(newEntry);
        }

        loginHistory = loginHistory
          .sort((a, b) => new Date(b.time) - new Date(a.time))
          .slice(0, 5);

        localStorage.setItem("loginHistory", JSON.stringify(loginHistory));
        setHistory(loginHistory);
      }

      toast.success("Login sukses!", { id: loadingToast });
      router.push("/main/home");
    } catch (err) {
      const data = err.response?.data;
      let message = data?.message || "Terjadi kesalahan saat login.";

      if (data?.errors) {
        const allErrors = Object.values(data.errors).flat();
        if (allErrors.length > 0) {
          message = allErrors[0];
        }
      }

      toast.error(`Login gagal: ${message}`, { id: loadingToast });
    }
  };

  return (
    <FadeInSection direction="in">
      <main className="min-h-screen bg-zinc-900 flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-zinc-800 text-white shadow-xl rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-orange-400">
              Selamat Datang
            </h2>
            <p className="text-zinc-300 text-sm">
              Masuk ke akun Anda di{" "}
              <span className="font-semibold text-orange-500">PondZone</span>
            </p>
          </div>

          <button
            type="button"
            className="flex items-center justify-center w-full py-3 rounded-xl border border-zinc-600 bg-zinc-700 hover:bg-zinc-600 transition text-sm text-white font-medium"
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

          <div className="flex items-center">
            <hr className="flex-grow border-zinc-600" />
            <span className="mx-4 text-zinc-400 text-sm">atau</span>
            <hr className="flex-grow border-zinc-600" />
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-zinc-600 bg-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm text-white placeholder-zinc-400"
                required
              />
            </div>

            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              dark={true}
              required
            />

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 mr-2 text-orange-500 bg-zinc-700 border-zinc-500 focus:ring-orange-500 rounded"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span className="text-zinc-300">Ingat saya</span>
              </label>
              <Link href="/auth/forgot-password" className="text-orange-400 hover:underline">
                Lupa password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white font-semibold py-3 rounded-xl hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 transition"
            >
              Masuk
            </button>
          </form>

          {history.length > 0 && (
            <div className="text-sm text-zinc-300">
              <h3 className="text-orange-400 font-semibold mb-2">
                Riwayat Login
              </h3>
              <div className="max-h-32 overflow-y-auto space-y-2">
                {history.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between gap-4 bg-zinc-800 border border-zinc-700 px-4 py-3 rounded-xl hover:shadow-md transition"
                  >
                    <div className="flex flex-col text-sm">
                      <div className="flex items-center gap-2 text-white font-medium">
                        <svg
                          className="w-4 h-4 text-orange-400"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16 12H8m8 0l-4-4m4 4l-4 4"
                          />
                        </svg>
                        <span>{item.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-zinc-400 mt-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>{new Date(item.time).toLocaleString()}</span>
                      </div>
                    </div>

                    {item.token && (
                      <button
                        onClick={() => {
                          localStorage.setItem("authToken", item.token);
                          toast.success("Login cepat berhasil!");
                          router.push("/main/home");
                        }}
                        className="text-xs px-3 py-1 rounded-md text-orange-400 border border-orange-400 hover:bg-orange-500 hover:text-white transition"
                      >
                        Login Cepat
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <p className="text-center text-sm text-zinc-400">
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
