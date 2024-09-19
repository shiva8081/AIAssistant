import { useLocation } from "react-router-dom";

const PdfChat = () => {
  const location = useLocation();
  const pdf = location.state?.pdf;
  console.log(location.state);
  console.log(pdf);

  return (
    <div className=" mt-[72px] flex  ">
        {/* left side PDF-viewer */}
      <div className=" w-1/2">
        <div className="  h-full  flex items-center justify-center">
          <div className="  h-full w-full  bg-white rounded-lg p-4">
            <iframe
              src={pdf}
              title="Uploaded PDF"
              className="  h-full w-full  border-none"
            />
          </div>
        </div>
      </div>
      {/* right side PDF-viewer */}
      <div className=" h-[90vh] relative flex flex-col w-1/2">
        <div className="text-2xl font-bold  ">Chat</div>
        <div className="flex-grow overflow-y-auto mb-4 bg-gray-100 rounded-lg p-4">
          {/* Chat messages will go here */}
        </div>
        <div className="flex items-center">
          <input
            className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Ask a question...?"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default PdfChat;