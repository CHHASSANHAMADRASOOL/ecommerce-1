"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-black border-b border-blue-500 px-10 py-4 flex justify-between items-center">

      {/* Logo */}
      <h1 className="text-2xl font-bold text-blue-500">
        
      </h1>

      {/* Menu */}
      <div className="flex gap-8 text-lg font-semibold">
        <Link href="/" className="text-red-500 hover:text-red-300 transition">
          Home
        </Link>

        <Link href="/about" className="text-red-500 hover:text-red-300 transition">
          About
        </Link>

        <Link href="/contact" className="text-red-500 hover:text-red-300 transition">
          Contact
        </Link>

        <Link href="/shop" className="text-red-500 hover:text-red-300 transition">
          Shop
        </Link>
      </div>

    </nav>
  );
}