import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const FavoritosContainer = () => {
  const { state } = useContext(GlobalContext);
  return (
    <div>
      {state.favoritos.map((e) => (
        <h1 key={e.id}>{e.name}</h1>
      ))}
      FavoritosContainer
    </div>
  );
};

export default FavoritosContainer;
