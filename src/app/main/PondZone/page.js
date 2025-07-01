import { Background1 } from "../../../components/Background.js";
import {ProductListPondZone} from "../../../components/Product.js";
import FadeInSection from "../../../components/FadeInSection.js";

export default function PondZone() {
  return (
    <>
      <Background1 />

      <main className="relative z-10 bg-none pt-12 sm:pt-20 lg:pt-24 px-4 sm:px-6 lg:px-8 text-orange">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <FadeInSection direction="in">
              <h2 className="text-sm font-semibold text-orange-600">
                Deploy faster
              </h2>
            </FadeInSection>
            <FadeInSection direction="in">
              <p className="mt-2 text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
                Everything you need to deploy your app
              </p>
            </FadeInSection>
            <FadeInSection direction="in">
              <p className="mt-6 text-base leading-7 text-gray-300">
                Quis tellus eget adipiscing convallis sit sit eget aliquet
                quis...
              </p>
            </FadeInSection>
          </div>

          <div className="mx-auto mt-12 max-w-4xl">
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {/* Items... */}
            </dl>
          </div>
        </div>
      </main>

      <ProductListPondZone />
      
    </>
  );
}
