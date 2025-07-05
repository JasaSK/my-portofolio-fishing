"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaCheckCircle } from "react-icons/fa";

export default function ConfirmationPage() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [resendMessage, setResendMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [cooldown, setCooldown] = useState(30);
  const router = useRouter();

  useEffect(() => {
    let timer;
    if (cooldown > 0) {
      timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [cooldown]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code === "123456") {
      setSuccessMessage("Kode berhasil diverifikasi!");
      setTimeout(() => {
        router.push("/main/home");
      }, 2000); // Delay 2 detik sebelum redirect
    } else {
      setError("Kode konfirmasi salah. Coba lagi.");
    }
  };

  const handleResend = () => {
    setResendMessage("Kode verifikasi telah dikirim ulang.");
    setCooldown(30);
    setTimeout(() => setResendMessage(""), 4000);
  };

  return (
    <main className="min-h-screen bg-zinc-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-zinc-800 text-white shadow-xl rounded-2xl p-6 sm:p-8 text-center">
        <FaCheckCircle className="text-orange-400 text-4xl mx-auto mb-4" />
        <h1 className="text-xl font-bold mb-2">Konfirmasi Pendaftaran</h1>
        <p className="text-zinc-300 mb-6 text-sm">
          Kami telah mengirimkan kode ke email atau nomor kamu. Masukkan kode
          tersebut untuk menyelesaikan pendaftaran.
        </p>

        {/* Alert Sukses */}
        {successMessage && (
          <div className="mb-4 bg-green-500/10 text-green-400 border border-green-600 px-4 py-3 rounded-md text-sm font-medium">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Masukkan kode"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full px-4 py-3 border border-zinc-600 bg-zinc-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm placeholder-zinc-400"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold py-3 rounded-xl hover:bg-orange-600 transition"
          >
            Verifikasi
          </button>
        </form>

        <div className="mt-6 text-sm text-zinc-400">
          Tidak menerima kode?{" "}
          <button
            onClick={handleResend}
            disabled={cooldown > 0}
            className={`font-semibold ${
              cooldown > 0
                ? "text-zinc-500 cursor-not-allowed"
                : "text-orange-400 hover:underline"
            }`}
          >
            Kirim Ulang {cooldown > 0 && `(${cooldown}s)`}
          </button>
        </div>

        {resendMessage && (
          <p className="mt-2 text-sm text-green-400">{resendMessage}</p>
        )}
      </div>
    </main>
  );
}
