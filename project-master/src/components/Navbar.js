import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.css";

import { Button } from "./Button";

function Navbar() {
  let name = localStorage.getItem("user");
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  let history = useHistory();
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("user");
    history.push({
      pathname: "/",
    });
  };

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to={{
              pathname: "/home",
            }}
            className="navbar-logo"
            onClick={closeMobileMenu}
          >
            Dough Bite <i className="fas fa-cookie-bite"></i>
          </Link>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to={{
                pathname: "/home",
              }}
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={{
                pathname: "/blogs",
              }}
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Blogs
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={{
                pathname: "/liked-recipes",
              }}
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Review Corner
            </Link>
          </li>
          <li className="text-warning my-auto mx-auto">
            <h4>Hello {name}</h4>
          </li>
          <li className="my-auto mx-auto">
            <Button buttonStyle="btn--outline" onClick={handleLogout}>
              Logout
            </Button>
          </li>
        </ul>
        {/* </div> */}
      </nav>
    </>
  );
}

export default Navbar;
