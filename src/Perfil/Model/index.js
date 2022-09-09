import mongoose from "mongoose";
import User from "../../User/Model/index.js";

const PerfilSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: false,
  },

  accountType: {
    type: String,
    enum: [
      "Criador(a) de conteúdo digital",
      "pessoal",
      "serviço",
      "produto",
      "serviço/produto",
      "vendedor",
      "colecionador",
      "consultor",
      "corretor",
    ],
    default: "pessoal",
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

const Perfil = mongoose.model("perfil", PerfilSchema);
export default Perfil;
