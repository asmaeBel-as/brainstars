import React from 'react'
import img1 from "../../Assets/logo-carousel-01.png";
import img2 from "../../Assets/logo-carousel-02.png";
import img3 from "../../Assets/logo-carousel-03.png";
import img4 from "../../Assets/logo-carousel-04.png";
import img5 from "../../Assets/logo-carousel-05.png";
import img6 from "../../Assets/logo-carousel-06.png";
import { Col, Container, Row } from 'react-bootstrap'
import Carousel from "react-multi-carousel";
import './companies.css'
import { FaConnectdevelop } from 'react-icons/fa';


const companies = () => {
const CustomDot = ({ onClick, ...rest }) => {
  const {
    onMove,
    index,
    active,
    carouselState: { currentSlide, deviceType },
  } = rest;
  
  return (
    <div className='dots'> <button
      className={active ? "actives" : "inactives"}
      onClick={() => onClick()}
    >
    
    </button></div>
   
  );
};
    
     const responsive = {
       superLargeDesktop: {
         // the naming can be any, depends on you.
         breakpoint: { max: 4000, min: 3000 },
         items: 5,
       },
       desktop: {
         breakpoint: { max: 3000, min: 1024 },
         items: 4,
       },
       tablet: {
         breakpoint: { max: 1024, min: 464 },
         items: 2,
       },
       mobile: {
         breakpoint: { max: 540, min: 0 },
         items: 1,
       },
     };
    return (
      <>
        <h4 class="separatorC">
          <i>
            <FaConnectdevelop />{" "}
          </i>
        </h4>
        <div class="sectionS">
          <Container>
            <Row>
              <Col xl={12}>
                <Col md={12}>
                  <Carousel
                    itemClass="carousel-item-padding-40-px"
                    responsive={responsive}
                    infinite={true}
                    className="logo-carousel "
                    showDots
                    arrows={false}
                    // customDot={<CustomDot />}
                    // renderDotsOutside
                  >
                    <div className="carousel-item">
                      <a
                        href="http://acmelogos.com/"
                        target="_blank"
                        title="http://acmelogos.com/"
                      >
                        <img src={img1} alt="" />
                      </a>
                    </div>

                    <div className="carousel-item">
                      <a
                        href="http://acmelogos.com/"
                        target="_blank"
                        title="http://acmelogos.com/"
                      >
                        <img src={img2} alt="" />
                      </a>
                    </div>

                    <div className="carousel-item">
                      <a
                        href="http://acmelogos.com/"
                        target="_blank"
                        title="http://acmelogos.com/"
                      >
                        <img src={img3} alt="" />
                      </a>
                    </div>

                    <div class="carousel-item">
                      <a
                        href="http://acmelogos.com/"
                        target="_blank"
                        title="http://acmelogos.com/"
                      >
                        <img src={img4} alt="" />
                      </a>
                    </div>

                    <div className="carousel-item">
                      <a
                        href="http://acmelogos.com/"
                        target="_blank"
                        title="http://acmelogos.com/"
                      >
                        <img src={img5} alt="" />
                      </a>
                    </div>

                    <div className="carousel-item">
                      <a
                        href="http://acmelogos.com/"
                        target="_blank"
                        title="http://acmelogos.com/"
                      >
                        <img src={img6} alt="" />
                      </a>
                    </div>
                  </Carousel>
                </Col>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
}

export default companies