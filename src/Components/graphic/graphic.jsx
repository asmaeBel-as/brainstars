import React from "react";
import img from "../../Assets/graphicd.png";
import Back from '../common/back'
import Heading from "../common/Heading";
import flutter from "../../Assets/adobe.png";
import react from "../../Assets/sketch.png";
import php from "../../Assets/in.png";
import html from "../../Assets/ae.png";
import css from "../../Assets/figma.jpeg";
import pixlr from "../../Assets/pixlr.jpeg";
import gravit from "../../Assets/gravit.jpeg";
import canva from "../../Assets/canva.png";
import procreate from "../../Assets/procreate.jpeg";
import affinity from "../../Assets/affinity.jpeg";
import './graphic.css'
import { ChevronBarRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Graphic = () => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

     const featured = [
       {
         cover: flutter,
         name: "Photoshop",
        //  total: "122 Property",
       },
       {
         cover: html,
         name: "After Effects",
        //  total: "155 Property",
       },
       {
         cover: css,
         name: "Figma",
        //  total: "300 Property",
       },
       {
         cover: react,
         name: "Sketch",
        // total: "80 Property",
       },
       {
         cover: php,
         name: "In Design",
        //  total: "80 Property",
       },
       {
         cover: pixlr,
         name: "Pixlr",
        //  total: "80 Property",
       },
       {
         cover: gravit,
         name: "Gravit Designer",
        //  total: "80 Property",
       },
       {
         cover: canva,
         name: "Canva",
        //  total: "80 Property",
       },
       {
         cover: affinity,
         name: "Affinity Photo",
        //  total: "80 Property",
       },
       {
         cover: procreate,
         name: "Procreate",
        //  total: "80 Property",
       },
     ];
  return (
    <>
      <section className="about">
        <Back name="Graphic Design" title="What We Give?" cover={img} />
        <div className="container flex mtop">
          <div className="left row">
            <Heading
              title="Graphic Design "
              subtitle="Why Graphic Design Important ?"
            />

            <p>
              Graphic design has several advantages for organizations when
              applied well. It may help increase your marketing and advertising
              effort by providing excellent visual communication. It can assist
              in informing, educating, or persuading your target audience, as
              well as converting them into customers. It may help to promote
              your brand, so select the best graphic design services in USA
              wisely.
            </p>
            <p>
              Many of the world's biggest corporations, SMEs, and technological
              competitors choose Brainstartechnology as their partner of choice.
              Through custom software development, product design, QA, and
              consulting services, we help businesses increase their value. You
              may prototype, test, and validate your ideas using our product
              design service.
            </p>
          </div>
          <div className="swing">
            {" "}
            <div className="right row">
              <img src={img} alt="" style={{ width: "400rem" }} />
            </div>
          </div>
        </div>
      </section>

      <div className="featured container">
        <div className="content grid5 mtop">
          {featured.map((items, index) => (
            <div className="box" key={index}>
              <img src={items.cover} alt="" />
              <h4>{items.name}</h4>
              <label>{items.total}</label>
            </div>
          ))}
        </div>
      </div>
      <div class="Bbanner">
        <div class="banner-text">
          <h1 className="h1">NEED AN AWESOME DESIGN?</h1>
          <h3 className="h3">
            We'RE HERE TO HELP<span class="call-to-action__dot">.</span>
          </h3>
          <h6 className="h6">
            {" "}
            <div class="mt-40">
              <Link to={"/contactus"} onClick={scrollToTop}>
                <a href="" class="button btn-lg btn-color btn-icon">
                  <span>Get In Touch</span>
                  <i>
                    {" "}
                    <ChevronBarRight />
                  </i>
                </a>
              </Link>
            </div>
          </h6>
        </div>
      </div>
    </>
  );
};
export default Graphic;
