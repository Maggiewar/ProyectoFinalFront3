import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Dentista from "./Dentista";

const DentistasContainer = () => {
  const { state, dispatch } = useContext(GlobalContext);
  useEffect(() => {
    const getDentistas = axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    getDentistas
      .then((res) => dispatch({ type: "GET_USERS", payload: res.data }))
      .catch((err) => console.log(err));
  }, {});

  console.log(state.dentistas);

  return (
    <div>
      <Dentista dentistas={state.dentistas} dispatch={dispatch} favoritos={state.favoritos}/>
    </div>
  );
};

export default DentistasContainer;
