import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import {
  FaDownload,
  FaPlus,
  FaMinus,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import samplePDF from "../assets/research-paper.pdf";
import paper_99 from "../assets/research-papers/paper_99.pdf";
import paper_25 from "../assets/research-papers/paper_25.pdf";

// Fix for worker issue in react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const researchPapers = [paper_25, samplePDF, paper_99];

const ResearchSection = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [scale, setScale] = useState(1.0);
  const [currentPDF, setCurrentPDF] = useState(researchPapers[0]);

  const goToPrevPage = () =>
    setPageNumber((prev) => (prev > 1 ? prev - 1 : prev));
  const goToNextPage = () =>
    setPageNumber((prev) => (prev < numPages ? prev + 1 : prev));
  const zoomIn = () => {
    setScale((prevScale) => prevScale + 0.2);
  };

  const zoomOut = () => {
    setScale((prevScale) => (prevScale > 0.6 ? prevScale - 0.2 : prevScale));
  };
  const handlePDFChange = (pdf) => {
    setLoading(true);
    setError(false);
    setCurrentPDF(pdf);
    setPageNumber(1);
  };

  return (
    <section className="w-8/12 my-20 py-12 mx-auto rounded-4xl bg-purple-200 text-gray-900">
      <div className="  text-center">
        <h2 className="text-3xl font-bold text-purple-700">
          Research & Development
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Explore our latest research work in AI & IoT for healthcare solutions.
        </p>

        {/* PDF Selection */}
        <div className="mt-4 flex justify-center gap-4">
          {researchPapers.map((pdf, index) => (
            <button
              key={index}
              onClick={() => handlePDFChange(pdf)}
              className={`px-4 py-2 text-sm rounded shadow-md ${
                pdf === currentPDF
                  ? "bg-purple-700 text-white"
                  : "bg-gray-300 text-gray-900"
              } hover:bg-purple-600`}
            >
              Paper {index + 1}
            </button>
          ))}
        </div>

        {/* PDF Viewer */}
        <div className="mt-8 flex flex-col items-center">
          <div className="border shadow-md rounded-lg overflow-hidden w-full max-w-3xl bg-white p-4">
            {loading && <p className="text-gray-500">Loading PDF...</p>}
            {error && <p className="text-red-500">Failed to load PDF.</p>}
            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-4 w-full max-w-3xl">
              {/* Controls */}
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
              <div className="justify-between">
                <button
                  onClick={zoomOut}
                  className="mx-2 px-3 py-2 bg-gray-700 text-white rounded shadow hover:bg-gray-600 disabled:opacity-50"
                  disabled={scale <= 0.6}
                >
                  <FaMinus />
                </button>

                <button
                  onClick={zoomIn}
                  className="mx-2 px-3 py-2 bg-gray-700 text-white rounded shadow hover:bg-gray-600"
                >
                  <FaPlus />
                </button>
              </div>
              <button
                onClick={goToNextPage}
                disabled={pageNumber === numPages}
                className="flex items-center px-4 py-2 bg-gray-300 text-gray-700 rounded-lg shadow-md hover:bg-gray-400 disabled:opacity-50"
              >
                Next <FaArrowRight className="ml-2" />
              </button>
            </div>
            <Document
              file={currentPDF}
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
                scale={scale}
              />
            </Document>
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
