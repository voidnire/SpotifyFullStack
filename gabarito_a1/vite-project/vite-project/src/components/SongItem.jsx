import React from "react";
import { Link } from "react-router-dom";

const SongItem = () => {
  return (
    <Link to="/song/1" className="song=item">
      <div className="song-item__number-album">
        <p>1</p>
        <div className="song-item__album"></div>
        <img src="" alt="Imagem da Música X" className="song-item__image" />

        <p className="song-item__name">Ultima- meda viv</p>
      </div>
      <p>02:30</p>
    </Link>
  );
};

export default SongItem;
