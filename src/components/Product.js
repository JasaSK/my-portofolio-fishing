"use client";
import Image from "next/image";

export default function Product() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>
          <a
            href="/produk"
            className="text-sm font-medium font-sans tracking-tight text-gray-900 cursor-pointer hover:text-orange-600 transition"
          >
            Telusuri lebih lanjut →
          </a>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div className="group relative">
            <Image
              src="/images/background.jpg"
              alt="Basic Tee in black"
              width={500}
              height={500}
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:h-80"
            />
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="#" className="relative z-10">
                    Basic Tee
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Black</p>
              </div>
              <p className="text-sm font-medium text-gray-900">$35</p>
            </div>
          </div>
          <div className="group relative">
            <Image
              src="/images/background.jpg"
              alt="Basic Tee in black"
              width={500}
              height={500}
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:h-80"
            />
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="#" className="relative z-10">
                    Basic Tee
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Black</p>
              </div>
              <p className="text-sm font-medium text-gray-900">$35</p>
            </div>
          </div>
          <div className="group relative">
            <Image
              src="/images/background.jpg"
              alt="Basic Tee in black"
              width={500}
              height={500}
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:h-80"
            />
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="#" className="relative z-10">
                    Basic Tee
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Black</p>
              </div>
              <p className="text-sm font-medium text-gray-900">$35</p>
            </div>
          </div>
          <div className="group relative">
            <Image
              src="/images/background.jpg"
              alt="Basic Tee in black"
              width={500}
              height={500}
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:h-80"
            />
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="#" className="relative z-10">
                    Basic Tee
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Black</p>
              </div>
              <p className="text-sm font-medium text-gray-900">$35</p>
            </div>
          </div>
          <div className="group relative">
            <Image
              src="/images/background.jpg"
              alt="Basic Tee in black"
              width={500}
              height={500}
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:h-80"
            />
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="#" className="relative z-10">
                    Basic Tee
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Black</p>
              </div>
              <p className="text-sm font-medium text-gray-900">$35</p>
            </div>
          </div>
          <div className="group relative">
            <Image
              src="/images/background.jpg"
              alt="Basic Tee in black"
              width={500}
              height={500}
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:h-80"
            />
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="#" className="relative z-10">
                    Basic Tee
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Black</p>
              </div>
              <p className="text-sm font-medium text-gray-900">$35</p>
            </div>
          </div>
          <div className="group relative">
            <Image
              src="/images/background.jpg"
              alt="Basic Tee in black"
              width={500}
              height={500}
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:h-80"
            />
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="#" className="relative z-10">
                    Basic Tee
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Black</p>
              </div>
              <p className="text-sm font-medium text-gray-900">$35</p>
            </div>
          </div>
          <div className="group relative">
            <Image
              src="/images/background.jpg"
              alt="Basic Tee in black"
              width={500}
              height={500}
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:h-80"
            />
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="#" className="relative z-10">
                    Basic Tee
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Black</p>
              </div>
              <p className="text-sm font-medium text-gray-900">$35</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Product1() {
  return (
    <div className="bg-non">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <a href="#" className="group">
            <Image
              src="/images/background2.jpg"
              alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
              className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
              width={500}
              height={500}
            />
            <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
          </a>
          <a href="#" className="group">
            <Image
              src="/images/background2.jpg"
              alt="Olive drab green insulated bottle with flared screw lid and flat top."
              className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
              width={500}
              height={500}
            />
            <h3 className="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
          </a>
          <a href="#" className="group">
            <Image
              src="/images/background2.jpg"
              alt="Person using a pen to cross a task off a productivity paper card."
              className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
              width={500}
              height={500}
            />
            <h3 className="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">$89</p>
          </a>
          <a href="#" className="group">
            <Image
              src="/images/background2.jpg"
              alt="Hand holding black machined steel mechanical pencil with brass tip and top."
              className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
              width={500}
              height={500}
            />
            <h3 className="mt-4 text-sm text-gray-700">
              Machined Mechanical Pencil
            </h3>
            <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
          </a>
        </div>
      </div>
    </div>
  );
}
