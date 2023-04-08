import React from "react";
import { Outlet } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <Outlet />
      <h1>Podemos ayudarte, llámanos</h1>
      <h2>ESTUDIO COMPLETO Y DIAGNÓSTICO GRATIS</h2>
    </div>
  );
};

export default Footer;
