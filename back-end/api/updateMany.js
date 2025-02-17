import { db } from "./connect.js";
import fs from "fs";

const updateAllSongs = async () => {
  try {
    const songsCollection = db.collection("songs");

    const audioFiles = fs.readdirSync("../audios");

    for (const song of await songsCollection.find().toArray()) {
      const formattedFileName =
        song.name.replace(/[^a-zA-Z0-9]/g, "_") + ".mp3";

      if (audioFiles.includes(formattedFileName)) {
        const newAudioPath = `../../../audios/${formattedFileName}`;

        await songsCollection.updateOne(
          { _id: song._id },
          { $set: { audio: newAudioPath } }
        );

        //console.log(`✅ Caminho atualizado para: ${newAudioPath}`);
      } else {
        console.warn(`⚠️ Arquivo não encontrado para: ${song.name}`);
      }
    }

    console.log("🚀 Todas as músicas foram atualizadas com sucesso!");
  } catch (error) {
    console.error("❌ Erro ao atualizar os caminhos:", error);
  }
};

updateAllSongs();
