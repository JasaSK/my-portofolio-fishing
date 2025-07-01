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
        <section className="relative isolate container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 lg:pt-36">
          <div className="w-full max-w-3xl lg:max-w-5xl mx-auto py-16 sm:py-24 lg:py-32">
            <FadeInSection direction="in">
              <div className="mb-6 flex justify-center sm:mb-8 animate-fadeInLeft">
                <div className="relative rounded-md sm:rounded-full px-3 py-1 text-xs sm:text-sm text-gray-100 ring-1 ring-gray-100/10 hover:ring-gray-100/20">
                  Announcing our next round of funding.{" "}
                  <a href="#" className="font-semibold text-orange-500">
                    <span
                      className="absolute inset-0"
                      aria-hidden="true"
                    ></span>
                    Read more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </FadeInSection>

            <div className="text-center">
              <FadeInSection direction="in">
                <h1 className="text-3xl sm:text-5 xl lg:text-7xl font-semibold tracking-tight text-white animate-scaleIn">
                  Data to enrich your online business
                </h1>
              </FadeInSection>

              <FadeInSection direction="in">
                <p className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl font-medium text-white animate-fadeIn">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat.
                </p>
              </FadeInSection>

              <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-x-6">
                <FadeInSection direction="in">
                  <a
                    href="#"
                    className="animate-fadeIn rounded-md bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </a>
                </FadeInSection>
                <FadeInSection direction="right">
                  <a
                    href="#"
                    className="animate-fadeInRight text-sm font-semibold text-white"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </FadeInSection>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Produk />

      <Gird />
    </>
  );
}
