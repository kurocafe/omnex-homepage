'use client';

import dynamic from 'next/dynamic';
import React from 'react';

// PDFビューワー部分のみ動的 import（サーバーから読み込まない）
const PDFViewer = dynamic(() => import('./PDFInner'), { ssr: false });

export default function CatalogViewer() {
  return (
    <div>
      <PDFViewer />
    </div>
  );
}
