import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";


const app=express();

const port:number=5000;
app.listen(port,()=>{
    console.log(`running on port ${port}`)
})
