import React from "react";
import img from "../../Assets/digital.png";
import Back from '../common/back'
import Heading from "../common/Heading";
import flutter from "../../Assets/email.png";
import react from "../../Assets/pay.png";
import php from "../../Assets/content.jpg";
import html from "../../Assets/scm.jpg";
import css from "../../Assets/viral.png";
import './digital.css'

const Digital = () => {

     const featured = [
       {
         cover: flutter,
         name: "Email Marketing",
        //  total: "122 Property",
       },
       {
         cover: html,
         name: "Social Media",
        //  total: "155 Property",
       },
       {
         cover: css,
         name: "Viral Marketing",
        //  total: "300 Property",
       },
       {
         cover: react,
         name: "Pay Per Click",
        // total: "80 Property",
       },
       {
         cover: php,
         name: "Content Marketing",
        //  total: "80 Property",
       },
     ];
  return (
    <>
      <section className="about">
        <Back name="DIGITAL MARKETING" title="What We Give?" cover={img} />
        <div className="container flex mtop">
          <div className="left row">
            <Heading title="DIGITAL MARKETING" subtitle="What We Provide? ?" />

            <p>
              Brain star technologies provide a wide range of digital marketing
              services (DMS), including SEO, SMM, and SEM, to help businesses
              become more productive. Brain star Technologies, one of the
              leading digital marketing agency in USA, can help your company
              grow in a way that is suited for it by providing solutions to
              improve its online presence.
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
export default Digital;
