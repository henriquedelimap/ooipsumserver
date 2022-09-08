import bcryptjs from "bcryptjs";
import User from "../Model/index.js";
import Perfil from "../../Perfil/Model/index.js";
export const UserResolver = {
  Query: {
    async users() {
      return await User.find();
    },
    async user(_, { username }) {
      return await User.findOne({ username: username });
    },
  },

  Mutation: {
    async createUser(_, { user }) {
      const passwordHashed = await bcryptjs.hash(user.password, 13);
      user.password = passwordHashed;

      const newPerfil = {
        username: user.username,
      };
      user.perfil = newPerfil;

      const perfil = new Perfil(newPerfil);
      const newUser = new User(user);

      return newUser.save();
    },
    async updateUser(_, { username, user }) {
      return await User.findOneAndUpdate({ username: username }, user, {
        new: true,
        useFindAndModify: false,
      });
    },
    async deleteUser(_, { username }) {
      await User.findOneAndDelete(
        { username: username },
        (error, deletedRecord) => {
          if (!error) {
            console.log("deletado com sucesso", deletedRecord);
          }
        }
      ).clone();
    },
  },
};
