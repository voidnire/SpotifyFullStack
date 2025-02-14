import { songsArray } from "../front-end/src/assets/database/songs.js";
import { artistsArray } from "../front-end/src/assets/database/artists.js";
import axios from "axios";
import fs from "fs";

const testtoken =
  "BQAKHNxZJz_7ubm3p4wZQCBZvAEbNZ2uuCWYk_7DckLRflTkKr7k6eQvHu9FimkLlI3zVKOpTgEZjR2S84yr8MHxhUiQBCXBurdxDn2k8ImMhMS6xcbkeWhnav5HX5tFHeK-WpwEQO4";

const client_id = "93e500cd865a497d90d4daf5df74ffc9";
const client_secret = "6d02c91d5e044f98b5f9dc410c5efe93";

const newSongsArray = songsArray.map((currentSongObj) => {
  const newSongObj = { ...currentSongObj };
  delete newSongObj.id;
  delete newSongObj.duration;
  newSongObj.image = "";
  newSongObj.audio = "";
  return newSongObj;
});

async function getSpotifyToken() {
  const response = await axios.post(
    "https://accounts.spotify.com/api/token",
    "grant_type=client_credentials",
    {
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(client_id + ":" + client_secret).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  return response.data.access_token;
}

export async function getTrackDetails(trackName, artistName, token) {
  try {
    const query = `${trackName} artist:${artistName}`; // Busca combinando música e artista

    const response = await axios.get(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(
        query
      )}&type=track&limit=1`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    // Pegando o primeiro item da resposta
    const track = response.data.tracks.items[0];

    if (!track) {
      console.log(
        `⚠️ Música "${trackName}" de "${artistName}" não encontrada no Spotify.`
      );
      return { image: null, preview_url: null };
    }

    return {
      image: track.album.images[0]?.url || null,
      preview_url: track.preview_url || null,
    };
  } catch (error) {
    console.error("❌ Erro ao buscar detalhes da música:", error);
    return { image: null, preview_url: null };
  }
}

async function updateSongsArray() {
  const token = await getSpotifyToken();
  const updatedSongs = [];

  for (let song of songsArray) {
    const trackData = await getTrackDetails(song.name, token);
    updatedSongs.push({
      ...song,
      image: trackData.image,
      audio: trackData.preview_url,
    });
    console.log(
      `✅ ${song.name} -> ${trackData.image} | 🎵 ${trackData.preview_url}`
    );
  }

  // Formata os dados corretamente
  const fileContent = `export const songsArray = ${JSON.stringify(
    updatedSongs,
    null,
    2
  )};`;

  // Salva o arquivo na mesma pasta do script
  fs.writeFileSync("./songs.js", fileContent, "utf8");

  console.log("✅ Arquivo 'songs.js' atualizado com imagens e prévias!");
}

//TEST

getTrackDetails("Song 2", "Blur", testtoken)
  .then(({ image, preview_url }) => {
    console.log(`📷 Imagem da música "Song 2": ${image}`);
    console.log(
      `🎵 Preview URL: ${preview_url || "🔴 Sem preview disponível"}`
    );
  })
  .catch((error) => console.error("❌ Erro ao buscar detalhes:", error));

//updateSongsArray();
