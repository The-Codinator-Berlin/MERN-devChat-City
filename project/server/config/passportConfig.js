import passport from "passport";
import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import usersModel from "../models/usersModel.js";
import * as dotenv from "dotenv";
dotenv.config();

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_TOKEN_KEY,
};

const jwtStrategy = new JwtStrategy(options, async function (
  jwt_payload,
  done
) {
  try {
    const user = await usersModel.findOne({ _id: jwt_payload.sub });

    if (user) {
      console.log("\u001b[37m" + "Token verified!");
      return done(null, user);
    } else {
      console.log("\u001B[31m" + "No user in the database");
      return done(null, false);
    }
  } catch (error) {
    return done(error, false);
  }
});

const passportStrategy = (passport) => {
  passport.use(jwtStrategy);
};

export default passportStrategy;
