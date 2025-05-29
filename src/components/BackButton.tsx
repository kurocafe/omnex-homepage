import { useRouter } from "next/navigation"

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="relative w-10 h-10 flex items-center justify-center group hover:opacity-80 transition"
    >
      <span className="absolute w-10 h-1 shadow-black bg-white rounded-lg transition-transform duration-200 group-hover:rotate-45" />
      <span className="absolute w-10 h-1 shadow-black bg-white rounded-lg transition-transform duration-200 group-hover:-rotate-45" />
    </button>
  )
}