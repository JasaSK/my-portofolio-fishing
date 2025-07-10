import "../globals.css";          // pastikan global CSS/Tailwind di‑import
import Sidebar from "../../components/Sidebar.js";

export const metadata = {
  title: "Dashboard – PondZone",
};

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <Sidebar />
      {/* beri margin kiri utk menghindari overlap sidebar */}
      <main className="flex-1 ml-64 overflow-y-auto p-6">{children}</main>
    </div>
  );
}
