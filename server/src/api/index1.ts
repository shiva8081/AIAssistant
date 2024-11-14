import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const HUGGING_FACE_API_KEY = process.env.HUGGING_FACE_API_KEY as string;
const API_URL = "https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill";

export const AskHuggingFace = async (question: string, pdfcontent: string) => {
  const payload = {
    inputs: `Context: ${pdfcontent}\nQuestion: ${question}`,
 
  };

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${HUGGING_FACE_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error("Error in Hugging Face API request:", error);
    return "Sorry, I couldn't process your request.";
  }
};