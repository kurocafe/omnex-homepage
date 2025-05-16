'use client';

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import Logo from "@/components/logo";

export default function Home() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
      <div className="mb-40">
        <Logo />
      </div>

      <div className="relative flex flex-col items-center">
        <div
          className={`absolute flex gap-2 transition-all duration-600 ease-out -space-x-10
            ${hovered ? "-translate-y-12 opacity-100 scale-100" : "translate-y-0 opacity-0 scale-70"
            }`}
        >
          <div className="relative w-24 h-16 top-4 rounded-2xl overflow-hidden shadow-lg rotate-3 z-10 scale-80">
            <Image
              src={"/IMG_0642.png"}
              alt="img1"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="relative w-24 h-16 rounded-2xl overflow-hidden shadow-lg rotate-6 ">
            <Image
              src={"/IMG_0644.png"}
              alt="img2"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="relative w-24 h-16 top-4 rounded-2xl overflow-hidden shadow-lg rotate-24 scale-90">
            <Image
              src={"/IMG_0643.png"}
              alt="img3"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>


        <Link href={"/home"}>
          <button
            className="px-10 py-4 bg-white text-gray-500 text-2xl font-medium rounded-lg shadow-md hover:shadow-lg hover:cursor-pointer hover:text-black transition duration-600 relative z-10"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            connect
          </button>
        </Link>
      </div>
    </div >
  );
}
