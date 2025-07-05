"use client";
import Link from "next/link";
import Image from "next/image";

export default function MiniCartDropdown({ cartItems = [] }) {
  return (
    <div className="absolute right-0 mt-3 w-80 bg-white border border-gray-200 rounded-lg shadow-xl z-50 p-5">
      <h3 className="font-semibold text-gray-800 mb-3 text-base">
        🛒 Keranjang
      </h3>

      {cartItems.length === 0 ? (
        <p className="text-sm text-gray-500">Keranjang masih kosong.</p>
      ) : (
        <ul className="space-y-4 max-h-64 overflow-y-auto pr-1">
          {cartItems.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-4 border-b border-gray-100 pb-3 last:border-b-0"
            >
              <div className="relative w-14 h-14 flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="rounded-md object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800 line-clamp-1">
                  {item.name}
                </p>
                <p className="text-sm text-gray-500">
                  {item.quantity} x Rp{item.price.toLocaleString("id-ID")}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}

      <Link
        href="/main/cart"
        className="block mt-5 text-center bg-orange-500 text-white py-2 rounded-md text-sm font-semibold hover:bg-orange-600 transition"
      >
        Lihat Keranjang
      </Link>
    </div>
  );
}
