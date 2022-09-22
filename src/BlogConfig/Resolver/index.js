import BlogConfig from "../Model/index.js";
export const BlogConfigResolver = {
  Query: {
    async BlogConfig() {
      return await BlogConfig.find();
    },
  },
  Mutation: {
    async createBlogConfig(_, { blogConfig }) {
      const newBlogConfig = new BlogConfig(blogConfig);
      return newBlogConfig.save();
    },
    async updateBlogConfig(_, { siteName, blogConfig }) {
      await BlogConfig.findOneAndUpdate({ siteName: siteName }, blogConfig, {
        new: true,
        useFindAndModify: false,
      });
    },
    async deleteBlogConfig(_, { siteName }) {
      await BlogConfig.findOneAndDelete(
        { siteName: siteName },
        (error, deletedRecord) => {
          if (!error) {
            console.log("deletado com sucesso", deletedRecord);
          }
        }
      ).clone();
    },
  },
};
