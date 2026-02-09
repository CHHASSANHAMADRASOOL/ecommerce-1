"use client";
import image from "next/image";
import Image from "next/image";

const products = [
  { name: "TOYOTA COROLLA x alis automatic 2022", price: "PKR 5,479,000", image: "/cars.jpg" },
  { name: "HONDA CIVI  automatic 2019-2022", price: "PKR 3,950,000", image: "/car.jpg" },
  { name: "TOYOTA  REVO  DOUBLE CAP 4X4 AUTOMATIC", price: "~PKR 12,964,000", image: "/revo.jpg" },
  { name: "LAND CRUISER 2024 MODAL WHITE SHAPE", price: "PKR 76,345", image: "/LAND CRUISER.jpg" },
  { name: "CHANGAN NEW MODAL 2025", price: "PKR 17,00,000", image: "/CHANGAN.jpg" },
  { name: "fortuner 2023 MODAL WHITE SHAPE", price: "PKR ~$45,600", image: "/fortuner.jpg" },
 { name: "ELANTER2025 MODAL BLACK SHAPE", price: "PKR $34,000", image: "/elanter.jpg" },
{ name: "SONATA NEW MODAL 2025 IN BLACK SHAPE ", price: "PKR 11,545,000", image: "/sonata.jpg" },

];

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-black text-white px-10 py-16">

      {/* RGB Heading */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-center mb-16 rgb-text">
        
      </h1>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

        {products.map((item, index) => (
          <div
            key={index}
            className="bg-[#0b0b0b] rounded-xl p-5 border border-pink-600 hover:scale-105 transition duration-300 shadow-lg hover:shadow-pink-600"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={400}
              height={400}
              
            />

            <h2 className="mt-4 text-xl font-bold">{item.name}</h2>
            <p className="text-pink-500 text-lg">${item.price}</p>

            <button className="mt-4 w-full bg-pink-600 hover:bg-pink-700 py-2 rounded-lg">
              Buy Now
            </button>
          </div>
        ))}

      </div>

      {/* RGB Styles */}
      <style jsx>{`
        .rgb-text {
          background: linear-gradient(
            90deg,
            #ff00ff,
            #00ffff,
            #00ff00,
            #ffff00,
            #ff0000,
            #ff00ff
          );
          background-size: 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: rgbMove 6s linear infinite;
        }

        @keyframes rgbMove {
          0% { background-position: 0%; }
          100% { background-position: 300%; }
        }
      `}</style>

    </div>
  );
}