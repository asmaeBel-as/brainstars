import React from 'react';
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Twitter from '@iconscout/react-unicons/icons/uil-twitter'
import Google from '@iconscout/react-unicons/icons/uil-google'
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import { ImGooglePlus } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import { BsMailbox } from "react-icons/bs";
import  logo  from "../../Assets/logo.png";
import './footer.css'
import { Row,Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className="ffooter">
      <div className="footer" id="footer">
        <div className="waves">
          <div className="wave" id='wave1'></div>
          <div className="wave" id='wave2'></div>
          <div className="wave" id='wave3'></div>
          <div className="wave" id='wave4'></div>
        </div>
        <img src={logo} alt="" style={{width:'300px'}} />
        <ul className="social_icon">
          <li>
            <a href="">
              <BsTwitter />
            </a>
          </li>
          <li>
            <a href="">
              <Facebook />
            </a>
          </li>
          <li>
            <a href="">
              {" "}
              <Insta />
            </a>
          </li>
          <li>
            <a href="">
              {" "}
              <Linkedin />
            </a>
          </li>
          <li>
            <a href="">
              {" "}
              <Google />
            </a>
          </li>
        </ul>
        <ul className="menu">
          <li>
           <Link to={'/'}> <a>Home</a></Link>
          </li>
          <li>
            <a href="#works">About</a>
          </li>
          <li>
           <Link to={"/AppDev"}><a >Services</a></Link> 
          </li>
          <li>
            <a href="">Technologies</a>
          </li>
          <li>
            <a href="">Testimonials</a>
          </li>
          <li>
           <Link to={'/contactus'}> <a>Contact</a></Link>
          </li>
          <li>
            <Link to={'/blog'}><a>Blog</a></Link>
          </li>
        </ul>
        <p>
          © 2023 <strong>Brain Star Technologies</strong>. All Rights Reserved.
        </p>
      </div>
    </section>
  );
}

export default Footer