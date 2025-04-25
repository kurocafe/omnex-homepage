import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
      <div className="text-4xl font-bold mb-2">
        onmex
      </div>
      <div className="text-sm text-gray-600 mb-16">
        <p>Beyond Borders,</p>
        <p>Beyond Limits.</p>
      </div>
      <button className="px-10 py-4 bg-white text-2xl font-medium rounded-lg shadow-md hover:shadow-lg transition duration-300">
        connect
      </button>
      <Footer />
    </div>
  );
}
