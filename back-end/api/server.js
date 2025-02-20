import express, { response } from "express";
import cors from "cors";
import { db } from "./connect.js";

const app = express();
const PORT = process.env.PORT || 3002;

app.listen(PORT, () =>
  console.log(`🚀 API rodando em http://localhost:${PORT}`)
);

app.use(cors());

app.get("/", (request, response) => {
  response.send("So tem os endpoint '/artists' e '/songs'");
});
app.get("/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});
