import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Auth - My App",
  description: "Halaman Login dan Register",
};

export default function AuthLayout({ children }) {
  return (
    <main className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <main className="min-h-screen flex items-center justify-center bg-zinc-900 antialiased">
        {children}
      </main>
    </main>
  );
}
