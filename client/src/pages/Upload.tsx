import { CloudArrowUpIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { usecontext } from "../context/PdfContext";
import pdfToText from "react-pdftotext";
import { useState } from "react";
import TweetGenerator from "../components/TweetGenerator";

const Upload = () => {
  const navigate = useNavigate();
  const { setPdfUrl, setPdfText } = usecontext();
  const [activeTab, setActiveTab] = useState<"pdf" | "tweet">("pdf");
  const [loading, setLoading] = useState(false);

  const fileobj = ["application/pdf"];

  const handlechange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setLoading(true);
      const file = e.target.files?.[0];

      if (!file) {
        alert("Please select a PDF file");
        return;
      }

      if (!fileobj.includes(file.type)) {
        alert("Please upload a valid PDF file");
        return;
      }

      // Create URL for PDF viewer
      const pdfUrl = URL.createObjectURL(file);
      setPdfUrl(pdfUrl);

      // Read file as ArrayBuffer for text extraction
      const arrayBuffer = await file.arrayBuffer();
      const text = await extractText(arrayBuffer);

      if (text) {
        setPdfText(text);
        navigate("/pdfchat");
      } else {
        alert("Failed to extract text from PDF. Please try another file.");
      }
    } catch (error) {
      console.error("Error processing PDF:", error);
      alert("Failed to process the PDF. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const extractText = async (arrayBuffer: ArrayBuffer): Promise<string> => {
    try {
      // Convert ArrayBuffer to Uint8Array
      const uint8Array = new Uint8Array(arrayBuffer);

      // Create a Blob from the Uint8Array
      const blob = new Blob([uint8Array], { type: "application/pdf" });

      // Create a File object from the Blob
      const file = new File([blob], "document.pdf", {
        type: "application/pdf",
      });

      // Extract text using pdfToText
      const text = await pdfToText(file);
      return text;
    } catch (error) {
      console.error("Error extracting text:", error);
      return "";
    }
  };

  return (
    <div className="max-w-4xl mx-auto  p-6">

      
      {/* Tabs */}
      <div className="flex justify-center mb-8 border-b">
        <button
          className={`px-6 py-3 font-semibold text-lg ${
            activeTab === "pdf"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("pdf")}
        >
          PDF Chat
        </button>
        <button
          className={`px-6 py-3 font-semibold text-lg ${
            activeTab === "tweet"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("tweet")}
        >
          Tweet Generator
        </button>
      </div>

      {/* Content based on active tab */}
      {activeTab === "pdf" ? (
        <div className="w-full bg-white rounded-lg shadow-lg p-8">
          <div className="flex flex-col items-center justify-center h-[160px] border-2 border-dashed border-gray-300 rounded-lg">
            <label
              htmlFor="file-upload"
              className={`cursor-pointer ${
                loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
              } text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out flex items-center`}
            >
              {loading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Processing...
                </div>
              ) : (
                <>
                  <CloudArrowUpIcon className="h-6 w-6 mr-2" />
                  Upload PDF
                </>
              )}
              <input
                id="file-upload"
                type="file"
                accept=".pdf"
                className="hidden"
                onChange={handlechange}
                disabled={loading}
              />
            </label>
            <p className="mt-4 text-sm text-gray-500">Supported file: PDF</p>
          </div>
          <div className="mt-6 text-center">
            <h2 className="text-xl font-semibold text-gray-700">
              Upload a PDF to start chatting
            </h2>
            <p className="mt-2 text-gray-500">
              Our AI will help you analyze and understand your PDF content
            </p>
          </div>
        </div>
      ) : (
        <div className="w-full bg-white rounded-lg shadow-lg">
          <TweetGenerator />
        </div>
      )}

      {/* Features Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-3">PDF Chat Features</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Upload and analyze PDF documents</li>
            <li>• Ask questions about your PDF content</li>
            <li>• Get instant AI-powered responses</li>
            <li>• Interactive chat interface</li>
          </ul>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-3">
            Tweet Generator Features
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Generate engaging tweets</li>
            <li>• Choose from multiple tones</li>
            <li>• AI-powered content creation</li>
            <li>• One-click copy to clipboard</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Upload;
