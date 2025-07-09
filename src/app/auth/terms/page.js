"use client";

import Link from "next/link";
import FadeInSection from "../../../components/FadeInSection";

export default function TermsPage() {
  return (
    <FadeInSection direction="in">
      <main className="min-h-screen bg-zinc-900 text-white px-6 py-12">
        <div className="max-w-3xl mx-auto bg-zinc-800 p-8 rounded-2xl shadow-xl">
          <h1 className="text-3xl font-bold text-orange-400 mb-4">
            Syarat & Ketentuan
          </h1>

          <p className="text-zinc-300 mb-4 text-sm">
            Dengan mendaftar di <span className="text-orange-500 font-semibold">PondZone</span>, Anda menyetujui hal-hal berikut:
          </p>

          <ul className="list-disc list-inside text-sm text-zinc-300 space-y-3">
            <li>
              Data pribadi Anda akan digunakan hanya untuk keperluan layanan dan tidak akan dibagikan tanpa izin.
            </li>
            <li>
              Anda bertanggung jawab atas kerahasiaan akun dan aktivitas yang dilakukan di dalamnya.
            </li>
            <li>
              Dilarang menggunakan layanan untuk tindakan yang melanggar hukum atau merugikan pihak lain.
            </li>
            <li>
              Kami berhak mengubah syarat dan ketentuan ini kapan saja, dan Anda disarankan untuk meninjaunya secara berkala.
            </li>
            <li>
              Pelanggaran terhadap ketentuan ini dapat mengakibatkan pembatasan akses atau penghapusan akun.
            </li>
          </ul>

          <p className="text-zinc-400 text-sm mt-6">
            Dengan menggunakan layanan kami, Anda dianggap telah membaca dan menyetujui seluruh syarat dan ketentuan ini.
          </p>

          <div className="mt-8 text-sm text-center">
            <Link
              href="/auth/register"
              className="text-orange-400 hover:underline font-semibold"
            >
              Kembali ke Pendaftaran
            </Link>
          </div>
        </div>
      </main>
    </FadeInSection>
  );
}
