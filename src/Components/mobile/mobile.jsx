import React from "react";
import img from '../../Assets/mobile.svg';
import Back from '../common/back'
import Heading from "../common/Heading";
import flutter from "../../Assets/images.jpeg";
import react from "../../Assets/images (1).jpeg";
import kotlin from "../../Assets/download (1).jpeg";
import java from "../../Assets/java2.png";
import swift from "../../Assets/swift-og.png";
import javascript from "../../Assets/javascript.png";
import ruby from "../../Assets/ruby.jpeg";
import csharp from "../../Assets/csharp.png";
import cpp from "../../Assets/cpp.png";
import rust from "../../Assets/rust.jpeg";
import './mobile.css'
import { Link } from "react-router-dom";
import { ChevronBarRight } from "react-bootstrap-icons";

const Mobile = () => {
   const scrollToTop = () => {
     window.scrollTo(0, 0);
   };

     const featured = [
       {
         cover: flutter,
         name: "Flutter Frameworks",
         total: "50+ Developed",
       },
       {
         cover: java,
         name: "Java Frameworks",
         total: "25+ Delivered",
       },
       {
         cover: swift,
         name: "Swift Frameworks",
         total: "30+ IOS",
       },
       {
         cover: react,
         name: "React Native",
         total: "20+ App ",
       },
       {
         cover: kotlin,
         name: "Kotlin Frameworks",
         total: "10+ Apps",
       },
       {
         cover: javascript,
         name: "JavaScript",
         total: "30+ Apps",
       },
       {
         cover: ruby,
         name: "Ruby",
         total: "10+ Apps",
       },
       {
         cover: cpp,
         name: "C++",
         total: "26+ Apps",
       },
       {
         cover: csharp,
         name: "Csharp",
         total: "20+ Apps",
       },
       {
         cover: rust,
         name: "Rust Frameworks",
         total: "15+ Apps",
       },
     ];
  return (
    <>
      <section className="about">
        <Back name="App Development" title="What We Give?" cover={img} />
        <div className="container flex mtop">
          <div className="left row">
            <Heading
              title="APP DEVELOPMENT"
              subtitle="Why App Development Important ?"
            />

            <p>
              One of the most significant advantages of mobile apps for
              businesses is this. It aids in the establishment of a direct
              marketing channel between firms and their customers, allowing for
              immediate and effective connection. Here is your solution for
              searching for the best app development company in USA. and then
              you may install and send push and in-app alerts to as many clients
              as you want with your mobile app.
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
              <img src={img} alt="" style={{ width: "300rem" }} />
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
          <h1 className="h1">NEED AN AWESOME MOBILE APP?</h1>
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
export default Mobile;  
