import React from "react";
import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songArray } from "../assets/database/songs";

const Main = ({ type }) => {
  return (
    <div className="main">
      {type === "artists" || type === undefined ? (
        <ItemList
          title="Artistas"
          items={5}
          itemsArray={artistArray}
          path="/artists"
          idPath=""
        />
      ) : (
        <></>
      )}

      {type === "songs" || type === undefined ? (
        <ItemList
          title="Músicas"
          items={10}
          itemsArray={songArray}
          path="/songs"
          idPath=""
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Main;
