// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { Menu, X, Home, Ticket, Info, LogOut } from "lucide-react";
// import classNames from "classnames";

// // Menu data
// const MENUS = [
//   { label: "Beranda", icon: Home, href: "/dashboard" },
//   { label: "Tiket", icon: Ticket, href: "/dashboard/tiket" },
//   { label: "Fasilitas", icon: Info, href: "/dashboard/fasilitas" },
// ];

// export default function SidebarDrawer() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       {/* HEADER */}
//       <header className="fixed top-0 inset-x-0 z-40 flex items-center justify-between bg-slate-900 px-4 py-4 shadow-md">
//         <button
//           onClick={() => setIsOpen(true)}
//           className="rounded-md bg-white/5 p-2 text-orange-400 hover:bg-orange-500 hover:text-white"
//         >
//           <Menu className="h-6 w-6" />
//         </button>
//         <span className="text-lg font-semibold text-white">PondZone</span>
//       </header>

//       {/* SPACER untuk konten di bawah header */}
//       <div className="h-16" />

//       {/* DRAWER OVERLAY */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
//           onClick={() => setIsOpen(false)}
//         />
//       )}

//       {/* DRAWER PANEL */}
//       <aside
//         className={classNames(
//           "fixed top-0 left-0 z-50 h-full w-64 bg-slate-900 shadow-xl transform transition-transform duration-300",
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         )}
//       >
//         {/* CLOSE BUTTON */}
//         <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
//           <span className="text-white font-semibold">Menu</span>
//           <button
//             onClick={() => setIsOpen(false)}
//             className="text-slate-300 hover:text-white"
//           >
//             <X className="h-5 w-5" />
//           </button>
//         </div>

//         {/* MENU */}
//         <nav className="flex flex-col gap-1 p-4">
//           {MENUS.map(({ href, label, icon: Icon }) => (
//             <Link
//               key={href}
//               href={href}
//               className="flex items-center gap-3 rounded-lg px-4 py-2 text-slate-200 hover:bg-white/10 hover:text-white"
//               onClick={() => setIsOpen(false)} // auto close on click
//             >
//               <Icon className="h-5 w-5" />
//               <span>{label}</span>
//             </Link>
//           ))}

//           <button
//             onClick={() => {
//               console.log("TODO: Logout");
//               setIsOpen(false);
//             }}
//             className="mt-6 flex items-center gap-3 rounded-lg px-4 py-2 text-slate-300 hover:bg-white/10 hover:text-white"
//           >
//             <LogOut className="h-5 w-5" />
//             <span>Keluar</span>
//           </button>
//         </nav>
//       </aside>
//     </>
//   );
// }
