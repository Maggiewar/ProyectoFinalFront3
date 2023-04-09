import React, { useEffect } from "react";
import Especialista from "./Especialista";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";

const EspecialistaContainer = () => {
  const { dispatch } = useContext(GlobalContext);

  const { id } = useParams();

  useEffect(() => {
    const getDentista = axios.get(
      "https://jsonplaceholder.typicode.com/users/${id}"
    );
    getDentista.then((res) =>
      dispatch({ type: "GET_USER", payload: res.data })
    );
  }, []);

  return (
    <div>
      <Especialista />
      EspecialistaContainer
    </div>
  );
};

export default EspecialistaContainer;
