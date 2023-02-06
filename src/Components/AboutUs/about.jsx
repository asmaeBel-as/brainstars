import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScrollService";
import "./about.css";
import vector1 from "../../Assets/Vector.png";
import vector2 from "../../Assets/Vector0.png";
import company from "../../Assets/company.png";
import professional from "../../Assets/professonal.png";
import quality from "../../Assets/quality.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { RiQuestionFill } from "react-icons/ri";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import Upwork from "../../Assets/itsu.jpeg";
import secure from "../../Assets/secure.png";
import cloud from "../../Assets/images.png";
import consult from "../../Assets/images (2).jpeg";
import backup from "../../Assets/backup.jpeg";
import Animations from '../../utilities/Animation'
import ScrollService from "../../utilities/ScrollService";
import { Link } from "react-router-dom";
const about = (props) => {

   let fadeInScreenHandler = (screen) => {
     if (screen.fadeInScreen !== props.id) return;
     Animations.animations.fadeInScreen(props.id);
   };

  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(
    fadeInScreenHandler
  );
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []); 
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const transition = { duration: 2, type: "spring" };
  return (
    <section className="about-us-container fade-in ">
      <div className="program__heada">
        <span data-aos="fade-up" data-aos-duration="2000">
          {<BsFillJournalBookmarkFill />}
        </span>
        <h2 data-aos="fade-up" data-aos-duration="2100">
          About Us
        </h2>
      </div>

      <div className="works" id="works">
        {/* left side */}
        <div className="w-left">
          <div className="awesome">
            {/* dark Mode */}
            <span data-aos="fade-up-left" data-aos-duration="1000">
              Hello, We Are
            </span>
            <span data-aos="fade-up-left" data-aos-duration="1000">
              Brain Star Technologies
            </span>
            <spane data-aos="fade-up-left" data-aos-duration="1100">
              Brain Star technologies deliver a wide range of software
              development solutions that includes <br /> Digital marketing
              services, affordable SEO services, Social Media Marketing, Website
              Design
              <br />
              and Development, Email Outreach, Content Writing, and
              Optimization, we do it all. <br /> We assure you to get more
              leads. more sales. Increased revenue. <br /> In short with Brain
              star Technologies you may establish your digital <br /> presence
              today and explore your market potential as we are one <br />
              of the best web design company in USA. We thrive to be the best{" "}
              <br />
              digital marketing company in USA and
              <br />
              are a full-service digital marketing agency that helps your
              <br />
              company expand into new markets, attract more employees, and
              <br />
              achieve incredible results in your field. So, don’t think anymore
              <br />
              and call us today!
              <br />
            </spane>

            <Link
              onClick={scrollToTop}
              to={"./contactus"}
              className="btn s-button"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Contact Us{" "}
            </Link>

            <div
              className="blur s-blur1"
              style={{ background: "#ABF1FF94" }}
            ></div>
          </div>

          {/* right side */}
        </div>
        <div
          className="w-right"
          data-aos="fade-up-right"
          data-aos-duration="1000"
        >
          <motion.div
            initial={{ rotate: 45 }}
            whileInView={{ rotate: 0 }}
            viewport={{ margin: "-40px" }}
            transition={{ duration: 3.5, type: "spring" }}
            className="w-mainCircle"
          >
            <div className="w-secCircle">
              <img src={Upwork} alt="" />
             
            </div>
            <div className="w-secCircle">
              <img src={cloud} alt="" />
             
            </div>
            <div className="w-secCircle">
              <img src={backup} alt="" />
             
            </div>{" "}
            <div className="w-secCircle">
              <img src={consult} alt="" />
             
            </div>
            <div className="w-secCircle">
              <img src={secure} alt="" />
              
            </div>
          </motion.div>
          {/* background Circles */}
          <div
            data-aos="fade-up-right"
            data-aos-duration="1000"
            className="w-backCircle blueCircle"
          ></div>
          <div
            data-aos="fade-up-right"
            data-aos-duration="1000"
            className="w-backCircle yellowCircle"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default  about;
