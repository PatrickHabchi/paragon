import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import logo from "../assests/ParagonFacility.png";

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => setClick(!click);


  const handleScroll = () => {
    if (window.scrollY > 50) { 
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      <nav className={`navbar ${scroll ? "scrolled" : ""}`}>
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
          <img src={logo} alt="Paragon Facility" className="logo-image" />

          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/" 
                className={({ isActive }) => 
                (isActive ? "nav-links active" : "nav-links")} 
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
               to="/services" 
               className={({ isActive }) => 
               (isActive ? "nav-links active" : "nav-links")}
                onClick={handleClick}
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact" 
                className={({ isActive }) => 
                (isActive ? "nav-links active" : "nav-links")} 
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuOpen />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuClose />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
