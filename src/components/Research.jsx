import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import {
  FaDownload,
  FaPlus,
  FaMinus,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import PaperOne from "../assets/research-papers/ResearchPaper1.pdf";
import PaperTwo from "../assets/research-papers/ResearchPaper2.pdf";
import RefPaper1 from "../assets/research-papers/ReferancePaper1.pdf";
import RefPaper2 from "../assets/research-papers/ReferancePaper2.pdf";
import RefPaper3 from "../assets/research-papers/ReferancePaper3.pdf";

// Fix for worker issue in react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const researchPapers = [PaperOne, PaperTwo, RefPaper1, RefPaper2, RefPaper3];

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
    <section className="w-8/12 my-48 py-12 mx-auto rounded-4xl bg-purple-200 text-gray-900">
      <div className="text-center">
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
              {index < 2
                ? `📜 Published Paper ${index + 1}`
                : `📄 Reference Paper ${index - 1}`}
            </button>
          ))}
        </div>

        {/* PDF Viewer */}
        <div className="mt-8 flex flex-col items-center">
          <div className="relative shadow-md rounded-lg w-full max-w-4xl bg-white p-4 overflow-hidden">
            {loading && <p className="text-gray-500">Loading PDF...</p>}
            {error && <p className="text-red-500">Failed to load PDF.</p>}

            <div className="overflow-x-auto overflow-hidden w-full no-scrollbar">
              <div
                className="flex"
                style={{
                  transform: `scale(${scale})`,
                  transformOrigin: "top left",
                  transition: "transform 0.3s ease-in-out",
                }}
              >
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
                  />
                </Document>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-4 flex gap-4">
            <button
              onClick={goToPrevPage}
              className="px-3 py-2 bg-gray-300 rounded"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={goToNextPage}
              className="px-3 py-2 bg-gray-300 rounded"
            >
              <FaArrowRight />
            </button>
            <button onClick={zoomIn} className="px-3 py-2 bg-gray-300 rounded">
              <FaPlus />
            </button>
            <button onClick={zoomOut} className="px-3 py-2 bg-gray-300 rounded">
              <FaMinus />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
