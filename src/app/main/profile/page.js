"use client";
import Image from "next/image";
import FadeInSection from "../../../components/FadeInSection.js";

export default function Profile() {
  return (
    <section className="w-full overflow-hidden">
      <div className="flex flex-col">
        <Image
          src="/images/background.jpg"
          alt="Fishing Lake Cover"
          className="w-full h-[11rem] sm:h-[14rem] md:h-[16rem] lg:h-[18rem] xl:h-[20rem] object-cover"
          width={1200}
          height={300}
        />

        <div className="w-[90%] sm:w-[80%] mx-auto flex flex-col sm:flex-row items-center gap-4 -mt-10 sm:-mt-14 md:-mt-18 lg:-mt-20">
          <FadeInSection direction="in">
            <div className="relative group">
              <div className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 rounded-full p-[4px] shadow-md">
                <Image
                  src="/images/pancing1.jpg"
                  alt="Fishing Spot Profile"
                  width={300}
                  height={300}
                  className="rounded-full object-cover w-[7rem] h-[7rem] sm:w-[8rem] sm:h-[8rem] md:w-[10rem] md:h-[10rem] lg:w-[12rem] lg:h-[12rem]"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer">
                <button
                  onClick={() => alert("Edit Photo")}
                  className="text-white text-xl hover:text-orange-500"
                  title="Edit Photo"
                >
                  ✎
                </button>
              </div>
            </div>
          </FadeInSection>
          <FadeInSection direction="left">
            <h1 className="text-gray-800 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-center lg:text-left -mt-2">
              Danau Pemancingan PondZone
            </h1>
          </FadeInSection>
        </div>

        <div className="w-[90%] sm:w-[92%] md:w-[90%] lg:w-[90%] xl:w-[80%] mx-auto flex flex-col gap-6 items-center mt-4">
          <FadeInSection direction="in">
            <p className="text-gray-700 text-sm sm:text-base text-center leading-relaxed">
              PondZone adalah tempat pemancingan terbaik yang menawarkan suasana
              alam yang tenang dan spot memancing yang lengkap. Cocok untuk
              keluarga, komunitas, maupun pemancing profesional. Nikmati
              pengalaman memancing yang menyenangkan dengan fasilitas lengkap
              dan pelayanan ramah.
            </p>
          </FadeInSection>

          <div className="w-full flex flex-col sm:flex-row gap-6 justify-between">
            <div className="w-full">
              <dl className="text-gray-700 divide-y divide-gray-200">
                {["Jenis Spot", "Ukuran Area", "Jumlah Ikan", "Fasilitas"].map(
                  (label, idx) => {
                    const values = [
                      "Danau Buatan",
                      "2 Hektar",
                      "5000+ ekor",
                      "Saung, Kafe, Toilet, Musholla",
                    ];
                    return (
                      <div key={idx} className="flex flex-col py-3">
                        <FadeInSection direction="in">
                          <dt className="mb-1 text-gray-500 text-sm sm:text-base md:text-lg">
                            {label}
                          </dt>
                        </FadeInSection>
                        <FadeInSection direction="left">
                          <dd className="text-base sm:text-lg font-semibold">
                            {values[idx]}
                          </dd>
                        </FadeInSection>
                      </div>
                    );
                  }
                )}
              </dl>
            </div>

            <div className="w-full">
              <dl className="text-gray-700 divide-y divide-gray-200">
                {["Lokasi", "Telepon", "Email", "Website"].map((label, idx) => {
                  const values = [
                    "Depok, Jawa Barat",
                    "+62 812 3456 7890",
                    "info@pondzone.id",
                    <a
                      key="website"
                      href="https://pondzone.id"
                      className="hover:text-blue-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://pondzone.id
                    </a>,
                  ];
                  return (
                    <div key={idx} className="flex flex-col py-3">
                      <FadeInSection direction="in">
                        <dt className="mb-1 text-gray-500 text-sm sm:text-base md:text-lg">
                          {label}
                        </dt>
                      </FadeInSection>
                      <FadeInSection direction="left">
                        <dd className="text-base sm:text-lg font-semibold">
                          {values[idx]}
                        </dd>
                      </FadeInSection>
                    </div>
                  );
                })}
              </dl>
            </div>
          </div>

          <FadeInSection direction="in">
            <div className="w-full flex flex-col items-center gap-6 my-10">
              <FadeInSection direction="in">
                <h1 className="font-serif border-b-4 border-blue-900 text-black/80 text-xl sm:text-2xl lg:text-4xl w-fit">
                  Lokasi Kami
                </h1>
              </FadeInSection>

              <div className="w-[80vw] h-[200px] sm:h-[250px] md:h-[300px] rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=..."
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
