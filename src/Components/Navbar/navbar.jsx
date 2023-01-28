import React, { useEffect, useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll-trigger";
import logo from "../../Assets/logo.png";
import { FaBlog } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { Facebook, Instagram, Linkedin, Twitter, Whatsapp } from "react-bootstrap-icons";

const Navbar = () => {

  
  const [active, setActive] = useState("navBar");
  const showNav = () => {
    setActive("navBar activeNavbar");
  };
  const removeNav = () => {
    setActive("navBar");
  };

  //code statement to add a background color to the header.
  const [transparent, setTransparent] = useState("header");
  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent("header activeHeader");
    } else {
      setTransparent("header");
    }
  };
  window.addEventListener("scroll", addBg);

  return (
    <section className="navBarSection">
      <div id="top-header">
        <div className="container">
          <ul className="header-links pull-right">
            <li>
              <a href="#">
                <i>
                  <FaFacebook />
                </i>
              </a>
            </li>
            <li>
              <a href="#">
                <i>
                  <Linkedin />
                </i>
              </a>
            </li>
            <li>
              <a href="#">
                <i>
                  <FaWhatsapp />
                </i>
              </a>
            </li>
            <li>
              <a href="#">
                <i>
                  <Twitter />
                </i>
              </a>
            </li>
            <li>
              <a href="#">
                <i>
                  <Instagram />
                </i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <header className={transparent}>
        <div className="logoDiv">
          <NavLink to="/" exact className="logo flex">
            <img src={logo} alt="" style={{ width: "200px" }} />
          </NavLink>
        </div>

        <div className={active}>
          <ul onClick={removeNav} className="navLists ">
            <li className="navItem">
              <NavLink to="/" exact className="navLink">
                Home
              </NavLink>
            </li>
            <li className="navItem">
              <a href="#works" className="navLink">
                About Us
              </a>
            </li>
            <li className="navItem">
              <NavLink to="/AppDev" exact className="navLink">
                Services
              </NavLink>
            </li>
            <li className="navItem">
              <a href="#skills" exact className="navLink">
                Technologies{" "}
              </a>
            </li>
            <li className="navItem">
              <a href="#testimonials" className="navLink">
                Testimonials
              </a>
            </li>
            <li className="navItem">
              <NavLink to="/contactus" exact className="navLink">
                Contact Us
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/blog" exact className="navLink">
                Blog
              </NavLink>
            </li>
          </ul>
          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
