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
});

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    enum: ["dev", "admin", "premium", "free"],
    default: "free",
  },

  perfil: {
    type: Perfil,
    required: true,
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
