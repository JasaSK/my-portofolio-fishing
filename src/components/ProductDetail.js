import Image from "next/image";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { products } from "../data/DataProduct.js";
import { reviews } from "../data/DataReviews.js";
import { useState } from "react";
import Reviews from "./Reviews.js";

export default function ProductDetail({ id }) {
  const product = products.find((item) => item.id === Number(id));
  const [mainImage, setMainImage] = useState(product?.image || "");
  const [quantity, setQuantity] = useState(1);
  const thumbnails = [product.image, ...(product.images || [])];
  const stock = product.stock || 0;

  if (!product) {
    return <div className="text-center mt-20">Produk tidak ditemukan.</div>;
  }

  const productReviews = reviews.filter((r) => r.productId === product.id);
  const rating = product.rating || 0;
  const reviewCount = productReviews.length;
  const soldCount = product.sold || 0;

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} className="text-yellow-400 w-5 h-5" />);
      } else if (rating >= i - 0.5) {
        stars.push(
          <FaStarHalfAlt key={i} className="text-yellow-400 w-5 h-5" />
        );
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-300 w-5 h-5" />);
      }
    }
    return stars;
  };

  return (
    <div className="mt-20  text-gray-800 min-h-screen">
      <div className="bg-white container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          {/* LEFT: IMAGES */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            {/* Frame Image */}
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] bg-gray-100 rounded-xl shadow-md overflow-hidden">
              <Image
                key={mainImage}
                src={mainImage}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            {/* Thumbnail List */}
            <div className="mt-4 flex gap-3 overflow-x-auto py-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
              {thumbnails.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setMainImage(img)}
                  className={`relative border-2 rounded-lg overflow-hidden group w-20 h-20 flex-shrink-0 transition-all duration-200 ${
                    mainImage === img
                      ? "border-indigo-500"
                      : "border-gray-200 hover:border-indigo-300"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: INFO */}
          <div className="w-full md:w-1/2 px-4 space-y-4">
            <h2 className="text-3xl font-bold">{product.name}</h2>
            <p className="text-sm text-gray-500">{product.address}</p>

            {/* Statistik */}
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center">{renderStars()}</div>
              <span>({rating})</span>
              <span className="border-l pl-3 border-gray-300">
                {reviewCount} Ulasan
              </span>
              <span className="border-l pl-3 border-gray-300">
                {soldCount} Terjual
              </span>
            </div>

            <p className="text-2xl font-bold text-orange-600">
              {product.price}
            </p>

            <span
              className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                product.status === "available"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {product.status}
            </span>

            <p className="text-sm mt-4">{product.description}</p>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Jumlah Ticket:
              </label>

              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-8 h-8 rounded-md bg-gray-200 hover:bg-gray-300 text-lg font-bold flex items-center justify-center"
                  >
                    -
                  </button>
                  <div className="w-16 text-center border border-gray-200 rounded-md px-2 py-1 bg-white text-gray-800 text-base">
                    {quantity}
                  </div>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.min(stock, q + 1))}
                    disabled={quantity >= stock}
                    className={`w-8 h-8 rounded-md ${
                      quantity >= stock
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-gray-200 hover:bg-gray-300"
                    } text-lg font-bold flex items-center justify-center`}
                  >
                    +
                  </button>
                </div>

                <p className="text-sm text-gray-600">
                  Tersisa{" "}
                  <span className="font-semibold">{stock - quantity}</span>{" "}
                  tiket hari ini
                </p>
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md transition">
                Pesan Sekarang
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-2 rounded-md transition">
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10  text-gray-800 min-h-screen">
        <div className="bg-white container mx-auto px-4 py-8">
          {/* Komponen Reviews */}
          <Reviews reviews={productReviews} />
        </div>
      </div>
    </div>
  );
}
