import axios from "axios";
import React, { useState, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";

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
      <h2>Acá va la lista de dentistas</h2>
    </div>
  );
};

export default DentistasContainer;
