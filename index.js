import express from "express";
import five from "johnny-five";
import createBoard from "./create-board.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
const board = await createBoard({ port: "COM10" });
const led = new five.Led(10);
const azul = new five.Led(9);

app.use(express.json());

app.get("/", (req, res) => {
  console.log("Hola mundo");
  res.send("Hola mundo");
});
// Endpoint para apagar o encender el LED
app.post("/led", (req, res) => {
  const { action } = req.body;
  if (action === "on") {
    led.on();
  } else if (action === "off") {
    led.off();
  }
  res.send({ status: `LED verde ${action}` });
});

app.post("/azul", (req, res) => {
  const { action } = req.body;
  if (action === "on") {
    azul.on();
  } else if (action === "off") {
    azul.off();
  }
  res.send({ status: `LED azul ${action}` });
});

app.listen(3000, () => console.log("Servidor corriendo en puerto 3000"));
