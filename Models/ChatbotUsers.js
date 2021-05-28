const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Definimos los campos que tendra la colección(tabla)
const ChatBotUserSchema = new Schema(
  {
    // ID se crea de forma automatica en MongoDB
    firstName: String,
    lastName: String,
    facebookId: String,
    profilePic: String,
  },
  {
    // Que fecha se fue registrando y modificando
    timestamps: true,
  }
);

module.exports = mongoose.model("ChatBotUser", ChatBotUserSchema);
