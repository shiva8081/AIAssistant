import { CloudArrowUpIcon } from "@heroicons/react/24/outline";
import { useState, useRef, useEffect } from "react";

const Upload = () => {
  const [pdf, setPdf] = useState<string | null>(null);
  const pdfViewerRef = useRef<HTMLDivElement>(null);

  const fileobj = ["application/pdf"];
  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let file = e.target.files?.[0];
    if (file) {
      if (fileobj.includes(file.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = (e) => {
          setPdf(e.target?.result as string);
        };
      } else {
        alert("Please upload a valid PDF file");
      }
    } else {
      alert("Please select a PDF file");
    }
  };

  useEffect(() => {
    if (pdf && pdfViewerRef.current) {
      pdfViewerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [pdf]);

  return (
    <div className="w-full">
      <div className="flex flex-col  items-center justify-center h-[160px] border-2 border-dashed op rounded-lg mb-36">
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
      
      {pdf && (
        <div ref={pdfViewerRef} className=" h-[calc(100vh-160px)] overflow-auto ">
          <div className=" inset-0 bg-black bg-opacity-0 flex items-center justify-center">
            <div className="w-full max-w-4xl bg-white rounded-lg p-4">
              <iframe
                src={pdf}
                title="Uploaded PDF"
                className="w-full h-[calc(100vh-300px)] border-none"
              />
            </div>
          </div>
        </div>
      )}
    </div> 
  );
};

export default Upload;
