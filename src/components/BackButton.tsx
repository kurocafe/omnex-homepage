'use client';

import { useRouter } from "next/navigation"

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="relative w-10 h-10 flex items-center justify-center group cursor-pointer hover:opacity-80 transition"
    >
      <span className="absolute w-10 h-1 bg-white rounded-lg transition-transform duration-200 group-hover:rotate-45 drop-shadow-md" />
      <span className="absolute w-10 h-1 bg-white rounded-lg transition-transform duration-200 group-hover:-rotate-45 drop-shadow-md" />
    </button>
  )
}