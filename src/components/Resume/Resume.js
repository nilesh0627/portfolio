import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Nilesh__CV.pdf";
import { MdOutlineFileDownload } from "react-icons/md";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="resume-section">
      <Particle />
      <div style={{ justifyContent: "center", position: "relative" }}>
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          style={{ maxWidth: "250px" }}
        >
          <MdOutlineFileDownload /> Download CV
        </Button>
      </div>

      <div className="resume">
        <Document file={pdf}>
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
        </Document>
      </div>

      <div style={{ justifyContent: "center", position: "relative" }}>
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          style={{ maxWidth: "250px" }}
        >
          <MdOutlineFileDownload /> Download CV
        </Button>
      </div>
    </div>
  );
}

export default Resume;
