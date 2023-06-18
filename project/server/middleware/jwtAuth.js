import passport from "passport";

const authenticateJwt = () => {
  passport.authenticate("jwt", { session: false });
};

export default authenticateJwt;
