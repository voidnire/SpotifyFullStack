import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://erin:7X0wSDjjvvRm1APp@spotify.2joac.mongodb.net/?retryWrites=true&w=majority&appName=Spotify";

const cliente = new MongoClient(URI);

export const db = cliente.db("spotifyAula");

//const songCollection = await db.collection("songs").find({}).toArray();

//console.log(songCollection);
