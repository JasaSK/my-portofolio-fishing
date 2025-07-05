"use client";
import Image from "next/image";
import FadeInSection from "./FadeInSection.js";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link.js";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { products } from "../data/DataProduct.js"; // Pastikan path sesuai
import { reviews } from "../data/DataReviews.js";
import { useEffect } from "react";

export default function ProductList() {
  const [showAll, setShowAll] = useState(false);
  const visibleProducts = showAll ? products : products.slice(0, 8);
  const router = useRouter();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <FadeInSection direction="left">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Customers also purchased
            </h2>
          </FadeInSection>
          <FadeInSection direction="right">
            <Link
              href="/main/PondZone"
              className="inline-flex items-center gap-1 text-sm font-medium text-gray-800 hover:text-orange-600 transition-colors duration-300 group"
            >
              Telusuri lebih banyak
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </FadeInSection>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 mt-6">
          {visibleProducts.map((product) => (
            <FadeInSection key={product.id}>
              <div
                onClick={() => router.push(`/detailProduct/${product.id}`)}
                className="group cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 relative"
              >
                {/* Gambar Produk + Badge */}
                <div className="relative w-full aspect-square bg-gray-200">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.status && (
                    <span
                      className={`absolute top-3 left-3 text-xs font-semibold px-2 py-1 rounded-full 
                     ${
                       product.status.toLowerCase() === "available"
                         ? "bg-green-100 text-green-700"
                         : "bg-red-100 text-red-700"
                     }
                    `}
                    >
                      {product.status}
                    </span>
                  )}
                </div>

                {/* Konten */}
                <div className="p-4 space-y-1">
                  <h3 className="text-base font-semibold text-gray-800 truncate">
                    {product.name}
                  </h3>

                  <div className="flex items-center space-x-1">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => {
                        const rating = product.rating || 0;

                        if (rating >= i + 1) {
                          return (
                            <FaStar
                              key={i}
                              className="text-yellow-400 w-4 h-4"
                            />
                          );
                        } else if (rating >= i + 0.5) {
                          return (
                            <FaStarHalfAlt
                              key={i}
                              className="text-yellow-400 w-4 h-4"
                            />
                          );
                        } else {
                          return (
                            <FaRegStar
                              key={i}
                              className="text-gray-300 w-4 h-4"
                            />
                          );
                        }
                      })}
                  </div>
                  <p className="text-xs text-gray-500">
                    {reviews.filter((r) => r.productId === product.id).length}{" "}
                    ulasan
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    Mojokerto, Pacet
                  </p>
                  <p className="text-lg font-bold text-orange-600">
                    {product.price}
                  </p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  );
}
export function ProductListPondZone() {
  const [showAll, setShowAll] = useState(null); // null artinya belum dibaca
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem("showAll");
    if (stored === null) {
      setShowAll(false); // Jika belum ada di localStorage
    } else {
      setShowAll(stored === "true");
    }
  }, []);

  useEffect(() => {
    if (showAll !== null) {
      localStorage.setItem("showAll", showAll.toString());
    }
  }, [showAll]);

  if (showAll === null) {
    return <div>Loading...</div>; // atau skeleton
  }

  const visibleProducts = showAll ? products : products.slice(0, 8);

  return (
    <div className="mt-10 bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <FadeInSection direction="left">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Customers also purchased
            </h2>
          </FadeInSection>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 mt-6">
          {visibleProducts.map((product) => (
            <FadeInSection key={product.id}>
              <div
                onClick={() => router.push(`/detailProduct/${product.id}`)}
                className="group cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 relative"
              >
                {/* Gambar Produk + Badge */}
                <div className="relative w-full aspect-square bg-gray-200">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.status && (
                    <span
                      className={`absolute top-3 left-3 text-xs font-semibold px-2 py-1 rounded-full 
                     ${
                       product.status.toLowerCase() === "available"
                         ? "bg-green-100 text-green-700"
                         : "bg-red-100 text-red-700"
                     }
                    `}
                    >
                      {product.status}
                    </span>
                  )}
                </div>

                {/* Konten */}
                <div className="p-4 space-y-1">
                  <h3 className="text-base font-semibold text-gray-800 truncate">
                    {product.name}
                  </h3>

                  <div className="flex items-center space-x-1">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => {
                        const rating = product.rating || 0;

                        if (rating >= i + 1) {
                          return (
                            <FaStar
                              key={i}
                              className="text-yellow-400 w-4 h-4"
                            />
                          );
                        } else if (rating >= i + 0.5) {
                          return (
                            <FaStarHalfAlt
                              key={i}
                              className="text-yellow-400 w-4 h-4"
                            />
                          );
                        } else {
                          return (
                            <FaRegStar
                              key={i}
                              className="text-gray-300 w-4 h-4"
                            />
                          );
                        }
                      })}
                  </div>
                  <p className="text-xs text-gray-500">
                    {reviews.filter((r) => r.productId === product.id).length}{" "}
                    ulasan
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    Mojokerto, Pacet
                  </p>
                  <p className="text-lg font-bold text-orange-600">
                    {product.price}
                  </p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        {showAll === false && (
          <div className="flex justify-center mt-10">
            <FadeInSection direction="in">
              <button
                type="button"
                onClick={() => setShowAll(true)}
                className="px-5 py-2.5 text-sm rounded-full border border-gray-300 text-gray-900 hover:border-orange-500 hover:text-orange-500 transition"
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
