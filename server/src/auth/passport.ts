import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

import dotenv from "dotenv";
import prisma from "../database";

dotenv.config(); // Load environment variables

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID as string;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET as string;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/google/callback",
    },
    async function (_accessToken, _refreshToken, profile, done) {
      try {
        const GID = profile.id;
        console.log(GID);
        const userExist = await prisma.user.findUnique({
          where: {
            googleId: GID,
          },
        });
        console.log(userExist);
        if (userExist) {
          done(null, userExist);
        } else {
          if (profile.emails === undefined || profile.emails[0] === undefined) {
            return done(null, false);
          }
          const user = await prisma.user.create({
            data: {
              googleId: profile.id,
              name: profile.displayName,
              email: profile.emails[0].value,
              pictureUrl: profile.photos
                ? profile.photos[0]
                  ? profile.photos[0].value
                  : null
                : null,
              authProvider: profile.provider,
            },
          });
          console.log(user);
          done(null, user);
        }
      } catch (error) {

      }
    }
  )
);

passport.serializeUser((user: Express.User, done) => {
  done(null, user);
});

passport.deserializeUser((user: Express.User, done) => {
  done(null, user);
});
