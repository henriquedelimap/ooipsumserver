import mongoose from "mongoose";

export const LinkSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  userId: { type: String, required: true },
  createdAt: { type: Date, required: false, default: Date.now },
  updatedAt: { type: Date, required: false, default: Date.now },
});

const Link = mongoose.model("links", LinkSchema);
export default Link;
