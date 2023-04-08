import React from "react";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h2>Este es el navbar</h2>
      <ul>
        <li>contacto</li>
        <li>favoritos</li>
        <li>algo más</li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Navbar;
