import React from "react";
import "./Home.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";

const Home = () => {
  const { state } = useContext(GlobalContext);

  return (
    <div Classname={state.isDark ? "container-dark" : "container-light"}>
      <Link to="dentistas">Ver especialistas</Link>
    </div>
  );
};

export default Home;
