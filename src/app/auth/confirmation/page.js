"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaCheckCircle } from "react-icons/fa";
import { verifyCode, resendCode } from "../../../services/authService";
import Spinner from "../../../components/Spinner";
import toast from "react-hot-toast";

export default function ConfirmationPage() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [resendMessage, setResendMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [cooldown, setCooldown] = useState(60);
  const [redirectCountdown, setRedirectCountdown] = useState(2);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const storedEmail = localStorage.getItem("pendingEmail");
    if (!storedEmail) {
      toast.error("Email tidak ditemukan, silakan daftar ulang.");
      router.push("/auth/register");
    } else {
      setEmail(storedEmail);
    }
  }, [router]);

  useEffect(() => {
    let timer;
    if (cooldown > 0) {
      timer = setTimeout(() => setCooldown((prev) => prev - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [cooldown]);

  useEffect(() => {
    if (successMessage) {
      let redirectInterval;
      let redirectTimeout;

      redirectInterval = setInterval(() => {
        setRedirectCountdown((prev) => prev - 1);
      }, 1000);

      redirectTimeout = setTimeout(() => {
        router.push("/auth/login");
      }, redirectCountdown * 1000);

      return () => {
        clearInterval(redirectInterval);
        clearTimeout(redirectTimeout);
      };
    }
  }, [successMessage, redirectCountdown, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!code) {
      return toast.error("Kode tidak boleh kosong!");
    }

    if (code.length !== 6) {
      return toast.error("Kode harus 6 digit!");
    }

    setLoading(true);
    try {
      await verifyCode({ email, code });

      toast.success("Verifikasi berhasil!");
      localStorage.removeItem("pendingUsername");
      localStorage.removeItem("pendingPassword");
      localStorage.removeItem("pendingConfirmPassword");
      localStorage.removeItem("pendingEmail");
      router.push("/auth/login");
    } catch (err) {
      const res = err.response;

      if (res?.data?.errors) {
        // Jika ada banyak error field
        const messages = Object.values(res.data.errors).flat();
        messages.forEach((msg) => toast.error(msg));
      } else {
        // Jika hanya 1 pesan umum
        toast.error(res?.data?.message || "Terjadi kesalahan saat verifikasi.");
      }

      setError("Kode salah atau tidak valid."); // opsional, untuk ditampilkan di UI juga
    } finally {
      setLoading(false);
    }
  };
  const handleResend = async () => {
    setResendLoading(true);
    setCooldown(60);
    setResendMessage("");

    try {
      const response = await resendCode(email);
      setResendMessage(response.message || "Kode verifikasi dikirim ulang.");
    } catch (err) {
      console.error("Gagal mengirim ulang kode:", err);
      setResendMessage("Gagal mengirim ulang kode.");
    } finally {
      setResendLoading(false);
      setTimeout(() => setResendMessage(""), 4000);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  if (pageLoading) return <Spinner />;
  return (
    <main className="min-h-screen bg-zinc-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-zinc-800 text-white shadow-xl rounded-2xl p-6 sm:p-8 text-center">
        <FaCheckCircle className="text-orange-400 text-4xl mx-auto mb-4" />
        <h1 className="text-xl font-bold mb-2">Konfirmasi Pendaftaran</h1>

        <p className="text-zinc-300 text-sm mb-1">
          Kode verifikasi dikirim ke:
        </p>
        <p className="text-white font-medium text-sm mb-4">{email}</p>

        <p className="text-zinc-300 mb-6 text-sm">
          Masukkan kode yang dikirim ke email kamu untuk menyelesaikan
          pendaftaran.
        </p>

        {successMessage && (
          <div className="mb-4 bg-green-500/10 text-green-400 border border-green-600 px-4 py-3 rounded-md text-sm font-medium">
            <p>{successMessage}</p>
            <p className="text-xs text-green-300 mt-1">
              Mengarahkan ke login dalam {redirectCountdown} detik...
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Masukkan kode"
            value={code}
            // reset error saat user mengetik ulang
            onChange={(e) => {
              setCode(e.target.value);
              setError("");
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSubmit(e);
            }}
            autoFocus
            className="w-full px-4 py-3 border border-zinc-600 bg-zinc-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm placeholder-zinc-400"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex items-center justify-center gap-2 bg-orange-500 text-white font-semibold py-3 rounded-xl transition ${
              loading
                ? "opacity-70 cursor-wait"
                : "hover:bg-orange-600 cursor-pointer"
            }`}
          >
            {loading && (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
            )}
            {loading ? "Memverifikasi..." : "Verifikasi"}
          </button>
        </form>

        <div className="mt-6 text-sm text-zinc-400">
          Tidak menerima kode?{" "}
          <button
            onClick={handleResend}
            disabled={cooldown > 0 || resendLoading}
            className={`cursor-pointer font-semibold ${
              cooldown > 0 || resendLoading
                ? "text-zinc-500 cursor-not-allowed"
                : "text-orange-400 hover:underline"
            }`}
          >
            {resendLoading
              ? "Mengirim..."
              : `Kirim Ulang ${cooldown > 0 ? `(${cooldown}s)` : ""}`}
          </button>
        </div>

        {resendMessage && (
          <p className="mt-2 text-sm text-green-400">{resendMessage}</p>
        )}

        <p className="mt-4 text-sm text-zinc-400">
          Salah email?{" "}
          <button
            onClick={() => {
              localStorage.removeItem("pendingEmail");
              router.push("/auth/register");
            }}
            className="cursor-pointer text-orange-400 font-semibold hover:underline"
          >
            Ganti Email
          </button>
        </p>
      </div>
    </main>
  );
}
