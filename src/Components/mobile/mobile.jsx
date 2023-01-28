import React from "react";
import img from '../../Assets/mobile.svg';
import Back from '../common/back'
import Heading from "../common/Heading";
import flutter from "../../Assets/images.jpeg";
import react from "../../Assets/images (1).jpeg";
import kotlin from "../../Assets/download (1).jpeg";
import java from "../../Assets/java2.png";
import swift from "../../Assets/swift-og.png";
import './mobile.css'

const Mobile = () => {

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
          <div className="right row">
            <img src={img} alt="" style={{ width: "300rem" }} />
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
