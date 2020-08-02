import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/3441032973_c48bf063-5bb0-42ba-b567-3d7b8d4990f6.png";
import "./Navbar.css";

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={Logo} alt="Logo" />
      <nav className="nav__links">
        <Link className="nav__link" to="/">
          Home
        </Link>
        <Link className="nav__link" to="/movies">
          Movies
        </Link>
        <Link className="nav__link" to="/tv-shows">
          TV Shows
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
