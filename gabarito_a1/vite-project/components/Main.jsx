import React from "react";
import ItemList from "./ItemList";

const Main = () => {
  return (
    <div className="main">
      (/*Artistas*/)
      <ItemList title="Artistas" />
      (/*Músicas*/)
      <ItemList title="Músicas" />
    </div>
  );
};

export default Main;
