import React from "react";
import img from "../../Assets/digital.png";
import Back from "../common/back";
import Heading from "../common/Heading";
import flutter from "../../Assets/email.png";
import react from "../../Assets/pay.png";
import seo from "../../Assets/seo.png";
import php from "../../Assets/content.jpg";
import affi from "../../Assets/affi.png";
import Analysis from "../../Assets/download (2).jpeg";
import research from "../../Assets/download (3).jpeg";
import internet from "../../Assets/internet.jpeg";
import html from "../../Assets/scm.jpg";
import unsplash from "../../Assets/unsplash.jpg";
import css from "../../Assets/viral.png";
import "./digital.css";
import { ChevronBarRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Digital = () => {
      const scrollToTop = () => {
        window.scrollTo(0, 0);
      };
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
    {
      cover: seo,
      name: "Seo Marketing",
      //  total: "80 Property",
    },
    {
      cover: research,
      name: "Research Marketing",
      //  total: "80 Property",
    },
    {
      cover: Analysis,
      name: "Analysis Marketing",
      //  total: "80 Property",
    },
    {
      cover: internet,
      name: "Internet Marketing",
      //  total: "80 Property",
    },
    {
      cover: affi,
      name: "Affilitate Marketing",
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
          <h1 className="h1">NEED AN AWESOME BRANDING?</h1>
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
export default Digital;
