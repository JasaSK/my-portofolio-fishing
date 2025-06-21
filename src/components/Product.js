// "use client";
// import Image from "next/image";
// import FadeInSection from "./FadeInSection.js";

// const products = [
//   {
//     id: 1,
//     name: "Basic Tee",
//     color: "Black",
//     price: "$35",
//     image: "/images/background.jpg",
//   },
//   {
//     id: 2,
//     name: "Basic Tee",
//     color: "Black",
//     price: "$35",
//     image: "/images/background.jpg",
//   },
//   {
//     id: 3,
//     name: "Basic Tee",
//     color: "Black",
//     price: "$35",
//     image: "/images/background.jpg",
//   },
//   {
//     id: 4,
//     name: "Basic Tee",
//     color: "Black",
//     price: "$35",
//     image: "/images/background.jpg",
//   },
//   {
//     id: 5,
//     name: "Basic Tee",
//     color: "Black",
//     price: "$35",
//     image: "/images/background.jpg",
//   },
//   {
//     id: 6,
//     name: "Basic Tee",
//     color: "Black",
//     price: "$35",
//     image: "/images/background.jpg",
//   },
//   {
//     id: 7,
//     name: "Basic Tee",
//     color: "Black",
//     price: "$35",
//     image: "/images/background.jpg",
//   },
//   {
//     id: 8,
//     name: "Basic Tee",
//     color: "Black",
//     price: "$35",
//     image: "/images/background.jpg",
//   },
// ];

// export default function Product() {
//   return (
//     <div className="bg-white">
//       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//         <div className="flex justify-between items-center">
//           <FadeInSection direction="left">
//             <h2 className="text-2xl font-bold tracking-tight text-gray-900">
//               Customers also purchased
//             </h2>
//           </FadeInSection>
//           <FadeInSection direction="right">
//             <a
//               href="/produk"
//               className="text-sm font-medium font-sans tracking-tight text-gray-900 cursor-pointer hover:text-orange-600 transition"
//             >
//               Telusuri lebih lanjut →
//             </a>
//           </FadeInSection>
//         </div>

//         <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 animate-fadeInUp">
//           {products.map((product) => (
//             <FadeInSection key={product.id}>
//               <div className="group relative">
//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   width={500}
//                   height={500}
//                   className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:h-80"
//                 />
//                 <div className="mt-4 flex justify-between">
//                   <div>
//                     <h3 className="text-sm text-gray-700">
//                       <a href="#" className="relative z-10">
//                         {product.name}
//                       </a>
//                     </h3>
//                     <p className="mt-1 text-sm text-gray-500">
//                       {product.color}
//                     </p>
//                   </div>
//                   <p className="text-sm font-medium text-gray-900">
//                     {product.price}
//                   </p>
//                 </div>
//               </div>
//             </FadeInSection>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export function Product1() {
//   return (
//     <div className="bg-white">
//       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//         <div className="flex justify-between items-center mb-6">
//           <FadeInSection direction="left">
//             <h2 className="text-2xl font-bold tracking-tight text-gray-900">
//               Customers also purchased
//             </h2>
//           </FadeInSection>
//         </div>

//         <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
//           {products.map((product) => (
//             <FadeInSection key={product.id}>
//               <a key={product.id} href="#" className="group">
//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
//                   width={500}
//                   height={500}
//                 />
//                 <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
//                 <p className="mt-1 text-lg font-medium text-gray-900">
//                   {product.price}
//                 </p>
//               </a>
//             </FadeInSection>
//           ))}
//         </div>

//         <div className="flex justify-center mt-10">
//           <FadeInSection direction="in">
//             <button
//               type="button"
//               className="w-lg cursor-pointer flex items-center justify-center text-gray-900 bg-white border border-gray-300 transition duration-500 ease-out hover:border-orange-500 hover:text-orange-500 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2"
//             >
//               Telusuri lebih lanjut
//             </button>
//           </FadeInSection>
//         </div>
//       </div>
//     </div>
//   );
// }
