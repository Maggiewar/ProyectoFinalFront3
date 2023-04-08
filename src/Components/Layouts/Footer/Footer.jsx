import React from "react";
import { Outlet } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <Outlet />
      <h1>Footer</h1>Footer
    </div>
  );
};

export default Footer;
