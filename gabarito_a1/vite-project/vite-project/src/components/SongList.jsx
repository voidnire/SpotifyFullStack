import React from "react";
import { Link } from "react-router-dom";
import { SongItem } from "../components/SongItem";

const SongList = () => {
  return (
    <div className="song-list">
      <Link to="/song/1">
        <SongItem />
        <SongItem />
        <SongItem />
        <SongItem />
        <SongItem />
      </Link>
    </div>
  );
};

export default SongList;
