import { songsArray } from "../front-end/src/assets/database/songs.js";
import { artistsArray } from "../front-end/src/assets/database/artists.js";
import axios from "axios";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;

// 🔹 Função para obter o token do Spotify
async function getSpotifyToken() {
  try {
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
  } catch (error) {
    console.error("❌ Erro ao obter token do Spotify:", error);
    return null;
  }
}

function cleanSongsArray() {
  const uniqueSongs = new Map();
  const cleanedArray = [];

  songsArray.forEach((song) => {
    if (!uniqueSongs.has(song.name) && !uniqueSongs.has(song.id)) {
      uniqueSongs.set(song.name, true);
      uniqueSongs.set(song.id, true);
      cleanedArray.push(song);
    }
  });

  // Reatribuir IDs sequenciais
  const newsongsArray = cleanedArray.map((song, index) => ({
    ...song,
    id: index + 1,
  }));
  return newsongsArray;
}

// 🔹 Função para buscar capa do álbum
async function getAlbumCover(trackName, artistName, token) {
  try {
    const query = `${trackName} artist:${artistName}`;
    const response = await axios.get(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(
        query
      )}&type=track&limit=1`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    const track = response.data.tracks.items[0];
    if (!track) {
      console.log(
        `⚠️ Música "${trackName}" de "${artistName}" não encontrada.`
      );
      return null;
    }

    return track.album.images[0]?.url || null;
  } catch (error) {
    console.error("❌ Erro ao buscar imagem do álbum:", error);
    return null;
  }
}

async function getAudioPreview(trackName, artistName) {
  //usando API do Deezer
  try {
    const response = await axios.get(
      `https://api.deezer.com/search?q=${encodeURIComponent(
        `${trackName} ${artistName}`
      )}&limit=1`
    );

    const track = response.data.data[0]; // Pega a primeira música retornada

    if (!track) {
      console.log(
        `⚠️ Nenhuma prévia encontrada para "${trackName}" de ${artistName}`
      );
      return null;
    }

    return track.preview || null;
  } catch (error) {
    console.error(`❌ Erro ao buscar preview da música "${trackName}"`, error);
    return null;
  }
}

// Atualiza apenas `songs.js` com capas de álbuns
async function updateSongsArray(token) {
  if (!token) return;
  const newsongsArray = cleanSongsArray();

  const updatedSongs = [];
  let id = 1;
  for (let song of newsongsArray) {
    song.image = await getAlbumCover(song.name, song.artist, token);
    song.audio = await getAudioPreview(song.name, song.artist);

    if (song.image && song.audio) {
      song.id = id;
      updatedSongs.push(song); // Adiciona apenas se ambos não forem null
      id++;
    }
  }

  const formatSongsArray = (songs) => {
    //formata o array
    return `export const songsArray = [\n  ${songs
      .map(
        (song) => `{
      id: ${song.id},
      image: "${song.image}",
      name: "${song.name}",
      duration: "${song.duration}",
      artist: "${song.artist}",
      audio: "${song.audio}"
    }`
      )
      .join(",\n  ")}
  \n];`;
  };

  fs.writeFileSync("./songs.js", formatSongsArray(updatedSongs), "utf8");

  console.log("✅ Arquivo 'songs.js' atualizado!");
}

// Busca informações dos artistas para `artists.js`
async function updateArtistsArray(token) {
  if (!token) return;

  const updatedArtists = [];

  for (let artist of artistsArray) {
    try {
      const response = await axios.get(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(
          artist.name
        )}&type=artist&limit=1`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const artistData = response.data.artists.items[0];
      if (!artistData) {
        console.log(`⚠️ Artista "${artist.name}" não encontrado.`);
        updatedArtists.push(artist); // Mantém o artista original se não encontrar
        continue;
      }

      updatedArtists.push({
        ...artist, // Mantém ID e nome original
        image: artistData.images[1]?.url || artist.image, // Atualiza se disponível
        banner: artistData.images[0]?.url || artist.banner, // Atualiza se disponível
      });

      console.log(
        `✅ ${artist.name} -> 🖼️ ${artistData.images[1]?.url} | 🎤 ${artistData.images[0]?.url}`
      );
    } catch (error) {
      console.error(`❌ Erro ao buscar informações de ${artist.name}:`, error);
      updatedArtists.push(artist); // Mantém o artista original caso dê erro
    }
  }

  // 🔹 Salva `artists.js`
  fs.writeFileSync(
    "./artists.js",
    `export const artistsArray = ${JSON.stringify(updatedArtists, null, 2)};`,
    "utf8"
  );

  console.log("✅ Arquivo 'artists.js' atualizado com imagens e banners!");
}

const token = await getSpotifyToken();

// 🚀 artistas
//updateArtistsArray(token);

//🚀 músicas
//updateSongsArray(token);
