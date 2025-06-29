import Image from "next/image";

export default function Background() {
  return (
    <div className="absolute inset-0 -z-10">
      <Image
        src="/images/background2.jpg"
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

export function Background1() {
  return (
    <div className="absolute inset-0 -z-10">
      <Image
        src="/images/background.jpg"
        alt="Background Image 1"
        fill
        priority
        className="object-cover"
      />
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
