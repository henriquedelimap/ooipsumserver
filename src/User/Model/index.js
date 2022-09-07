import mongoose from "mongoose";
import Perfil from "../../Perfil/Model/index.js";

const Links = new mongoose.Schema({
  name: { type: String, require: true, unique: true },
  url: { type: String, require: true },
  createdAt: { type: Date, required: false, default: Date.now },
  updatedAt: { type: Date, required: false, default: Date.now },
});

const UserSchema = new mongoose.Schema({
  username: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  links: { type: [Links] },
  email: { type: String, require: true },
  createdAt: { type: Date, required: false, default: Date.now },
  updatedAt: { type: Date, required: false, default: Date.now },
});

const User = mongoose.model("user", UserSchema);
export default User;
