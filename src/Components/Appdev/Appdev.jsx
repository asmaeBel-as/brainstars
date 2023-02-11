import React from "react";
import mohit from "../../Assets/Mohit.jpg";
import img from "../../Assets/scot.jpg";
import uiux from "../../Assets/uiux.png";
import phone from "../../Assets/phone.jpg";
import web from "../../Assets/devweb.jpg";
import graphic from "../../Assets/graphicd.png";
import seo from "../../Assets/seo.jpg";
import digital from "../../Assets/digital.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaAward } from "react-icons/fa";
import Back from "../common/back";
import services from "../../Assets/services.jpeg";
import "./Appdev.css";
const Appdev = () => {
  return (
    <section className="more" id="more">
      {/* <Back name="Services" title="Services -All Services" cover={img} /> */}
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
              <h5>Clients</h5>
              <small>300+ different clients</small>
            </article>
            <article className="s__card">
              <FaAward className="s_icon" />
              <h5>Projects</h5>
              <small>600+ completed projects</small>
            </article>
            <article className="s__card">
              <FaAward className="s_icon" />
              <h5>Location</h5>
              <small>25+ worldwide locations</small>
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
        {" "}
        <div class="container">
          <div class="container-cards">
            <div class="container-cards-surface container-cards-front">
              <div class="container-cards-front-image">
                <img src={phone} alt="" />
              </div>
              <div class="container-cards-front-content">
                <h2>Mobile Dev</h2>
                <p>
                  {" "}
                  Mobile App Development offers a unique opportunity to reach a
                  big number of potential customers.
                </p>
              </div>
              <div class="container-cards-front-label">Mobile</div>
              <div class="container-cards-front-button"></div>
            </div>
            <div class="container-cards-surface container-cards-back">
              <div class="container-cards-back-content"></div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="container-cards">
            <div class="container-cards-surface container-cards-front">
              <div class="container-cards-front-image">
                <img src={web} alt="" />
              </div>
              <div class="container-cards-front-content">
                <h2>Web Dev</h2>
                <p>
                  {" "}
                  Website creation is one of the strategies to assure your
                  company's success by telling people about the products.
                </p>
              </div>
              <div class="container-cards-front-label">Web</div>
              <div class="container-cards-front-button"></div>
            </div>
            <div class="container-cards-surface container-cards-back1">
              <div class="container-cards-back-content"></div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="container-cards">
            <div class="container-cards-surface container-cards-front">
              <div class="container-cards-front-image">
                <img src={uiux} alt="" />
              </div>
              <div class="container-cards-front-content">
                <h2>UI/UX Design</h2>
                <p>
                  {" "}
                  Build the product you need on time with an experienced team
                  that uses a clear and effective design process.
                </p>
              </div>
              <div class="container-cards-front-label">Design</div>
              <div class="container-cards-front-button"></div>
            </div>
            <div class="container-cards-surface container-cards-back2">
              <div class="container-cards-back-content"></div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="container-cards">
            <div class="container-cards-surface container-cards-front">
              <div class="container-cards-front-image">
                <img src={graphic} alt="" />
              </div>
              <div class="container-cards-front-content">
                <h2>Graphic Design</h2>
                <p>
                  {" "}
                  Graphic design is essential for developing a professional
                  brand and optimising your marketing efforts across all media.
                </p>
              </div>
              <div class="container-cards-front-label">Graphic</div>
              <div class="container-cards-front-button"></div>
            </div>
            <div class="container-cards-surface container-cards-back3">
              <div class="container-cards-back-content"></div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="container-cards">
            <div class="container-cards-surface container-cards-front">
              <div class="container-cards-front-image">
                <img src={seo} alt="" />
              </div>
              <div class="container-cards-front-content">
                <h2>SEO</h2>
                <p>
                  {" "}
                  SEO is the technique of using search engine results to
                  increase the number and quality of traffic to a website.
                </p>
              </div>
              <div class="container-cards-front-label">SEO</div>
              <div class="container-cards-front-button"></div>
            </div>
            <div class="container-cards-surface container-cards-back4">
              <div class="container-cards-back-content"></div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="container-cards">
            <div class="container-cards-surface container-cards-front">
              <div class="container-cards-front-image">
                <img src={digital} alt="" />
              </div>
              <div class="container-cards-front-content">
                <h2>Digital Marketing</h2>
                <p>
                  {" "}
                  Our goal is to increase your sales. And one of the most
                  important instruments for doing so is digital marketing.
                </p>
              </div>
              <div class="container-cards-front-label">Marketing</div>
              <div class="container-cards-front-button"></div>
            </div>
            <div class="container-cards-surface container-cards-back5">
              <div class="container-cards-back-content"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Appdev;
