import Image from "next/image";

// Komponen background dengan gambar
export function BackgroundImage() {
  return (
    <div className="absolute inset-0 -z-10 w-full h-full">
      <Image
        src="/images/background.jpg"
        alt="Background"
        fill
        priority
        quality={80}
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.6) 100%)",
        }}
      />
    </div>
  );
}

// Komponen background dengan gradasi (tanpa gambar)
export function BackgroundGradient({ className = "inset-0" }) {
  return (
    <div
      className={`absolute ${className} -z-10 w-full h-full bg-gradient-to-b from-[#0d1b2a] via-[#1b263b] to-[#0d1b2a]`}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, transparent 40%, rgba(0, 0, 0, 0.6) 70%, rgba(0, 0, 0, 0.85) 100%)",
        }}
      />
    </div>
  );
}
