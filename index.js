const express = require("express");
const dbConnect = require("./config/db.config");
dbConnect();
const app = express();

app.use(express.json()); //MIDDLEWARE

// Rotas ou Roteadores

app.listen(4000, () => {
  console.log("Tamo indo bem!");
});
