"use client";
import Image from "next/image";
import FadeInSection from "./FadeInSection.js";
import { useState } from "react";
const products = [
  {
    id: 1,
    name: "Basic Tee",
    color: "Black",
    price: "$35",
    image: "/images/background.jpg",
  },
  {
    id: 2,
    name: "Basic Tee",
    color: "Black",
    price: "$35",
    image: "/images/background.jpg",
  },
  {
    id: 3,
    name: "Basic Tee",
    color: "Black",
    price: "$35",
    image: "/images/background.jpg",
  },
  {
    id: 4,
    name: "Basic Tee",
    color: "Black",
    price: "$35",
    image: "/images/background.jpg",
  },
  {
    id: 5,
    name: "Basic Tee",
    color: "Black",
    price: "$35",
    image: "/images/background.jpg",
  },
  {
    id: 6,
    name: "Basic Tee",
    color: "Black",
    price: "$35",
    image: "/images/background.jpg",
  },
  {
    id: 7,
    name: "Basic Tee",
    color: "Black",
    price: "$35",
    image: "/images/background.jpg",
  },
  {
    id: 8,
    name: "Basic Tee",
    color: "Black",
    price: "$35",
    image: "/images/background.jpg",
  },
  {
    id: 9,
    name: "Basic Tee",
    color: "Black",
    price: "$35",
    image: "/images/background.jpg",
  },
  {
    id: 10,
    name: "Basic Tee",
    color: "Black",
    price: "$35",
    image: "/images/background.jpg",
  },
  {
    id: 11,
    name: "Basic Tee",
    color: "Black",
    price: "$35",
    image: "/images/background.jpg",
  },
  {
    id: 12,
    name: "Basic Tee",
    color: "Black",
    price: "$35",
    image: "/images/background.jpg",
  },
  {
    id: 13,
    name: "Basic Tee",
    color: "Black",
    price: "$35",
    image: "/images/background.jpg",
  },
  {
    id: 14,
    name: "Basic Tee",
    color: "Black",
    price: "$35",
    image: "/images/background.jpg",
  },
];

export default function Product() {
  const [showAll, setShowAll] = useState(false);
  const visibleProducts = showAll ? products : products.slice(0, 8);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <FadeInSection direction="left">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Customers also purchased
            </h2>
          </FadeInSection>
          <FadeInSection direction="right">
            <a
              href="/main/PondZone"
              className="text-sm font-medium font-sans tracking-tight text-gray-900 cursor-pointer hover:text-orange-600 transition"
            >
              Telusuri lebih lanjut →
            </a>
          </FadeInSection>
        </div>

        {/* GRID PRODUK */}
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 animate-fadeInUp">
          {visibleProducts.map((product) => (
            <FadeInSection key={product.id}>
              <div
                className="group relative cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:h-80"
                />
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="#" className="relative z-10">
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* MODAL DITARUH DI SINI */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/50 px-4">
            <div className="relative bg-white rounded-lg p-6 max-w-sm w-full shadow-lg">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-2 right-2 text-gray-500 hover:text-black text-2xl"
              >
                &times;
              </button>
              <FadeInSection direction="in">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  width={500}
                  height={500}
                  className="w-full rounded-md"
                />
                <h2 className="mt-4 text-lg font-bold text-gray-900">
                  {selectedProduct.name}
                </h2>
                <p className="text-sm text-gray-500">{selectedProduct.color}</p>
                <p className="mt-2 text-md font-semibold text-gray-900">
                  {selectedProduct.price}
                </p>
              </FadeInSection>
            </div>
          </div>
        )}
        
      </div>
    </div>
  );
}

export function Product1() {
  const [showAll, setShowAll] = useState(false);
  const visibleProducts = showAll ? products : products.slice(0, 8);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <FadeInSection direction="left">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Customers also purchased
            </h2>
          </FadeInSection>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {visibleProducts.map((product) => (
            <FadeInSection key={product.id}>
              <a href="" className="group">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                  width={500}
                  height={500}
                />
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {product.price}
                </p>
              </a>
            </FadeInSection>
          ))}
        </div>

        {!showAll && (
          <div className="flex justify-center mt-10">
            <FadeInSection direction="in">
              <button
                type="button"
                onClick={() => setShowAll(true)}
                className="w-lg cursor-pointer flex items-center justify-center text-gray-900 bg-white border border-gray-300 transition duration-500 ease-out hover:border-orange-500 hover:text-orange-500 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2"
              >
                Telusuri lebih lanjut
              </button>
            </FadeInSection>
          </div>
        )}
      </div>
    </div>
  );
}
