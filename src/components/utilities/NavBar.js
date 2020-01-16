import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <ul>
      <li className="left">
        <Link className="logo" to="/">
          School Manager
        </Link>
      </li>
      <li>
        <Link className="item" to="/campuses">
          Campuses
        </Link>
      </li>
      <li>
        <Link className="item" to="/students">
          Students
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
