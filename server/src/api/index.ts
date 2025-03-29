import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

function constructPrompt(
  pdfContentChunk: string,
  question: string,
  previousResponse?: string
) {
  return `As an AI assistant analyzing PDF content, your task is to provide accurate and contextual answers.

Context from PDF:
"""
${pdfContentChunk}
"""

${
  previousResponse
    ? `Previous response for context:
"""
${previousResponse}
"""
Consider this previous response while answering the new question.`
    : ""
}

Current question: ${question}

Instructions:
1. Analyze the PDF content thoroughly
2. If referencing specific parts, quote them directly
3. If the question relates to previous responses, maintain consistency
4. If information is not found in the PDF, clearly state that
5. Provide concise but comprehensive answers
6. If the question needs clarification, ask for it

Answer:`;
}

function chunkText(text: string, chunkSize: number = 2000) {
  const chunks = [];
  for (let i = 0; i < text.length; i += chunkSize) {
    chunks.push(text.slice(i, i + chunkSize));
  }
  return chunks;
}

export const AskGemini = async (
  question: string,
  pdfContent: string,
  previousResponse?: string
) => {
  try {
    const chunks = chunkText(pdfContent);
    let combinedResponse = "";
    let relevantChunks = [];

    // First pass: Find relevant chunks
    for (const chunk of chunks) {
      // Simple relevance check - can be enhanced
      if (
        chunk.toLowerCase().includes(question.toLowerCase()) ||
        (previousResponse &&
          chunk.toLowerCase().includes(previousResponse.toLowerCase()))
      ) {
        relevantChunks.push(chunk);
      }
    }

    // If no relevant chunks found, use all chunks
    if (relevantChunks.length === 0) {
      relevantChunks = chunks;
    }

    // Process relevant chunks
    for (const chunk of relevantChunks) {
      const prompt = constructPrompt(chunk, question, previousResponse);
      const result = await model.generateContent(prompt);
      const response = result.response.text();

      // Only add non-duplicate information
      if (!combinedResponse.includes(response)) {
        combinedResponse += response + "\n";
      }
    }

    // Clean up and format the final response
    const finalResponse = combinedResponse
      .trim()
      .split("\n")
      .filter(Boolean)
      .join("\n");

    return finalResponse;
  } catch (error: any) {
    console.error("Error in Gemini API request:", error);
    return "Sorry, I couldn't process your request. Please try rephrasing your question.";
  }
};
