const mongoose = require("mongoose");

async function connect() {
  const dbConnect = await mongoose.connect(
    "mongodb://localhost:27017/mongoose-intro"
  ); // Substituir por variavel de ambiente

  console.log("Conectado ao DB:", dbConnect.connections[0].name);
}

module.exports = connect;
