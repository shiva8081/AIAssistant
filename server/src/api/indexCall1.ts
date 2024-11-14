import { Express, Request, Response } from "express";
import { AskHuggingFace } from "./index1";

export const Apicall1 = async (app: Express) => {
  app.post("/api/chat", async (req: Request, res: Response) => {
    const { question, pdfcontent } = req.body;
    const response = await AskHuggingFace(question, pdfcontent);
    res.status(200).json({ response });
  });
  
  app.get("/api/1",(req:Request,res:Response)=>{
    res.send("heyyyyy")
  })
  
}