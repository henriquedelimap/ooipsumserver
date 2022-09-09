import mongoose from "mongoose";

export const LinkSchema = new mongoose.Schema({
  url: { type: String, required: false },
  userId: { type: String, required: false },
  createdAt: { type: Date, required: false, default: Date.now },
  updatedAt: { type: Date, required: false, default: Date.now },
});

const Link = mongoose.model("links", LinkSchema);
export default Link;
