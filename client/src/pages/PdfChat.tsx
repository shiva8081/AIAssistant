import { usecontext } from "../context/PdfContext";
import Messages from "./Messages";
import useSendques from "../hooks/useSendques";
import { useState, useRef, useEffect } from "react";

const PdfChat = () => {
  const { pdfUrl } = usecontext();
  const { SendResponse, loading } = useSendques();
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState<
    { text: string; sender: "user" | "bot" }[]
  >([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message to state
    setChatMessages((prev) => [...prev, { text: message, sender: "user" }]);

    // Clear input field
    setMessage("");

    // Send message to backend
    const response = await SendResponse(message);

    // Add bot response to state
    setChatMessages((prev) => [...prev, { text: response, sender: "bot" }]);
  };

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
      {/* right side chat */}
      <div className=" h-[90vh] relative flex flex-col w-1/2">
        <div className="text-2xl font-bold">Chat</div>
        <div
          ref={chatContainerRef}
          className="flex-grow overflow-y-auto mb-4 bg-gray-100 rounded-lg p-4 relative"
        >
          <Messages messages={chatMessages} loading={loading} />
        </div>
        <form onSubmit={handleSubmit} className="flex items-center">
          <input
            className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Ask a question...?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={loading}
          />
          <button
            className={`px-4 py-2 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 
              ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PdfChat;
