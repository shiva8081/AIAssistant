import { CloudArrowUpIcon } from "@heroicons/react/24/outline";

import { useNavigate } from "react-router-dom";
import { usecontext } from "../context/PdfContext";


import pdfToText from "react-pdftotext";

const Upload = () => {
  const navigate = useNavigate();
  const { setPdfUrl, setPdfText } = usecontext();

  const fileobj = ["application/pdf"];

  const handlechange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      alert("Please select a PDF file");
      return;
    }

    if (!fileobj.includes(file.type)) {
      alert("Please upload a valid PDF file");
      return;
    }

    const reader = new FileReader();

    reader.onloadend = async (event) => {
      try {
        const pdfDataUrl = event.target?.result as string;
        setPdfUrl(pdfDataUrl);
        console.log("url",pdfDataUrl);

        // Extract text from the PDF using react-pdftotext
        const text = await pdfToText(file);
        console.log("Extracted Text:", text);

        // Set the extracted text into your context
        setPdfText(text);

        // Navigate with both the base64 URL and extracted text
        navigate("/pdfchat");
      } catch (error) {
        console.error("Error processing PDF:", error);
        alert("Failed to process the PDF. Please try again.");
      }
    };

    reader.onerror = () => {
      alert("Failed to read the file. Please try again.");
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center h-[160px] border-2 border-dashed border-gray-300 rounded-lg">
        <label
          htmlFor="file-upload"
          className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out flex items-center"
        >
          <CloudArrowUpIcon className="h-6 w-6 mr-2" />
          Upload PDF
          <input
            id="file-upload"
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={handlechange}
          />
        </label>
        <p className="mt-4 text-sm text-gray-300">Supported file: PDF</p>
      </div>
    </div>
  );
};

export default Upload;
