import { Express, Request, Response } from "express";
import { AskGemini } from "./index.ts";
import { generateTweet } from "./tweetgenerator.ts";
export const Apicall = async (app: Express) => {
  // Define your POST route to handle requests
  app.post("/ask/gemini", async (req: Request, res: Response) => {
    try {
      const { pdfcontent, question } = req.body;
      if (!pdfcontent || !question) {
        return res
          .status(400)
          .json({ error: "Missing PDF content or question." });
      }
      const response = await AskGemini(question, pdfcontent);

      res.json({ answer: response });
    } catch (error) {
      console.error("Error in processing question:", error);
      res.status(500).json({ error: "Failed to process question" });
    }
  });
  app.post("/api/generate-tweet", async (req: Request, res: Response) => {
    try {
      const { topic, tone } = req.body;
      if (!topic || !tone) {
        return res.status(400).json({ error: "Missing topic or tone" });
      }
      const tweet = await generateTweet(topic, tone);
      res.json({ tweet });
    } catch (error) {
      console.error("Error generating tweet:", error);
      res.status(500).json({ error: "Failed to generate tweet" });
    }
  });
  app.get("/api", (req: Request, res: Response) => {
    res.send("heyyyyyy.......");
  });
};
