import axios from "axios";

const URL = "http://localhost:3002";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistsArray = responseArtists.data;
export const songsArray = responseSongs.data;

console.log(responseArtists);
