import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import contactImg from "../../Assets/contact-img.svg";
import "./contactUs.css";
import "bootstrap/dist/css/bootstrap.min.css";
import shape from "../../Assets/footer.png";

export const contactUs = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    skype: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {};

  return (
    <>
      <section className="contact" id="connect">
        <Container>
          <Row className="align-items-center">
            <Col size={12} md={6}>
              <img
                className={"animate__animated animate__zoomIn"}
                src={contactImg}
                alt="Contact Us"
              />
            </Col>
            <Col size={12} md={6}>
              <div className={"animate__animated animate__fadeIn"}>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="text"
                        value={formDetails.firstName}
                        placeholder="First Name"
                        onChange={(e) =>
                          onFormUpdate("firstName", e.target.value)
                        }
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="text"
                        value={formDetails.lasttName}
                        placeholder="Last Name"
                        onChange={(e) =>
                          onFormUpdate("lastName", e.target.value)
                        }
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="email"
                        value={formDetails.email}
                        placeholder="Email Address"
                        onChange={(e) => onFormUpdate("email", e.target.value)}
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="tel"
                        value={formDetails.phone}
                        placeholder="Phone No."
                        onChange={(e) => onFormUpdate("phone", e.target.value)}
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="text"
                        value={formDetails.skype}
                        placeholder="Skype Id"
                        onChange={(e) => onFormUpdate("skype", e.target.value)}
                      />
                    </Col>

                    <Col size={12} sm={6} className="px-1">
                      <select
                        class="form-select form-select-lg mb-3  px-1"
                        aria-label=".form-select-lg example"
                      >
                        <option selected>Select your budget</option>
                        <option value="1">Less Than $10k</option>
                        <option value="2">Between $10k And $50k</option>
                        <option value="3">More than $50k</option>
                      </select>
                    </Col>
                    <Col size={12} sm={12} className="px-1">
                      <input className="form-control" type="file" />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea
                        rows="6"
                        value={formDetails.message}
                        placeholder="Product Description"
                        onChange={(e) =>
                          onFormUpdate("message", e.target.value)
                        }
                      ></textarea>
                      <button type="submit">
                        <span>{buttonText}</span>
                      </button>
                    </Col>
                    {status.message && (
                      <Col>
                        <p
                          className={
                            status.success === false ? "danger" : "success"
                          }
                        >
                          {status.message}
                        </p>
                      </Col>
                    )}
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </>
  );
};

export default contactUs;
