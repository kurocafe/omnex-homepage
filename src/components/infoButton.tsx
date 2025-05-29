'use client';

import React, { useState } from "react";
import Image from "next/image";

type InfoButtonProps = {
  title: string;
  imageUrl: string;
  hoverImageUrl: string;
  alt?: string;
};

export default function InfoButton({ title, imageUrl, hoverImageUrl, alt }: InfoButtonProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      className="bg-cyan-30 border-4 border-white rounded-2xl p-4 w-72 flex flex-col items-center shadow-md"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="font-serif font-semibold text-lg mb-4 self-start">
        {title}
      </span>
      <div className="relative w-60 h-32">
        <Image
          src={imageUrl}
          alt={alt || title}
          fill
          className={`object-cover rounded-[70px] transition-all duration-300
            ${hovered ? "rotate-12" : "rotate-0"
            }`}
        />
        <Image
          src={hoverImageUrl}
          alt={alt || title}
          fill
          className={`object-cover rounded-[70px] transition-all duration-300
            ${hovered ? "-rotate-3" : "rotate-0"
            }`}
        />
      </div>
    </button>
  )
}