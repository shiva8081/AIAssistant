
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";


// Load environment variables
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

function constructPrompt(pdfContentChunk:string, question: string){
  return `Given the following context from a PDF document: \n\n ${pdfContentChunk} \n\n Answer the following question based on the provided context: ${question}`
}

function chunkText(text: string, chunkSize: number = 2000) {
  const chunks = [];
  for (let i = 0; i < text.length; i += chunkSize) {
      chunks.push(text.slice(i, i + chunkSize));
  }
  return chunks;
}

export const AskGemini = async (question: string, pdfContent: string) => {
  try {
    const chunks = chunkText(pdfContent);

     let combinedResponse = "";

     for (const chunk of chunks){
        const prompt = constructPrompt(chunk, question)
        const result = await model.generateContent(prompt);
        combinedResponse += result.response.text();
     }

    return combinedResponse;

  } catch (error: any) {
      console.error("Error in Gemini API request:", error);
      return "Sorry, I couldn't process your request.";
  }
};