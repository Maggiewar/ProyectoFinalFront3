import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import Switch from "@mui/material/Switch";

const Navbar =() =>{
  const { state, dispatch } = useContext(GlobalContext);

  const handleChange =()=>{
    dispatch({ type: "SWITCH MODE" });

  }

  return (
    <div>
      <h2>SOLUCIONES DENTALES</h2>
      <Switch
        checked={state.isDark}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
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
