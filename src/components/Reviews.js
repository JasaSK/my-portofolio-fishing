"use client";
import { useState, useEffect } from "react";
import { reviews } from "../data/DataReviews";
import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart } from "react-icons/fa";
import Image from "next/image";

export default function Reviews({ reviews }) {
  const [selectedRating, setSelectedRating] = useState(null);
  const [likes, setLikes] = useState({}); // { index: true/false }
  const [likeCounts, setLikeCounts] = useState({});
  useEffect(() => {
    const initialLikes = reviews.reduce((acc, _, idx) => {
      acc[idx] = 0; // semua like awalnya 0
      return acc;
    }, {});
    setLikeCounts(initialLikes);
  }, [reviews]);

  const filteredReviews = selectedRating
    ? reviews.filter((r) => Math.floor(r.rating) === selectedRating)
    : reviews;

  const ratingSummary = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: reviews.filter((r) => Math.floor(r.rating) === star).length,
  }));

  const totalReviews = reviews.length;
  const averageRating =
    totalReviews > 0
      ? (reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews).toFixed(
          1
        )
      : 0;

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

  const toggleLike = (index) => {
    const alreadyLiked = likes[index];

    setLikes((prev) => ({
      ...prev,
      [index]: !alreadyLiked,
    }));

    setLikeCounts((prevCounts) => ({
      ...prevCounts,
      [index]: alreadyLiked
        ? Math.max(0, prevCounts[index] - 1)
        : prevCounts[index] + 1,
    }));
  };

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">
        Ulasan Pengunjung
      </h3>

      {/* Summary & Filter */}
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="flex flex-col items-center justify-center md:w-1/3 text-center">
          <p className="text-4xl font-bold text-yellow-500">{averageRating}</p>
          <div className="flex mt-1">{renderStars(averageRating)}</div>
          <p className="text-sm text-gray-500 mt-1">{totalReviews} Ulasan</p>
        </div>

        <div className="flex-1 flex flex-wrap gap-2 items-center justify-start md:justify-center">
          {ratingSummary.map(({ star, count }) => (
            <button
              key={star}
              onClick={() =>
                setSelectedRating((prev) => (prev === star ? null : star))
              }
              className={`px-3 py-1 text-sm border rounded-full flex items-center gap-1 transition-all ${
                selectedRating === star
                  ? "bg-yellow-400 text-white border-yellow-400"
                  : "border-gray-300 text-gray-600 hover:bg-gray-100"
              }`}
            >
              {star}
              <FaStar className="text-yellow-400" />
              <span className="text-xs text-gray-500">({count})</span>
            </button>
          ))}
          {selectedRating !== null && (
            <button
              onClick={() => setSelectedRating(null)}
              className="px-3 py-1 text-sm text-red-600 border border-red-300 rounded-full hover:bg-red-50"
            >
              Reset Filter
            </button>
          )}
        </div>
      </div>

      {/* Reviews List */}
      {filteredReviews.length === 0 ? (
        <p className="text-sm text-gray-500 italic">
          Tidak ada ulasan dengan rating {selectedRating} bintang.
        </p>
      ) : (
        <div className="flex flex-col divide-y divide-gray-200">
          {filteredReviews.map((review, index) => (
            <div
              key={index}
              className="w-full py-6 flex flex-col sm:flex-row sm:items-start gap-4"
            >
              {/* Avatar */}
              <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-semibold text-sm">
                {review.name.charAt(0).toUpperCase()}
              </div>

              {/* Review Content */}
              <div className="flex-1 space-y-2">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {review.name}
                    </p>
                    <p className="text-xs text-gray-400">
                      {review.date || "Baru saja"} ·{" "}
                      {review.time || "13:00 WIB"}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <button
                      className={`transition ${
                        likes[index]
                          ? "text-red-500"
                          : "text-gray-400 hover:text-red-500"
                      }`}
                      onClick={() => toggleLike(index)}
                    >
                      <FaHeart className="w-4 h-4" />
                    </button>
                    <span className="text-gray-500">
                      {likeCounts[index] ?? 0}
                    </span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  {renderStars(review.rating)}
                </div>

                {/* Comment */}
                <p className="text-sm text-gray-700 leading-snug">
                  “{review.comment}”
                </p>

                {/* Image Preview */}
                {review.image && (
                  <div className="mt-2">
                    <Image
                      src={review.image}
                      alt="Foto tempat"
                      width={80}
                      height={80}
                      className="rounded-md object-cover border"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
