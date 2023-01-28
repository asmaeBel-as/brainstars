import React from "react";
import img from "../../Assets/graphicd.png";
import Back from '../common/back'
import Heading from "../common/Heading";
import flutter from "../../Assets/adobe.png";
import react from "../../Assets/sketch.png";
import php from "../../Assets/in.png";
import html from "../../Assets/ae.png";
import css from "../../Assets/figma.jpeg";
import './graphic.css'

const Graphic = () => {

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
          <div className="right row">
            <img src={img} alt="" style={{ width: "400rem" }} />
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
    </>
  );
};
export default Graphic;
