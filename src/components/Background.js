import Image from "next/image";

export default function Background() {
  return (
    <div className="absolute inset-0 -z-10">
      <Image
        src="/images/background.jpg"
        alt="Background Image"
        fill
        priority
        className="object-cover"
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
// Background.js
export function Background1({ className = "inset-0" }) {
  return (
    <div
      className={`absolute ${className} -z-10 bg-gradient-to-b from-[#0d1b2a] via-[#1b263b] to-[#0d1b2a]`}
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

