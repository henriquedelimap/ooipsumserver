import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, require: true },
  password: { type: String, require: true },
  perfil: { type: String, require: true },
});

const User = mongoose.model("user", UserSchema);

export default User;
