import bcryptjs from "bcryptjs";
import User from "../Model/index.js";

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
      const newUser = new User(user);
      return newUser.save();
    },
    async updateUser(_, { username, user }) {
      await User.findOneAndUpdate({ username: username }, user, {
        new: true,
        userFindAndModify: false,
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
