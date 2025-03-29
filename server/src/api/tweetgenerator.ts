import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const constructTweetPrompt = (topic: string, tone: string) => {
  return `Generate a tweet about "${topic}" with a ${tone} tone. 
  The tweet should be engaging, within 280 characters, and include relevant hashtags.
  Only return the tweet text without any additional explanation.`;
};

export const generateTweet = async (topic: string, tone: string) => {
  try {
    const prompt = constructTweetPrompt(topic, tone);
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Error generating tweet:", error);
    throw new Error("Failed to generate tweet");
  }
};