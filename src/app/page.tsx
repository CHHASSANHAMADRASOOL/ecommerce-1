"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/black-friday-sales-sign-neon-light.jpg"
          alt="Background"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 rgb-text text-center">
        toyota SHOW ROOM
      </h1>
<Image
              src="/show room.jpg"
              alt="Showroom"
              width={400}
              height={400}
              
            />
      <p className="text-lg text-gray-300 mb-10">
        
      </p>

      <div className="flex gap-6">
        <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg font-semibold">
          Shop Now
        </button>

        <button className="px-8 py-3 border border-blue-500 hover:bg-blue-500/20 rounded-xl text-lg">
          Learn More
        </button>
      </div>

      <style jsx>{`
        .rgb-text {
          background: linear-gradient(
            90deg,
            #00f,
            #00ffff,
            #0066ff,
            #00f
          );
          background-size: 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: rgbMove 4s linear infinite;
        }

        @keyframes rgbMove {
          0% {
            background-position: 0%;
          }
          100% {
            background-position: 300%;
          }
        }
      `}</style>
    </div>
  );
}