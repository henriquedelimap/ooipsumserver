import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  _id: { type: String, require: true, unique: true },
  username: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  perfil: { type: String, require: true },
  createdAt: { type: Date, required: false, default: Date.now },
  updatedAt: { type: Date, required: false, default: Date.now },
});

const User = mongoose.model("user", UserSchema);

export default User;
