import React from "react";
import { GiTechnoHeart } from "react-icons/gi";
import "./Founders.css";
import sumit from "../../Assets/sumit.jpg";
import mohit from "../../Assets/Mohit.jpg";
import kelley from "../../Assets/kelley.jpeg";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { Container, Row, Col, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Upwork from "../../Assets/Upwork.png";
import Fiverr from "../../Assets/fiverr.png";
import Amazon from "../../Assets/amazon.png";
import Shopify from "../../Assets/Shopify.png";
import Facebook from "../../Assets/Facebook.png";
import Animations from "../../utilities/Animation";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      dialogClassName={"founderModal"}
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Mohit Kumar
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="mohit" id="mohit">
          {/* left side */}
          <Container>
            <Row className="align-items-center">
              <Col size={12} md={6}>
                <div className="imageContainer">
                  <img src={mohit} alt="" />
                </div>
              </Col>
              <Col size={12} md={6}>
                <spane data-aos="fade-up-left" data-aos-duration="1100">
                  Mr. Mohit Kumar is the Chief Financial Officer of the company.
                  He holds an LLB degree and comes with deep knowledge of
                  tracking cash flow and financial planning as well as analyzing
                  the company’s financial strengths and weaknesses and proposing
                  corrective actions. He is also responsible for the planning,
                  implementation, managing, and running of all the finance
                  activities of a company, including business planning,
                  budgeting, forecasting, and negotiations. Also, he does
                  internal and external financial reporting, stewardship of a
                  company’s assets, and ownership of cash management. He started
                  the organization back in 2016 with Mr. Sumit Kumar and has
                  been an asset to the organization since then. He is a
                  motivated person with a high degree of professionalism,
                  confidentiality, and integrity. He’s worked really hard over
                  the years and progressed steadily, revealing his passion and
                  enthusiasm for his position at the organization. These 5 years
                  as a CFO, his performance has been commendable. Mr. Kumar is
                  an effective, independent professional who is always the first
                  to volunteer to take an additional task, and often puts in
                  work hours equivalent to full-time staff.
                </spane>
              </Col>
            </Row>
          </Container>
          {/* dark Mode */}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="close-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function Sumit(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName={"founderModal"}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Sumit Kumar
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="Sumit" id="Sumit">
          {/* left side */}
          <Container>
            <Row className="align-items-center">
              <Col size={12} md={6}>
                <div className="imageContainer">
                  <img src={sumit} alt="" />
                </div>
              </Col>
              <Col size={12} md={6}>
                <spane data-aos="fade-up-left" data-aos-duration="1100">
                  Mr. Sumit Kumar is the Chief Executive Officer of the company.
                  He holds a master degree in Computer Applications and comes
                  with deep knowledge of software development solutions that
                  includes Enterprise and SaaS Applications, Website Design and
                  Development, Product Engineering, Content Management System,
                  Customer Relationship Management, Travel Portal and E-commerce
                  solutions. He started the organization back in 2016 and has
                  been amusing the industry since then. His unmatched strengths
                  are understanding clients’ needs and improving business ROI as
                  a whole. For 5 years as a CEO, his performance has been
                  exceptional. His management style is extremely accessible and
                  he is a very hands-on administrator. He is fearless in his
                  business approach and his instincts are impeccable. Mr. Kumar
                  has turned the little company into an industry powerhouse over
                  the years and he managed to do it while still making friends
                  in the industry.
                </spane>
              </Col>
            </Row>
          </Container>
          {/* dark Mode */}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="close-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function Kelley(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName={"founderModal"}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          KELLEY PHELAN
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="mohit" id="mohit">
          {/* left side */}
          <Container>
            <Row className="align-items-center">
              <Col size={12} md={6}>
                <div className="imageContainer">
                  <img src={kelley} alt="" />
                </div>
              </Col>
              <Col size={12} md={6}>
                <spane data-aos="fade-up-left" data-aos-duration="1100">
                  I went to Fashion Careers College in San Diego, CA. Honor
                  student with perfect attendance. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Dolorum vitae eligendi fugit
                  atque numquam maxime minus consequuntur in quia? Quaerat
                  minima autem pariatur, magnam officia recusandae quas
                  laudantium ea perspiciatis?
                </spane>
              </Col>
            </Row>
          </Container>
          {/* dark Mode */}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="close-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const Founders = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [sumitShow, setSumitShow] = React.useState(false);
  const [KelleyShow, setKelleyShow] = React.useState(false);
  return (
    <>
      {/* <section className="founders padding">
        <div className="container">
          <div
            className="content grid3 ltop"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="box">
              <img src={sumit} alt="" />
              
            </div>
            <div className="box">
              <img src={mohit} alt="" />
              
            </div>
            <div className="box">
              <img src={kelley} alt="" />
              
            </div>
          </div>
        </div>
      </section> */}
      <section className="founders">
        <div className="cardFounder">
          <div className="image__container">
            <img src={sumit} alt="" />
          </div>
          <div className="founder_content">
            <div className="details">
              <h2>
                Sumit Kumar <br />
                <span>CEO</span>{" "}
              </h2>

              <div className="data"></div>
              <div className="actions__button">
                <button onClick={() => setSumitShow(true)}>More</button>
                <button>
                  <a href="https://www.linkedin.com/in/sumitkumar2610/">
                    {" "}
                    Contact
                  </a>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="cardFounder">
          <div className="image__container">
            <img src={mohit} alt="" />
          </div>
          <div className="founder_content">
            <div className="details">
              <h2>
                MOHIT KUMAR <br />
                <span>CEO</span>{" "}
              </h2>

              <div className="data"></div>
              <div className="actions__button">
                <button onClick={() => setModalShow(true)}>More</button>
                <button>
                  <a href="https://www.linkedin.com/in/mohit-thakur-b32a5b51/">
                    {" "}
                    Contact
                  </a>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="cardFounder">
          <div className="image__container">
            <img src={kelley} alt="" />
          </div>
          <div className="founder_content">
            <div className="details">
              <h2>
                KELLEY PHELAN <br />
                <span>CEO</span>{" "}
              </h2>

              <div className="data"></div>
              <div className="actions__button">
                <button onClick={() => setKelleyShow(true)}>More</button>
                <button>
                  {" "}
                  <a href="https://www.linkedin.com/in/kelley-phelan-268083234/">
                    Contact
                  </a>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <Sumit show={sumitShow} onHide={() => setSumitShow(false)} />
        <Kelley show={KelleyShow} onHide={() => setKelleyShow(false)} />
      </section>
    </>
  );
};

export default Founders;
