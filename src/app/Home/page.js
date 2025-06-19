import Navbar from "../../components/Navbar.js";
import Background from "../../components/Background.js";
import Produk from "../../components/Product.js";
import Gird from "../../components/Grid.js";
import Footer from "../../components/Footer.js";

export default function Home() {
  return (
    <>
      <main className="relative min-h-screen">
        <Background />
        <Navbar />
        <section className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center animate-fadeInLeft">
              <div className="relative rounded-full px-3 py-1 text-sm text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Announcing our next round of funding.{" "}
                <a href="#" className="font-semibold text-orange-500">
                  <span className="absolute inset-0" aria-hidden="true"></span>
                  Read more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl animate-scaleIn">
                Data to enrich your online business
              </h1>
              <p className="mt-8 text-lg font-medium text-white sm:text-xl animate-fadeIn">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 ">
                <a
                  href="#"
                  className="animate-fadeIn rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a href="#" className="animate-fadeInRight text-sm font-semibold text-white">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Produk />
      <Gird />
      <Footer />
    </>
  );
}
