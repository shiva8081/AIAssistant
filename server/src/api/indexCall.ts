import { Express,Request,Response } from "express";
import {AskOpenAI} from "./index.ts"



 export const Apicall=async(app:Express)=>{

   app.post("/api/openai",async(req:Request,res:Response) =>{
    const {question,pdfcontent}=req.body;
    const response =await AskOpenAI(question,pdfcontent);
    res.status(200).json({response})


   })
app.get("/api",(req:Request,res:Response)=>{
    res.send("heyyyyyy.......")
})

}