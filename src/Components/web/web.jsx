import React from "react";
import img from '../../Assets/devweb.jpg';
import Back from '../common/back'
import Heading from "../common/Heading";
import flutter from "../../Assets/python.png";
import react from "../../Assets/images (1).jpeg";
import php from "../../Assets/download.png";
import html from "../../Assets/html.png";
import css from "../../Assets/css.jpeg";
import './web.css'

const Mobile = () => {

     const featured = [
       {
         cover: flutter,
         name: "Python",
        //  total: "122 Property",
       },
       {
         cover: html,
         name: "HTML5",
        //  total: "155 Property",
       },
       {
         cover: css,
         name: "CSS 3",
        //  total: "300 Property",
       },
       {
         cover: react,
         name: "ReactJS",
        // total: "80 Property",
       },
       {
         cover: php,
         name: "PHP",
        //  total: "80 Property",
       },
     ];
  return (
    <>
      <section className="about">
        <Back
          name="WEB DEVELOPMENT"
        title="What We Give?"
          cover={img}
        />
        <div className="container flex mtop">
          <div className="left row">
            <Heading title="WEB DEVELOPMENT" subtitle="What We Provide?" />

            <p>
              The task of generating a positive first impression on a client
              falls on a website. As a result, your website should digitally
              represent the best aspects of your company. Brainstar Technologies
              is one of the greatest web development company in USA,
              specializing in virtual branding and high-tech website building.
              We create a website that is adaptable to any design. Including
              everything from mobile web development and responsive website
              design to custom e-commerce and intranet experiences using the
              most up-to-date and proven web technologies is one of the best web
              development in USA.
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
export default Mobile;
