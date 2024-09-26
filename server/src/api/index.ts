import OpenAI from "openai";
import dotenv from "dotenv";
import {Request,Response} from "express";


// Load environment variables
dotenv.config();

const openai = new OpenAI({
    apiKey:process.env.CHAT_GPT_SECRET as string, // Make sure you add your OpenAI API key here
})

const AskOpenAI=async(req:Request,res:Response)=>{


    

}