"use client";
import Image from "next/image";
import FadeInSection from "./FadeInSection";

export default function Gird() {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <FadeInSection direction="left">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Technical Specifications
            </h2>
          </FadeInSection>
          <FadeInSection direction="in">
            <p className="mt-4 text-gray-500">
              The walnut wood card tray is precision milled to perfectly fit a
              stack of Focus cards. The powder coated steel divider separates
              active cards from new ones, or can be used to archive important
              task lists.
            </p>
          </FadeInSection>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="border-t border-gray-200 pt-4">
              <FadeInSection direction="left">
                <dt className="font-medium text-gray-900">Origin</dt>
              </FadeInSection>
              <FadeInSection direction="left">
                <dd className="mt-2 text-sm text-gray-500">
                  Designed by Good Goods, Inc.
                </dd>
              </FadeInSection>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <FadeInSection direction="left">
                <dt className="font-medium text-gray-900">Material</dt>
              </FadeInSection>
              <FadeInSection direction="left">
                <dd className="mt-2 text-sm text-gray-500">
                  Solid walnut base with rare earth magnets and powder coated
                  steel card cover
                </dd>
              </FadeInSection>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <FadeInSection direction="left">
                <dt className="font-medium text-gray-900">Dimensions</dt>
              </FadeInSection>
              <FadeInSection direction="left">
                <dd className="mt-2 text-sm text-gray-500">
                  6.25&quot; x 3.55&quot; x 1.15&quot;
                </dd>
              </FadeInSection>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <FadeInSection direction="left">
                <dt className="font-medium text-gray-900">Finish</dt>
              </FadeInSection>
              <FadeInSection direction="left">
                <dd className="mt-2 text-sm text-gray-500">
                  Hand sanded and finished with natural oil
                </dd>
              </FadeInSection>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <FadeInSection direction="left">
                <dt className="font-medium text-gray-900">Includes</dt>
              </FadeInSection>
              <FadeInSection direction="left">
                <dd className="mt-2 text-sm text-gray-500">
                  Wood card tray and 3 refill packs
                </dd>
              </FadeInSection>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <FadeInSection direction="left">
                <dt className="font-medium text-gray-900">Considerations</dt>
              </FadeInSection>
              <FadeInSection direction="left">
                <dd className="mt-2 text-sm text-gray-500">
                  Made from natural materials. Grain and color vary with each
                  item.
                </dd>
              </FadeInSection>
            </div>
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <FadeInSection direction="in">
            <Image
              src="/images/background.jpg"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100"
              width={500}
              height={600}
            />
          </FadeInSection>
          <FadeInSection direction="in">
            <Image
              src="/images/background.jpg"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-gray-100"
              width={500}
              height={600}
            />
          </FadeInSection>
          <FadeInSection direction="in">
            <Image
              src="/images/background.jpg"
              alt="Side of walnut card tray with card groove and recessed card area."
              className="rounded-lg bg-gray-100"
              width={500}
              height={600}
            />
          </FadeInSection>
          <FadeInSection direction="in">
            <Image
              src="/images/background.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100"
              width={500}
              height={600}
            />
          </FadeInSection>
        </div>
      </div>
    </div>
  );
}
