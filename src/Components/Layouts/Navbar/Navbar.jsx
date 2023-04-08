import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";

const Navbar =() =>{
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <div>
      <h2>SOLUCIONES DENTALES</h2>
      <button onClick={() => dispatch({ type: "SWITCH MODE" })}>
        {state.isDark ? "cambiar a claro" : "cambiar a oscuro"}
      </button>
      <div style={{ minHeight: "80vh" }}>
        <ul>
          <li>Menú</li>
          <li>Tratamientos</li>
          <li>Agenda tu cita</li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
}

export default Navbar;
