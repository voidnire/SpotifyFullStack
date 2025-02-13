import React from "react";
import Player from "../components/Player";

const Song = () => {
  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src="" alt="Imagem da Música X" />
        </div>
      </div>
      <div className="song__bar">
        <div className="song__artist-image">
          <img width={75} height={75} src="" alt="Imagem do Artista Y" />
        </div>
        <Player />
        <div>
          <p className="song__name">Musica</p>
          <p className="song__artist-name">Artista</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
