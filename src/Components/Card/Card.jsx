import React from 'react'
import './card.css'
import video from "../../Assets/Client Review about us.mp4";
import video1 from "../../Assets/videoplayback.mp4";


const Card = () => {
  return (
    <section className="card">
      <div className="secContainer container">
        <div className="videoCard container">
          <div className=" cardContent grid">
            <div data-aos="fade-right" className="cardText">
              <h2>What our Wonderful clients say about us!</h2>
             
            </div>
            <div className="videooCard">
              {" "}
              <div data-aos="fade-left" className="cardVideo">
                <video src={video1} controls></video>
              </div>
              <div data-aos="fade-left" className="cardVideo">
                <video src={video} controls="controls" type="video/mp4"></video>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bubbleContainer">
        <div className="bubbles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>

          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
}

export default Card