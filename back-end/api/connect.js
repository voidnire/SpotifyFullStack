import { MongoClient } from "mongodb";
import dotenv from "dotenv";

const URI = process.env.URI;

const cliente = new MongoClient(URI);

export const db = cliente.db("spotifyAula");

console.log("Banco " + db.databaseName + " conectado." + db);
