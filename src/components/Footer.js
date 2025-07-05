"use client";
import FadeInSection from "./FadeInSection";
import { Background1 } from "./Background.js";

export default function Footer() {
  return (
    <footer className="relative bg-none">
      <Background1 className="inset-0 h-full" />

      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Kolom Info */}
          <div className="col-span-1">
            <FadeInSection direction="left">
              <h2 className="text-2xl font-bold text-white">
                Tentang PondZone
              </h2>
            </FadeInSection>
            <FadeInSection direction="left">
              <p className="mt-4 text-sm text-white/70">
                PondZone adalah destinasi terbaik untuk pecinta mancing.
                Menyediakan spot danau buatan dengan fasilitas lengkap dan
                suasana alami.
              </p>
            </FadeInSection>
          </div>

          {/* Kolom Link Navigasi */}
          <div className="col-span-1">
            <FadeInSection direction="in">
              <h3 className="text-lg font-semibold text-white mb-4">Menu</h3>
            </FadeInSection>
            <ul className="space-y-2 text-sm text-white/70">
              {["Beranda", "Lokasi", "Harga Tiket", "Reservasi", "Kontak"].map(
                (item) => (
                  <FadeInSection direction="in" key={item}>
                    <li>
                      <a href="#" className="hover:underline">
                        {item}
                      </a>
                    </li>
                  </FadeInSection>
                )
              )}
            </ul>
          </div>

          {/* Kolom Kontak */}
          <div className="col-span-1">
            <FadeInSection direction="in">
              <h3 className="text-lg font-semibold text-white mb-4">
                Hubungi Kami
              </h3>
            </FadeInSection>
            <FadeInSection direction="in">
              <p className="text-sm text-white/70">
                Jl. Pemancingan Asri No.12, Malang
              </p>
              <p className="text-sm text-white/70">Telp: 0812-3456-7890</p>
              <p className="text-sm text-white/70">Email: info@pondzone.id</p>
            </FadeInSection>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-sm text-white/50 text-center">
          &copy; {new Date().getFullYear()} PondZone. Seluruh hak cipta
          dilindungi.
        </div>
      </div>
    </footer>
  );
}
