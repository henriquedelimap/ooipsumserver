import bcryptjs from "bcryptjs";
import User from "../../User/Model/index.js";
import AuthConfig from "../../Config/auth.js";
import jsonwebtoken from "jsonwebtoken";
export const authResolvers = {
  Mutation: {
    async signIn(_, { username, password }) {
      const user = await User.findOne({ username: username });

      if (!user) {
        throw new Error("usuário ou senha incorreto");
      }
      const passwordMatched = await bcryptjs.compare(password, user.password);
      if (!passwordMatched) {
        throw new Error("usuário ou senha incorreto");
      }

      const { secret, expiresIn } = AuthConfig.jwt;

      const token = jsonwebtoken.sign({}, secret, {
        subject: `"${user.username}"`,
        expiresIn,
      });

      return {
        token,
        user,
      };
    },
  },
};
