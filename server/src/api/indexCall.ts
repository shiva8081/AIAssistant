import { Express, Request, Response } from "express";
import { AskGemini } from "./index.ts";

export const Apicall = async (app: Express) => {
  // Define your POST route to handle requests
  app.post("/ask/gemini", async (req: Request, res: Response) => {
    try {
      const { pdfContent, question } = req.body;
      if (!pdfContent || !question) {
        return res
          .status(400)
          .json({ error: "Missing PDF content or question." });
      }
      const response = await AskGemini(question, pdfContent);

      res.json({ answer: response });
    } catch (error) {
      console.error("Error in processing question:", error);
      res.status(500).json({ error: "Failed to process question" });
    }
  });
  app.get("/api", (req: Request, res: Response) => {
    res.send("heyyyyyy.......");
  });
};
