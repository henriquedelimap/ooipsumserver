import mongoose from "mongoose";
import User from "../../User/Model/index.js";
export const PerfilSchema = new mongoose.Schema({
  userId: String,
  createdAt: { type: Date, required: false, default: Date.now },
  updatedAt: { type: Date, required: false, default: Date.now },
});

const Perfil = mongoose.model("perfil", PerfilSchema);
export default Perfil;
