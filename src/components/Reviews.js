"use client";
import { reviews } from "../data/DataReviews";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Image from "next/image";

export default function Reviews() {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} className="text-yellow-400 w-4 h-4" />);
      } else if (rating >= i - 0.5) {
        stars.push(
          <FaStarHalfAlt key={i} className="text-yellow-400 w-4 h-4" />
        );
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-300 w-4 h-4" />);
      }
    }
    return stars;
  };

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">
        Ulasan Pengunjung
      </h3>

      {reviews.length === 0 ? (
        <p className="text-sm text-gray-500 italic">
          Belum ada ulasan untuk produk ini.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow hover:shadow-md transition-all duration-300 p-5 flex flex-col space-y-3"
            >
              {/* Header: Avatar, Name, Date */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-semibold text-sm">
                  {review.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {review.name}
                  </p>
                  <p className="text-xs text-gray-400">
                    {review.date || "Baru saja"}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1">
                {renderStars(review.rating)}
              </div>

              {/* Comment */}
              <p className="text-sm text-gray-700 line-clamp-4">
                “{review.comment}”
              </p>

              {/* Image if available */}
              {review.image && (
                <div className="mt-2">
                  <Image
                    src={review.image}
                    alt="Foto tempat"
                    width={300}
                    height={200}
                    className="rounded-md w-full h-40 object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
