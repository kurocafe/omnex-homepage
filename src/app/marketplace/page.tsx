import Link from "next/link";
import BackButtonWrapper from "@/components/BackButtonWrapper";

export default function Marketplace() {
  return (
    <div className="relative w-full min-h-screen">
      <div
        className="pointer-events-none fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url(/IMG_0647.png)" }}
      />
      <div className="absolute inset-0 bg-black/25" />

      <div className="relative z-10 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] text-white">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start font-serif w-full max-w-5xl">
          <h1 className="text-4xl font-bold">Our Marketplace</h1>
          <p className="text-lg mb-8">Explore our marketplace options below.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
            {/* Card 1 */}
            <Link
              href="/marketplace/customers"
              className="group bg-white text-black rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: "url(/IMG_0648.jpg)" }}
              />
              <div className="p-6 flex flex-col justify-between flex-1">
                {/* 上の部分 */}
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl font-semibold group-hover:text-indigo-600 transition-colors">
                    We&apos;re Looking For Customers
                  </h2>
                  <p className="text-sm text-gray-700">
                    Browse our collection of products available for purchase.
                  </p>
                </div>
                {/* 下のボタン */}
                <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors duration-300">
                  View Items
                </button>
              </div>
            </Link>

            {/* Card 2 */}
            <Link
              href="/marketplace/products"
              className="group bg-white text-black rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: "url(/IMG_0649.jpg)" }}
              />
              <div className="p-6 flex flex-col justify-between flex-1">
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl font-semibold group-hover:text-emerald-600 transition-colors">
                    We&apos;re Looking For Products
                  </h2>
                  <p className="text-sm text-gray-700">
                    Explore items we&apos;re currently looking to purchase.
                  </p>
                </div>
                <button className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition-colors duration-300">
                  View Items
                </button>
              </div>
            </Link>
          </div>
        </main>
        <BackButtonWrapper />
      </div>
    </div>
  );
}
