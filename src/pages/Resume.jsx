import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { AiOutlineDownload } from "react-icons/ai";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import pdf from "../assets/resume/Govind Resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getScale = () => {
    return width > 786 ? 1.7 : 0.6;
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdf;
    link.download = "Govind_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex items-center mt-6 justify-center">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="resume-container relative">
          <Document file={pdf} className="flex justify-center">
            <Page pageNumber={1} scale={getScale()} />
          </Document>
        </div>
        <div className="text-center mb-4">
          <a
            href={pdf}
            rel="noopener noreferrer"
            className="bg-blue-500 mt-4 text-white py-3 px-6 rounded inline-block"
            onClick={handleDownload}
          >
            <span className="flex items-center ">
              <AiOutlineDownload />
              <span className="ml-2">Download Resume</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
