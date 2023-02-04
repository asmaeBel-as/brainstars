import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animation";
import "./testimonial.css";
import lady from "../../Assets/humble.png";
import mike from "../../Assets/humble.png";
import man from "../../Assets/humble.png";
import shape from "../../Assets/footer.png";
import { FaQuoteRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { GiTalk } from "react-icons/gi";

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(
    fadeInScreenHandler
  );

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <div className="program__headste">
        <span>{<GiTalk />}</span>
        <h2>Testimonials</h2>
      </div>
      <section className="testimonial-section fade-in" id="testimonials">
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <FaQuoteLeft className="quote" />
                      Brain Star Technologies Solutions has done a great job
                      taking our company’s idea and developing a website as per
                      our niche specifications. The team is technically strong
                      and creative. I will not hesitate to recommend them.
                      <FaQuoteRight className="quote" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <FaStar className="stars" />
                      </li>
                      <li>
                        <FaStar className="stars" />
                      </li>
                      <li>
                        <FaStar className="stars" />
                      </li>
                      <li>
                        <FaStar className="stars" />
                      </li>
                      <li>
                        <FaStarHalfAlt className="stars" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={lady} alt="no internet connection"></img>
                    <h5>Daisy</h5>
                    <p></p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <FaQuoteLeft className="quote" />
                      Brain Star Technologies has a solid technology team and on
                      time delivery. Very happy to be associated with them Great
                      work!!! The team was solid, efficient and knowledgeable.
                      They did an amazing job on my very challenging app. I will
                      be using them again. Thank you for doing such a great job!
                      <FaQuoteRight className="quote" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <FaStar className="stars" />
                      </li>
                      <li>
                        <FaStar className="stars" />
                      </li>
                      <li>
                        <FaStar className="stars" />
                      </li>
                      <li>
                        <FaStar className="stars" />
                      </li>
                      <li>
                        <FaStarHalfAlt className="stars" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={mike} alt="no internet connection"></img>
                    <h5>Casi</h5>
                    <p></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <FaQuoteLeft className="quote" />
                      Excellent work. He was available to get to the task
                      immediately and kept in constant communication as he
                      worked on the issue. Overall, he completes the task so it
                      was a very good experience. Thanks.
                      <FaQuoteRight className="quote" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <FaStar className="stars" />
                      </li>
                      <li>
                        <FaStar className="stars" />
                      </li>
                      <li>
                        <FaStar className="stars" />
                      </li>
                      <li>
                        <FaStar className="stars" />
                      </li>
                      <li>
                        <FaStarHalfAlt className="stars" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={lady} alt="no internet connection"></img>
                    <h5>Suzanne</h5>
                    <p></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <FaQuoteLeft className="quote" />
                      Brain Star Technologies Solutions has done a great job
                      taking our company’s idea and developing a website as per
                      our niche specifications. The team is technically strong
                      and creative. I will not hesitate to recommend them.
                      <FaQuoteRight className="quote" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <FaStar className="stars" />
                      </li>
                      <li>
                        <FaStar className="stars" />
                      </li>
                      <li>
                        <FaStar className="stars" />
                      </li>{" "}
                      <li>
                        <FaStar className="stars" />
                      </li>
                      <li>
                        <FaStarHalfAlt className="stars" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={man} alt="no internet connection"></img>
                    <h5>Faiza</h5>
                    <p></p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
        <div className="bcontainer">
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
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </div>
  );
}
