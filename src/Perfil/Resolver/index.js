import bcryptjs from "bcryptjs";
import Perfil from "../Model/index.js";
export const PerfilResolver = {
  Query: {
    async perfils() {
      return await Perfil.find();
    },
    async perfil(_, { username }) {
      return await Perfil.findOne({ username: username });
    },
  },
  Mutation: {
    async createPerfil(parent, _) {
      const newPerfil = new Perfil(parent);
      return newPerfil.save();
    },
    async updatePerfil(_, { username, user }) {
      await Perfil.findOneAndUpdate({ username: username }, user, {
        new: true,
        userFindAndModify: false,
      });
    },
    async deletePerfil(_, { username }) {
      await Perfil.findOneAndDelete(
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
