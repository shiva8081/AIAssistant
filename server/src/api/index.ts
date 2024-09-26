import OpenAI from "openai";
import dotenv from "dotenv";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions";

// Load environment variables
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.CHAT_GPT_SECRET as string, // Make sure you add your OpenAI API key here
});

const AskOpenAI = async (question: string, pdfcontent: string) => {
  const message: { role: string; content: string }[] = [
    {
      role: "system",
      content:
        "You are an assistant helping users interact with PDF documents.",
    },
    {
      role: "user",
      content: `Here the content of the pdf:${pdfcontent}`,
    },
    {
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
