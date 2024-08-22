import React, { useEffect } from 'react';
import pdfjs from 'pdfjs-dist/build/pdf';

const PDFViewer = ({ pdfUrl }) => {
  useEffect(() => {
    const loadPdf = async () => {
      const loadingTask = pdfjs.getDocument(pdfUrl);
      const pdf = await loadingTask.promise;
      const pageNum = 1; // Nomor halaman yang ingin ditampilkan

      pdf.getPage(pageNum).then((page) => {
        const scale = 1.5;
        const viewport = page.getViewport({ scale });

        // Buat elemen canvas untuk menampilkan halaman PDF
        const canvas = document.getElementById('pdfCanvas');
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        // Render halaman PDF ke canvas
        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };
        page.render(renderContext);
      });
    };

    loadPdf();
  }, [pdfUrl]);

  return (
    <div>
      <canvas id="pdfCanvas"></canvas>
    </div>
  );
};

export default PDFViewer;
