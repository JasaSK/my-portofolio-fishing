"use client";

import Image from "next/image";
import PasswordInput from "../../../components/Input.js";
import FadeInSection from "../../../components/FadeInSection.js";
import { register } from "../../../services/authService.js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link.js";
import Spinner from "../../../components/Spinner.js";

import zxcvbn from "zxcvbn";

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const strength = zxcvbn(password);
  const [passwordStrength, setPasswordStrength] = useState(0); // skor 0‑4
  const handlePasswordChange = (e) => {
    const pwd = e.target.value;
    setPassword(pwd); // isi state password
    const { score } = zxcvbn(pwd); // hitung kekuatan
    setPasswordStrength(score); // simpan skor
  };
  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      return toast.error("Semua field wajib diisi!");
    }

    if (!email.includes("@")) {
      return toast.error("Email tidak valid.");
    }
    if (password.length < 8) {
      return toast.error("Password minimal 8 karakter.");
    }

    if (zxcvbn(password).score < 3) {
      return toast.error(
        "Password terlalu lemah. Gunakan kombinasi angka, huruf besar, dan simbol."
      );
    }

    if (password !== confirmPassword) {
      return toast.error("Password tidak cocok!");
    }
    if (!agreeToTerms) {
      return toast.error("Anda harus menyetujui Syarat & Ketentuan.");
    }
    setLoading(true);

    try {
      const res = await register({
        name,
        email,
        password,
        password_confirmation: confirmPassword,
      });

      toast.success("Registrasi berhasil!");
      localStorage.setItem("pendingUsername", name);
      localStorage.setItem("pendingPassword", password);
      localStorage.setItem("pendingConfirmPassword", confirmPassword);

      localStorage.setItem("pendingEmail", email);
      router.push("/auth/confirmation");
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Terjadi kesalahan saat mendaftar."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const savedName = localStorage.getItem("pendingUsername");
    const savedPassword = localStorage.getItem("pendingPassword");
    const savedConfirmPassword = localStorage.getItem("pendingConfirmPassword");

    if (savedName) setName(savedName);
    if (savedPassword) {
      setPassword(savedPassword);
      setPasswordStrength(zxcvbn(savedPassword).score);
    }
    if (savedConfirmPassword) setConfirmPassword(savedConfirmPassword);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  if (pageLoading) return <Spinner />;

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
            className="cursor-pointer flex items-center justify-center gap-2 w-full py-3 mb-6 rounded-xl border border-zinc-600 bg-zinc-700 hover:bg-zinc-600 transition text-sm text-white font-medium"
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
          <form onSubmit={handleRegister} className="space-y-5">
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="username"
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-zinc-600 bg-zinc-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm placeholder-zinc-400"
              />
            </div>

            <PasswordInput
              name="password"
              dark
              value={password}
              onChange={handlePasswordChange}
            />
            {password && (
              <div className="mt-1">
                <div className="w-full bg-zinc-600 rounded h-2">
                  <div
                    className={`h-2 rounded transition-all duration-300 ${
                      passwordStrength === 0
                        ? "w-1/5 bg-red-500"
                        : passwordStrength === 1
                        ? "w-2/5 bg-orange-500"
                        : passwordStrength === 2
                        ? "w-3/5 bg-yellow-400"
                        : passwordStrength === 3
                        ? "w-4/5 bg-green-500"
                        : "w-full bg-emerald-600"
                    }`}
                  ></div>
                </div>
                <p className="text-xs mt-1 text-zinc-300">
                  Kekuatan password:{" "}
                  <span className="font-medium text-white">
                    {
                      ["Sangat Lemah", "Lemah", "Cukup", "Kuat", "Sangat Kuat"][
                        passwordStrength
                      ]
                    }
                  </span>
                </p>
              </div>
            )}

            <PasswordInput
              name="confirmPassword"
              dark
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              label="Konfirmasi Password"
            />

            {/* Checkbox Agreement */}
            <div className="flex items-center gap-2 text-sm text-zinc-300">
              <input
                type="checkbox"
                id="agree"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                className="cursor-pointer w-4 h-4 rounded border-zinc-600 text-orange-500 bg-zinc-700 focus:ring-orange-500"
              />

              <label htmlFor="agree" className="leading-snug">
                Saya setuju dengan{" "}
                <Link
                  href="/auth/terms"
                  className="text-orange-400 hover:underline"
                >
                  Syarat & Ketentuan
                </Link>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center gap-2 bg-orange-500 text-white font-semibold py-3 rounded-xl transition ${
                loading
                  ? "bg-orange-400 cursor-not-allowed"
                  : "hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 cursor-pointer"
              }`}
            >
              {loading && (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
              )}
              {loading ? "Memproses..." : "Daftar"}
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
