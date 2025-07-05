"use client";
import Image from "next/image";
import FadeInSection from "./FadeInSection";

export default function Gird() {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 pt-8 sm:pt-12 pb-24 sm:pb-32 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <FadeInSection direction="left">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Fasilitas dan Informasi Pemancingan
            </h2>
          </FadeInSection>

          <FadeInSection direction="in">
            <p className="mt-4 text-gray-500">
              PondZone menyediakan berbagai fasilitas lengkap untuk menunjang
              kenyamanan Anda saat memancing bersama keluarga atau komunitas.
              Didesain khusus agar cocok untuk pemancing pemula hingga
              profesional.
            </p>
          </FadeInSection>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {[
              { label: "Jenis Spot", value: "Danau Buatan Air Tawar" },
              { label: "Ukuran Area", value: "± 2 Hektar" },
              {
                label: "Jumlah Ikan",
                value: "5000+ Ekor (Lele, Nila, Gurame)",
              },
              { label: "Fasilitas", value: "Saung, Kafe, Toilet, Musholla" },
              { label: "Jam Operasional", value: "Setiap hari, 06.00 – 18.00" },
              { label: "Tiket Masuk", value: "Mulai dari Rp25.000/orang" },
            ].map((item, index) => (
              <div key={index} className="border-t border-gray-200 pt-4">
                <FadeInSection direction="left">
                  <dt className="font-medium text-gray-900">{item.label}</dt>
                </FadeInSection>
                <FadeInSection direction="left">
                  <dd className="mt-2 text-sm text-gray-500">{item.value}</dd>
                </FadeInSection>
              </div>
            ))}
          </dl>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          {[1, 2, 3, 4].map((i) => (
            <FadeInSection direction="in" key={i}>
              <Image
                src="/images/background.jpg"
                alt={`Foto area pemancingan ${i}`}
                className="rounded-lg bg-gray-100 object-cover"
                width={500}
                height={600}
              />
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  );
}
