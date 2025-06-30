"use client";
import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export default function ProductDetail() {
  const [mainImage, setMainImage] = useState("/images/background.jpg");

  const thumbnails = [
    "/images/background.jpg",
    "/images/background.jpg",
    "/images/background.jpg",
    "/images/background.jpg",
  ];

  return (
    <div className="mt-18 bg-none">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8">
            <Image
              src={mainImage}
              alt="Product"
              width={800}
              height={800}
              className="w-full h-auto rounded-lg shadow-md mb-4"
            />
            <div className="flex gap-4 py-4 justify-center overflow-x-auto">
              {thumbnails.map((thumb, index) => (
                <Image
                  key={index}
                  src={thumb}
                  alt={`Thumbnail ${index + 1}`}
                  width={80}
                  height={80}
                  className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                  onClick={() => setMainImage(thumb)}
                />
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-2 text-gray-500">
              Premium Wireless Headphones
            </h2>
            <p className="text-gray-600 mb-4">SKU: WH1000XM4</p>
            <div className="mb-4">
              <span className="text-gray-500 text-2xl font-bold mr-2">
                $349.99
              </span>
              <span className="text-gray-500 line-through">$399.99</span>
            </div>

            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  className="text-yellow-500 w-5 h-5"
                />
              ))}
              <span className="ml-2 text-gray-600">4.5 (120 reviews)</span>
            </div>

            <p className="text-gray-700 mb-6">
              Experience premium sound quality and industry-leading noise
              cancellation with these wireless headphones.
            </p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-500">
                Color:
              </h3>
              <div className="flex space-x-2">
                <button className="w-8 h-8 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black" />
                <button className="w-8 h-8 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300" />
                <button className="w-8 h-8 bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                defaultValue={1}
                className=" text-gray-700 w-12 text-center rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            <div className="flex space-x-4 mb-6">
              <button className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Add to Cart
              </button>
              <button className="bg-gray-200 flex gap-2 items-center text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                Wishlist
              </button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-500">
                Key Features:
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Industry-leading noise cancellation</li>
                <li>30-hour battery life</li>
                <li>Touch sensor controls</li>
                <li>Speak-to-chat technology</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
