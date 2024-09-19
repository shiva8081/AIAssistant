import passport from "passport";
import session from "express-session";
import { Express, Request, Response } from "express";
import dotenv from "dotenv";
import "./passport.ts";

dotenv.config();

export const configureAuth = (app: Express): void => {
  app.use(
    session({
      secret: process.env.SECRET as string,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
      },
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile","email"] })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: process.env.CLIENT_URL }),
    (req: Request, res: Response) => {
      res.status(200);
      res.redirect(process.env.CLIENT_URL as string);
    }
  );

  app.get("/api/current_user", (req: Request, res: Response) => {
    res.status(200).json(req.user || { message: "Yeah, no login user" });
  });

  app.get("/api/logout", (req: Request, res: Response) => {
    req.logout((err) => {
      if (err) return res.sendStatus(400);
      console.log("logout worked");
      req.session.destroy((err) => {
        if (err) return res.sendStatus(500);
      });
      res.clearCookie("connect.sid");
      res.redirect(process.env.CLIENT_URL as string);
    });
  });
};
