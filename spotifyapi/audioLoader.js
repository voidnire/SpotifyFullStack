import axios from "axios";
import fs from "fs";
import path from "path";
import { songsArray } from "./songs.js";

const downloadAudio = async (song) => {
  try {
    const audioUrl = song.audio; // URL do áudio da API do Deezer
    const songName = song.name.replace(/[^a-zA-Z0-9]/g, "_"); // Nome do arquivo sem caracteres especiais
    const filePath = path.join("audios", `${songName}.mp3`);

    if (fs.existsSync(filePath)) {
      console.log(`✅ O arquivo ${filePath} já existe.`);
      return filePath; // Se já existe, retorna o caminho
    }

    const response = await axios({
      method: "GET",
      url: audioUrl,
      responseType: "stream",
    });

    const writer = fs.createWriteStream(filePath);
    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on("finish", () => {
        console.log(`🎵 Download concluído: ${filePath}`);
        resolve(filePath);
      });
      writer.on("error", (err) => reject(err));
    });
  } catch (error) {
    console.error(`❌ Erro ao baixar ${song.name}:`, error.message);
    return null;
  }
};

const saveAudios = async () => {
  for (const song of songsArray) {
    const filePath = await downloadAudio(song);
    if (filePath) {
      song.audio = filePath; // Atualiza o caminho do áudio no objeto da música
    }
  }

  // Agora você pode salvar songsArray atualizado no MongoDB
  console.log(
    "🚀 Todos os áudios foram baixados e os caminhos foram atualizados."
  );
};

saveAudios();
