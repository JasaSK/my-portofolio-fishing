// import Navbar from "../../components/Navbar.js";
import Background from "../../../components/Background.js";
import Produk from "../../../components/Product.js";
import Gird from "../../../components/Grid.js";
import FadeInSection from "../../../components/FadeInSection.js";

export default function Home() {
  return (
    <>
      <main className="relative h-[60vh] sm:h-[80vh] lg:h-screen">
        <Background />
        <section className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 lg:pt-36">
          <div className="max-w-4xl mx-auto py-16 sm:py-24 lg:py-32 text-center">
            <FadeInSection direction="in">
              <div className="mb-6 sm:mb-8">
                <div className="inline-block rounded-md sm:rounded-full px-3 py-1 text-xs sm:text-sm text-gray-100 ring-1 ring-white/10 hover:ring-white/20">
                  Pemesanan tiket online kini tersedia.{" "}
                  <a href="#" className="font-semibold text-orange-500">
                    Lihat detail →
                  </a>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="in">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white animate-scaleIn">
                Pesan Tiket Pemancingan Mudah & Cepat
              </h1>
            </FadeInSection>

            <FadeInSection direction="in">
              <p className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-white animate-fadeIn">
                Nikmati suasana alam dan pengalaman memancing yang tak
                terlupakan di PondZone. Pesan tiket secara online tanpa antre
                dan dapatkan promo menarik!
              </p>
            </FadeInSection>

            <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-4 sm:gap-6">
              <FadeInSection direction="in">
                <a
                  href="#"
                  className="rounded-md bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                >
                  Pesan Tiket Sekarang
                </a>
              </FadeInSection>
              <FadeInSection direction="right">
                <a href="#" className="text-sm font-semibold text-white">
                  Lihat Fasilitas →
                </a>
              </FadeInSection>
            </div>
          </div>
        </section>
      </main>

      <Produk />
      <Gird />
    </>
  );
}
