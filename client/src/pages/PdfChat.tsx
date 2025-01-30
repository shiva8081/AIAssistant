import { usecontext } from "../context/PdfContext";
import Messages from "./Messages";
import useSendques from "../hooks/useSendques";
import { useState } from "react";

const PdfChat = () => {
  const { pdfUrl } = usecontext();
  const {  SendResponse } = useSendques();
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(message);
    const response = await SendResponse(message);
  };
  // console.log(pdf);

  return (
    <div className=" mt-[72px] flex  ">
      {/* left side PDF-viewer */}
      <div className=" w-1/2">
        <div className="  h-full  flex items-center justify-center">
          <div className="  h-full w-full  bg-white rounded-lg p-4">
            <iframe
              src={pdfUrl ?? undefined}
              title="Uploaded PDF"
              className="  h-full w-full  border-none"
            />
          </div>
        </div>
      </div>
      {/* right side PDF-viewer */}
      <div className=" h-[90vh] relative flex flex-col w-1/2">
        <div className="text-2xl font-bold  ">Chat</div>
        <div className="flex-grow  overflow-y-auto mb-4 bg-gray-100 rounded-lg p-4">
          <Messages />
        </div>
        <form onSubmit={handleSubmit} className="flex items-center">
          <input
            className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Ask a question...?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default PdfChat;
