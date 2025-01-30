import { useState } from "react";
import { usecontext } from "../context/PdfContext";


const useSendques = () => {
    const [loading, setLoading] = useState(false);
    const {pdfText}=usecontext();


    const SendResponse = async (message: string) => {
        setLoading(true);
        const response = await fetch("http://localhost:5001/api/chat",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({question:message,pdfcontent:pdfText})
            }
            
        );
        const data = await response.json();
        setLoading(false);
        return data;

    }

    
  return {loading, SendResponse}
}

export default useSendques
