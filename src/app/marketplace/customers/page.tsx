import BackButtonWrapper from "@/components/BackButtonWrapper";
import CatalogViewer from "@/components/CatalogViewer";

export default function CustomersPage() {
  return (
    <div className="relative w-full min-h-screen">
      {/* <div
        className="pointer-events-none fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url(/IMG_0648.jpg)" }}
      /> */}
      <div className="absolute inset-0 bg-black/25" />

      <div className="relative z-10 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] text-white">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start font-serif">
          {/* <h1 className="text-4xl font-bold">Browse Our Catalog</h1> */}
          {/* <p className="text-lg">This is Browse Our Catalog page of our application.</p> */}
          <CatalogViewer />
        </main>
        <BackButtonWrapper />
      </div>
    </div>
  );
}
