import express from "express";
const app = express();

app.get("/", (req, res) => {
  console.log("Hola mundo");
  res.send("Hola mundo");
});

app.listen(3000, () => console.log("Servidor corriendo en puerto 3000"));
