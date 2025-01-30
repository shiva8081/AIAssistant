import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import cookieParser from "cookie-parser";

import cors from "cors";
import { configureAuth } from "./auth/index.ts";
import { Apicall } from "./api/indexCall.ts";

dotenv.config();

export const createServer = (): Express => {
  const app: Express = express();
  app.use(express.json());
  app.use(cookieParser());

  app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
      methods: "PUT,GET,POST,DELETE",
    })
  );

  app.get("/", (req: Request, res: Response) => {
    res.send("hello world");
  });

  configureAuth(app);
  Apicall(app);

  return app;
};
