import "../globals.css";
import Sidebar from "../../components/Sidebar";
import SidebarDrawer from "../../components/SidebarDrawer"; // ⬅️ pastikan diimpor
import { BackgroundImage } from "../../components/Background";

export const metadata = {
  title: "Dashboard – PondZone",
};

export default function DashboardLayout({ children }) {
  return (
    <div className="relative min-h-screen text-white">
      {/* Sidebar hanya untuk desktop */}
      <div className="hidden lg:flex">
        <Sidebar />
      </div>

      {/* Sidebar drawer hanya untuk mobile */}
      <div className="lg:hidden">
        <SidebarDrawer />
      </div>

      {/* Main content area */}
      <main className="relative flex-1 lg:ml-60 overflow-y-auto p-6">
        <BackgroundImage />
        {children}
      </main>
    </div>
  );
}