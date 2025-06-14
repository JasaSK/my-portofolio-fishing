import Image from "next/image";
export default function page() {
  return (
    <div className="w-screen h-screen items-center flex ">
      <div className="justify-items-center justify-items-center w-full">
        <div className="flex items-center space-x-2 text-base">
          <h4 className="font-semibold text-slate-900">Contributors</h4>
          <span className="bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700 ">
            204
          </span>
        </div>
        <div className="mt-3 flex -space-x-2 overflow-hidden">
          <Image
            className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="/images/Screenshot 2025-03-08 011652.png"
            alt=""
            width={500}
            height={600}
          />
          <Image
            className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="/images/Screenshot 2025-03-08 011652.png"
            alt=""
            width={500}
            height={600}
          />
          <Image
            className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="/images/Screenshot 2025-03-08 011652.png"
            alt=""
            width={500}
            height={600}
          />
          <Image
            className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="/images/Screenshot 2025-03-08 011652.png"
            alt=""
            width={500}
            height={600}
          />
          <Image
            className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="/images/Screenshot 2025-03-08 011652.png"
            alt=""
            width={500}
            height={600}
          />
        </div>
        <div className="mt-3 text-sm font-medium">
          <a href="#" className="text-blue-500">
            + 198 others
          </a>
        </div>
      </div>
    </div>
  );
}
