import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
        <h1 className="site-title">
            Bangazon
            <br />
            <small>The smallest and least sophisticated marketplace out there... like REALLY</small>
        </h1>
        <nav>
            <ul className="container">
            <li>
                <Link className="nav-link" to="/">
                Bangazon
                </Link>
            </li>
            </ul>
        </nav>
        <hr></hr>
    </header>
  );
};

export default NavBar;