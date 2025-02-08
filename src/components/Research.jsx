import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { FaDownload, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import samplePDF from "../assets/research-paper.pdf";

// Fix for worker issue in react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const ResearchSection = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const goToPrevPage = () =>
    setPageNumber((prev) => (prev > 1 ? prev - 1 : prev));
  const goToNextPage = () =>
    setPageNumber((prev) => (prev < numPages ? prev + 1 : prev));

  return (
    <section className="py-16 bg-gray-100 text-gray-900">
      <div className="w-10/12 mx-auto text-center">
        <h2 className="text-3xl font-bold text-purple-700">
          Research & Development
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Explore our latest research work in AI & IoT for healthcare solutions.
        </p>

        {/* PDF Viewer */}
        <div className="mt-8 flex flex-col items-center">
          <div className="border shadow-md rounded-lg overflow-hidden w-full max-w-2xl bg-white p-4">
            {loading && <p className="text-gray-500">Loading PDF...</p>}
            {error && <p className="text-red-500">Failed to load PDF.</p>}
            <Document
              file={samplePDF}
              className="w-full"
              onLoadSuccess={({ numPages }) => {
                setNumPages(numPages);
                setLoading(false);
              }}
              onLoadError={() => {
                setError(true);
                setLoading(false);
              }}
            >
              <Page
                pageNumber={pageNumber}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </Document>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-4 w-full max-w-2xl">
            <button
              onClick={goToPrevPage}
              disabled={pageNumber === 1}
              className="flex items-center px-4 py-2 bg-gray-300 text-gray-700 rounded-lg shadow-md hover:bg-gray-400 disabled:opacity-50"
            >
              <FaArrowLeft className="mr-2" /> Previous
            </button>
            <p className="text-gray-700">
              Page {pageNumber} of {numPages || "?"}
            </p>
            <button
              onClick={goToNextPage}
              disabled={pageNumber === numPages}
              className="flex items-center px-4 py-2 bg-gray-300 text-gray-700 rounded-lg shadow-md hover:bg-gray-400 disabled:opacity-50"
            >
              Next <FaArrowRight className="ml-2" />
            </button>
          </div>

          {/* Download Link */}
          <a
            href={samplePDF}
            download="SmrutiPankha_Research.pdf"
            className="mt-4 flex items-center bg-purple-700 text-white px-4 py-2 rounded-lg shadow-md hover:bg-purple-600"
          >
            <FaDownload className="mr-2" /> Download Paper
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
