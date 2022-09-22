import mongoose from "mongoose";

const Perfil = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: false,
  },
});

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  accountType: {
    type: [String],
    enum: ["autor", "dev", "admin", "usuario"],
    default: "usuario",
    required: false,
  },
  perfil: {
    type: Perfil,
    required: true,
  },
  hasInstagramAuthentication: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    required: false,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    required: false,
    default: Date.now,
  },
});

const User = mongoose.model("user", UserSchema);
export default User;
