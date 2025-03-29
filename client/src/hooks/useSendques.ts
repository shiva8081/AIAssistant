import { useState } from "react";
import { usePdfContext } from "../context/PdfContext";

const useSendques = () => {
  const [loading, setLoading] = useState(false);
  const { pdfText } = usePdfContext();

  const SendResponse = async (message: string, previousResponse?: string) => {
    setLoading(true);
    const response = await fetch("http://localhost:5001/ask/gemini", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: message,
        pdfcontent: pdfText,
        previousResponse: previousResponse,
      }),
    });
    const data = await response.json();
    setLoading(false);
    return data.answer;
  };

  return { loading, SendResponse };
};

export default useSendques;
