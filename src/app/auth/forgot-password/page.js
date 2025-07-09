"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { forgotPassword, resetPassword } from "@/services/authService";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirm) {
      toast.error("Konfirmasi password tidak cocok");
      return;
    }

    try {
      setLoading(true);
      toast.loading("Mengatur ulang password...", { id: "reset" });

      await resetPassword({
        email,
        code,
        password,
        password_confirmation: confirm, 
      });

      toast.success("Password berhasil diubah", { id: "reset" });
      router.push("/auth/login");
    } catch (err) {
      toast.error(err.response?.data?.message || "Terjadi kesalahan", {
        id: "reset",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = async () => {
    if (!email) {
      toast.error("Masukkan email terlebih dahulu");
      return;
    }

    try {
      setResending(true);
      toast.loading("Mengirim ulang kode...", { id: "resend" });

      await forgotPassword(email);

      toast.success("Kode verifikasi dikirim ulang", { id: "resend" });
    } catch (err) {
      toast.error(err.response?.data?.message || "Gagal mengirim ulang kode", {
        id: "resend",
      });
    } finally {
      setResending(false);
    }
  };

  return (
    <main className="min-h-screen bg-zinc-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-zinc-800 text-white shadow-xl rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-orange-400">Reset Password</h2>
          <p className="text-zinc-300 text-sm">
            Masukkan kode dari email dan buat password baru
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email Anda"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 border border-zinc-600 bg-zinc-700 rounded-xl text-sm text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Kode Verifikasi"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
              className="w-full px-4 py-3 border border-zinc-600 bg-zinc-700 rounded-xl text-sm text-white placeholder-zinc-400"
            />
            <button
              type="button"
              onClick={handleResendCode}
              disabled={resending}
              className="px-4 text-sm text-orange-400 border border-orange-500 rounded-xl hover:bg-orange-500 hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {resending ? "Mengirim..." : "Kirim Ulang"}
            </button>
          </div>
          <input
            type="password"
            placeholder="Password Baru"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 border border-zinc-600 bg-zinc-700 rounded-xl text-sm text-white placeholder-zinc-400"
          />
          <input
            type="password"
            placeholder="Ulangi Password Baru"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
            className="w-full px-4 py-3 border border-zinc-600 bg-zinc-700 rounded-xl text-sm text-white placeholder-zinc-400"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 text-white font-semibold py-3 rounded-xl hover:bg-orange-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Menyimpan..." : "Simpan Password Baru"}
          </button>
        </form>

        <p className="text-center text-sm text-zinc-400">
          Kembali ke{" "}
          <a
            href="/auth/login"
            className="text-orange-400 hover:underline font-semibold"
          >
            Halaman Login
          </a>
        </p>
      </div>
    </main>
  );
}
