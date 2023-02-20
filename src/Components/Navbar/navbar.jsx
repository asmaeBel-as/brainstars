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
import { FiMail } from "react-icons/fi";
import {
  Instagram,
  Twitter,
} from "react-bootstrap-icons";
const Navbar = () => {
  
  function buttonColor(props) {
   document.getElementById("item").style.backgroundColor = "#242D49";
  }
  
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
          <ul className="header-links pull-left">
            <li>
              <a href="">
                <i>
                  <FiMail />
                </i>
              </a>
            </li>
            <span className="info">
              <a href=""> info@brainstartechnologies.com</a>
             
            </span>
          </ul>
          <ul className="header-links pull-right">
            <li>
              <a href="https://www.facebook.com/brainstartech">
                <i>
                  <FaFacebook />
                </i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/brain-star-technologies/">
                <i>
                  <FaLinkedin />
                </i>
              </a>
            </li>
            <li>
              <a href="https://wa.me/+917986324471">
                <i>
                  <FaWhatsapp />
                </i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/BrainStarTech">
                <i>
                  <Twitter />
                </i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/brainstartechnologies">
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
              <NavLink
                to={{ pathname: "/", hash: "#aboutus" }}
                exact
                className="navLink"
              >
                About Us
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/services" exact className="navLink">
                Services
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink
                to={{ pathname: "/", hash: "#technologies" }}
                exact
                className="navLink"
              >
                Technologies{" "}
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink
                to={{ pathname: "/", hash: "#testimonials" }}
                exact
                className="navLink"
              >
                Testimonials
              </NavLink>
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
