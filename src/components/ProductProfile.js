import { FaMapMarkerAlt, FaPhoneAlt, FaUserAlt, FaClock } from "react-icons/fa";

export default function ProductProfile({ product }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
      <h3 className="text-xl font-bold text-gray-800">Profil Tempat</h3>

      <div className="text-gray-600 text-sm space-y-2">
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-indigo-500" />
          <span>{product.address}</span>
        </div>

        {product.contact && (
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-indigo-500" />
            <span>{product.contact}</span>
          </div>
        )}

        {product.owner && (
          <div className="flex items-center gap-2">
            <FaUserAlt className="text-indigo-500" />
            <span>Pemilik: {product.owner}</span>
          </div>
        )}

        {product.openHours && (
          <div className="flex items-center gap-2">
            <FaClock className="text-indigo-500" />
            <span>Jam Buka: {product.openHours}</span>
          </div>
        )}
      </div>
    </div>
  );
}
