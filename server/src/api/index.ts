import OpenAI from "openai";
import dotenv from "dotenv";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions";

// Load environment variables
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.CHAT_GPT_SECRET as string, // Make sure you add your OpenAI API key here
});

 export const AskOpenAI = async (question: string, pdfcontent: string) => {
  const message: { role: string; content: string }[] = [
    {
      //The system role is a powerful feature of the ChatGPT API that allows us to set the context and behavior of the AI assistant.
      role: "system",
      content:
        "You are an assistant helping users interact with PDF documents.",
    },
    {
      //The user role represents the human interacting with the AI model..
      role: "user",
      content: `Here the content of the pdf:${pdfcontent}`,
    },
    {
      //The user role represents the human interacting with the AI model.
      role: "user",
      content: `Answer the following question:${question}`,
    },
  ];
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: message as ChatCompletionMessageParam[],
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error in OpenAI API request:", error);
    return "Sorry, I couldn't process your request.";
  }
};
