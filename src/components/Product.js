"use client";
import Image from "next/image";
import FadeInSection from "./FadeInSection.js";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { products } from "../data/DataProduct.js";
import { reviews } from "../data/DataReviews.js";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

function ProductCard({ product }) {
  const router = useRouter();

  return (
    <FadeInSection key={product.id}>
      <div
        onClick={() => router.push(`/detailProduct/${product.id}`)}
        className="group cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 relative"
      >
        {/* Gambar Produk */}
        <div className="relative w-full aspect-square bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Konten */}
        <div className="p-4 space-y-2">
          <h3 className="text-base font-semibold text-gray-800 truncate">
            {product.name}
          </h3>

          <div className="flex items-center space-x-1">
            {Array(5)
              .fill(0)
              .map((_, i) => {
                const rating = product.rating || 0;
                if (rating >= i + 1) {
                  return <FaStar key={i} className="text-yellow-400 w-4 h-4" />;
                } else if (rating >= i + 0.5) {
                  return (
                    <FaStarHalfAlt
                      key={i}
                      className="text-yellow-400 w-4 h-4"
                    />
                  );
                } else {
                  return (
                    <FaRegStar key={i} className="text-gray-300 w-4 h-4" />
                  );
                }
              })}
          </div>

          <p className="text-xs text-gray-500">
            {reviews.filter((r) => r.productId === product.id).length} ulasan
          </p>
          <p className="text-sm text-gray-500 truncate">Mojokerto, Pacet</p>

          <div className="space-y-1">
            <p className="text-lg font-bold text-orange-600">{product.price}</p>
            <div className="flex items-center justify-between">
              {product.status && (
                <p
                  className={`text-xs font-semibold inline-block px-2 py-1 rounded-full
                ${
                  product.status.toLowerCase() === "available"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }
                `}
                >
                  {product.status}
                </p>
              )}
              <button className="cursor-pointer relative text-gray-700 hover:text-orange-500 transition">
                <FaShoppingCart className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}

export default function ProductList() {
  const [showAll, setShowAll] = useState(false);
  const visibleProducts = showAll ? products : products.slice(0, 8);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <FadeInSection direction="left">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
              Spot Pemancingan Lain yang Populer{" "}
            </h2>
          </FadeInSection>
          <FadeInSection direction="right">
            <Link
              href="/main/pondzone"
              className="inline-flex items-center gap-1 text-sm font-medium text-gray-800 hover:text-orange-600 transition-colors duration-300 group"
            >
              Telusuri lebih banyak
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </FadeInSection>
        </div>

        {/* ✅ Grid update */}
        <div className="grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 xl:gap-8">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProductListPondZone() {
  const [showAll, setShowAll] = useState(null);
  const visibleProducts = showAll ? products : products.slice(0, 8);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem("showAll");
    setShowAll(stored === "true" || stored === null ? false : stored);
  }, []);

  useEffect(() => {
    if (showAll !== null) {
      localStorage.setItem("showAll", showAll.toString());
    }
  }, [showAll]);

  if (showAll === null)
    return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="bg-white mt-10">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="mb-6">
          <FadeInSection direction="left">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
              Lokasi Rekomendasi{" "}
            </h2>
          </FadeInSection>
        </div>

        {/* ✅ Grid update */}
        <div className="grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 xl:gap-8">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {!showAll && (
          <div className="flex justify-center mt-10">
            <FadeInSection direction="in">
              <button
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
