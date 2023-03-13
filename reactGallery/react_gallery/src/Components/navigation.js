import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="main-nav">
        <ul>
            <li><NavLink to="/mountain">Montaña</NavLink></li>
            <li><NavLink to="/beach">Playa</NavLink></li>
            <li><NavLink to="/birds">Pájaros</NavLink></li>
            <li><NavLink to="/food">Comida</NavLink></li>
        </ul>
    </nav>
  );
};

export default Navigation;
