// components/background.tsx


export default function Background() {
  return (
    <div className="absolute inset-0 -z-10">
      <div
        className="w-full h-full bg-center bg-cover"
        style={{
          backgroundImage: "url('/images/background.jpg')",
        }}
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
      <div
        className="w-full h-full bg-center bg-cover"
        style={{
          backgroundImage: "url('/images/background1.jpg')",
        }}
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
