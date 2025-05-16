import React from "react";
import Image from "next/image";

type InfoButtonProps = {
  title: string;
  pageUrl?: string;
  imageUrl: string;
  alt?: string;
};

export default function InfoButton({ title, imageUrl, alt }: InfoButtonProps) {
  return (
    <button className="bg-cyan-30 bg-opacity-60 border-4 border-white rounded-2xl p-4 w-72 flex flex-col items-center shadow-md">
      <span className="font-serif font-semibold text-lg mb-2 self-start">
        {title}
      </span>
      <Image
        src={imageUrl}
        alt={alt || title}
        width={480}
        height={256}
        className="relative w-60 h-32 object-cover rounded-[70px]"
      />
    </button>
  )
}