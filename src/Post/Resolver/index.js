import User from "../../User/Model/index.js";
import Link from "../Model/index.js";

export const LinkResolver = {
  Query: {
    async links() {
      return await Link.find();
    },
    async link(_, { id }) {
      return await Link.findById(id);
    },
  },
  Mutation: {
    async createLink(_, { link }) {
      const perfil = await User.findOneAndUpdate(
        { userId: link.userId },
        {
          $push: { links: [link] },
        }
      );
      const newLink = new Link(link);
      return newLink.save();
    },
    async updateLink(_, { id, link }) {
      return await Link.findByIdAndUpdate(id, link, {
        new: true,
        useFindAndModify: false,
      });
    },
    async deleteLink(_, { id }) {
      return await Link.findByIdAndDelete(id, (error, deletedRecord) => {
        if (!error) {
          throw new Message("deletado com sucesso");
        }
      }).clone();
    },
  },
};
