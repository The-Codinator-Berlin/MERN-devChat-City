import passport from "passport";
import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import usersModel from "../models/usersModel.js";
import * as dotenv from "dotenv";
dotenv.config();

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_TOKEN_KEY,
};

const jwtStrategy = new JwtStrategy(options, function (jwt_payload, done) {
  usersModel.findOne({ _id: jwt_payload.sub }, function (error, user) {
    if (error) {
      return done(error, false);
    }
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
      // or you could create a new account
    }
  });
});

const passportStrategy = (passport) => {
  passport.use(jwtStrategy);
};

export default passportStrategy;
