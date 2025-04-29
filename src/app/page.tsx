'use client';

import Footer from "@/components/footer";
import Image from "next/image";
import React, { useState } from "react";
import image1 from "../../public/IMG_0642.png";
import image2 from "../../public/IMG_0643.png";
import image3 from "../../public/IMG_0644.png";

export default function Home() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
      <div className="text-4xl font-bold mb-2">
        onmex
      </div>
      <div className="text-sm text-gray-600 mb-16">
        <p>Beyond Borders,</p>
        <p>Beyond Limits.</p>
      </div>

      <div className="relative flex flex-col items-center">
        <div
          className={`absolute flex gap-2 transition-all duration-600 ease-out
            ${hovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
        >
          <div className="relative w-24 h-16 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={image1}
              alt="img1"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="relative w-24 h-16 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={image2}
              alt="img2"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="relative w-24 h-16 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={image3}
              alt="img3"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        <button
          className="px-10 py-4 bg-white text-2xl font-medium rounded-lg shadow-md hover:shadow-lg transition relative z-10"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          connect
        </button>
      </div>
      <Footer />
    </div >
  );
}
