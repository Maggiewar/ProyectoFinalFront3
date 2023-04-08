import React from "react";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h2>SOLUCIONES DENTALES</h2>
      <ul>
        <li>menú</li>
        <li>Tratamientos</li>
        <li>Agenda tu cita</li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Navbar;
