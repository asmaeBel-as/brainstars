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
              <p>
                Beautiful testimonials recorded by our most faithful clients,
                that we are so thankful for!{" "}
              </p>
            </div>
            <div className="videooCard">
              {" "}
              <div data-aos="fade-left" className="cardVideo">
                <video
                  src={video1}
                  controls
                 
                  
                 
                ></video>
              </div>
              <div data-aos="fade-left" className="cardVideo">
                <video
                  src={video}
                  controls="controls"
                  
                  
                  type="video/mp4"
                ></video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card