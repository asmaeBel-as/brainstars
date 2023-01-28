import React from "react";
import mohit from "../../Assets/Mohit.jpg";
import img from "../../Assets/scot.jpg";
import uiux from "../../Assets/uiux.png";
import phone from "../../Assets/mobile.svg";
import web from "../../Assets/devweb.jpg";
import graphic from "../../Assets/graphicd.png";
import seo from "../../Assets/seo.jpg";
import digital from "../../Assets/digital.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaAward } from "react-icons/fa";
import Back from "../common/back";
import services from "../../Assets/services.jpeg";

import './Appdev.css'
const Appdev = () => {
  return (
    <section className="more" id="more">
      <Back name="Services" title="Services -All Services" cover={img} />

      <div className="sContainer service__container">
        <div className="ourServices">
          <div className="servicesImage">
            <img src={services} alt="" />
          </div>
        </div>
        <div className="ourServices__content">
          <div className="s__cards">
            <article className="s__card">
              <FaAward className="s_icon" />
              <h5>experience</h5>
              <small>3+ years Working</small>
            </article>
            <article className="s__card">
              <FaAward className="s_icon" />
              <h5>experience</h5>
              <small>3+ years Working</small>
            </article>
            <article className="s__card">
              <FaAward className="s_icon" />
              <h5>experience</h5>
              <small>3+ years Working</small>
            </article>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
            numquam iusto exercitationem libero maxime? Obcaecati dolores
            voluptates autem at tempore. Enim reiciendis veniam sit assumenda
            ipsam expedita maiores animi dolores?
          </p>
        </div>
      </div>
      <div className="Ccards">
        <div className="Ccard card1">
          <div className="Ccontainer">
            <img src={phone} alt="las vegas" />
          </div>
          <div className="details">
            <h3>Mobile Development</h3>
            <p>
              Mobile App Development offers a unique opportunity to reach a big
              number of potential customers
            </p>
          </div>
        </div>
        <div className="Ccard card2">
          <div class="Ccontainer">
            <img src={web} alt="New York" />
          </div>
          <div className="details">
            <h3>Website Development</h3>
            <p>
              Website creation is one of the strategies to assure your company's
              success by telling people about the products.
            </p>
          </div>
        </div>
        <div className="Ccard card3">
          <div className="Ccontainer">
            <img src={uiux} alt="Singapore" />
          </div>
          <div className="details">
            <h3>UI/UX Design</h3>
            <p>
              Build the product you need on time with an experienced team that
              uses a clear and effective design process.
            </p>
          </div>
        </div>
        <div className="Ccard card1">
          <div className="Ccontainer">
            <img src={graphic} alt="Singapore" />
          </div>
          <div className="details">
            <h3>Graphic Design</h3>
            <p>
              Graphic design is essential for developing a professional brand
              and optimising your marketing efforts across all media.
            </p>
          </div>
        </div>
        <div className="Ccard card2">
          <div className="Ccontainer">
            <img src={seo} alt="Singapore" />
          </div>
          <div className="details">
            <h3>SEO</h3>
            <p>
              SEO is the technique of using search engine results to increase
              the number and quality of traffic to a website.
            </p>
          </div>
        </div>
        <div className="Ccard card3">
          <div className="Ccontainer">
            <img src={digital} alt="Singapore" />
          </div>
          <div className="details">
            <h3>Digital Marketing</h3>
            <p>
              Our goal is to increase your sales. And one of the most important
              instruments for doing so is digital marketing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appdev;
