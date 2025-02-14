import axios from "axios";
import { getTrackDetails } from "./getDatafromApi"; // Ajuste o caminho conforme necessário

jest.mock("axios"); // Mockando axios para evitar chamadas reais à API do Spotify

describe("getTrackDetails", () => {
  const mockToken = "fake-token";

  it("deve retornar a imagem e preview_url quando a música é encontrada", async () => {
    const mockResponse = {
      data: {
        tracks: {
          items: [
            {
              album: {
                images: [{ url: "https://example.com/image.jpg" }],
              },
              preview_url: "https://example.com/preview.mp3",
            },
          ],
        },
      },
    };

    axios.get.mockResolvedValue(mockResponse);

    const result = await getTrackDetails("Song 2", "Blur", mockToken);

    expect(result).toEqual({
      image: "https://example.com/image.jpg",
      preview_url: "https://example.com/preview.mp3",
    });
  });

  it("deve retornar null para imagem e preview_url quando a música não é encontrada", async () => {
    axios.get.mockResolvedValue({ data: { tracks: { items: [] } } });

    const result = await getTrackDetails(
      "Música Inexistente",
      "Artista Fake",
      mockToken
    );

    expect(result).toEqual({
      image: null,
      preview_url: null,
    });
  });

  it("deve capturar erro da API e retornar null para imagem e preview_url", async () => {
    axios.get.mockRejectedValue(new Error("Erro na API"));

    const result = await getTrackDetails("Song 2", "Blur", mockToken);

    expect(result).toEqual({
      image: null,
      preview_url: null,
    });
  });
});
