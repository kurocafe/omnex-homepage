// src/components/CatalogViewer.tsx
'use client';

import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

export default function CatalogViewer() {
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState<number>(0);
  const prevPageRef = useRef(pageNumber);

  useEffect(() => {
    // ページ番号が変わったときにスクロール位置を維持
    if (prevPageRef.current !== pageNumber) {
      window.scrollTo({ top: 0, behavior: "auto" }); // 必要ならtop: window.scrollYに
      prevPageRef.current = pageNumber;
    }
  }, [pageNumber]);

  const handlePrev = () => {
    if (pageNumber > 1) setPageNumber(pageNumber - 1);
  };

  const handleNext = () => {
    if (pageNumber < numPages) setPageNumber(pageNumber + 1);
  };

  return (
    <div className="flex flex-col items-center gap-2 mt-0">
      <Document
        file="/product_catalog_update.pdf"
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      >
        <Page
          pageNumber={pageNumber}
          width={430}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
      <div className="flex items-center gap-2 mt-2 ">
        <button
          onClick={handlePrev}
          disabled={pageNumber <= 1}
          className="px-4 py-2 text-black bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
        >
          ◀ Prev
        </button>
        <p className="text-2xl">
          Page {pageNumber} of {numPages}
        </p>
        <button
          onClick={handleNext}
          disabled={pageNumber >= numPages}
          className="px-4 py-2 text-black bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
        >
          Next ▶
        </button>
      </div>
    </div>
  );
}
