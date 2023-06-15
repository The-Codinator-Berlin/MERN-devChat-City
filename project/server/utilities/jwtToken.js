import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

const issueToken = (userId) => {
  console.log("userId :>> ", userId);
  const options = {
    expiresIn: "1d",
  };

  const payload = {
    sub: userId,
  };
  const secretOrPrivateKey = process.env.SECRET_TOKEN_KEY;
  const token = jwt.sign(payload, secretOrPrivateKey, options);

  return token;
};

export { issueToken };
