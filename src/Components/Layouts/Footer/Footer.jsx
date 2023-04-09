import React from "react";
import { Outlet } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <Outlet />
      <h2>Podemos ayudarte, llámanos</h2>
      <h3>ESTUDIO COMPLETO Y DIAGNÓSTICO GRATIS</h3>
    </div>
  );
};

export default Footer;
