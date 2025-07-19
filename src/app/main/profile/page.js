"use client";
import Image from "next/image";
import { useState } from "react";

export default function UserProfile() {
  const [user, setUser] = useState({
    name: "Budi Santoso",
    email: "budi@example.com",
    phone: "+62 812 3456 7890",
    membership: "Premium",
    photo: "/images/user-avatar.png",
    orders: [
      { id: 1, date: "2025-07-10", spot: "PondZone A", status: "Selesai" },
      { id: 2, date: "2025-06-28", spot: "PondZone B", status: "Batal" },
    ],
  });

  const [imageSrc, setImageSrc] = useState(
    user.photo || "/images/background.jpg"
  );
  return (
    <section className="w-full min-h-screen pt-38 pb-16 bg-white px-4">
      <div className="max-w-4xl mx-auto py-10 px-6 bg-white rounded-xl shadow-lg">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="relative">
            <Image
              src={imageSrc}
              alt="Foto Profil Pengguna"
              width={150}
              height={150}
              className="rounded-full border-4 border-blue-500 object-cover w-[120px] h-[120px] sm:w-[150px] sm:h-[150px]"
              onError={() => setImageSrc("/images/background.jpg")}
            />

            <button
              onClick={() => alert("Fitur ganti foto belum aktif")}
              className="absolute bottom-0 right-0 bg-blue-600 text-white text-xs px-2 py-1 rounded-full"
            >
              Ganti
            </button>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600">📞 {user.phone}</p>
            <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-800 rounded-full w-fit text-sm">
              Member: {user.membership}
            </span>
            <div className="mt-4 flex gap-3 flex-wrap">
              <button className="px-4 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Edit Profil
              </button>
              <button className="px-4 py-2 text-sm bg-gray-300 text-black rounded-md hover:bg-gray-400">
                Ganti Password
              </button>
              <button className="px-4 py-2 text-sm bg-red-500 text-white rounded-md hover:bg-red-600">
                Logout
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Riwayat Pemesanan
          </h2>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full text-left">
              <thead className="bg-gray-100 text-gray-600">
                <tr>
                  <th className="px-4 py-2">Tanggal</th>
                  <th className="px-4 py-2">Spot</th>
                  <th className="px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {user.orders.map((order) => (
                  <tr key={order.id} className="border-b ">
                    <td className="px-4 py-2 text-gray-600">{order.date}</td>
                    <td className="px-4 py-2 text-gray-600">{order.spot}</td>
                    <td className="px-4 py-2 text-gray-600">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          order.status === "Selesai"
                            ? "bg-green-200 text-green-800"
                            : "bg-red-200 text-red-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
