import image from "@/images/resources/Dialysis.png";
import qrCode from "@/images/resources/qrCode.jpg"; // Import your QR code image
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const HelpingOne = () => {
  return (
    <section className="helping-one">
      <Container>
        <div className="section-title text-center">
          <span className="section-title__tagline">Donate Us</span>
          <h2 className="section-title__title">
            Find a Cause Worth Supporting <br /> Make an Impact Today
          </h2>
        </div>
        <Row>
          <Col xl={6} lg={6}>
            <div className="helping-one__left">
              <h3 className="helping-one__title">
                Together, We Bring Hope and Care
              </h3>
              <p className="helping-one__text">
                Your generous support provides healthcare, education, and
                empowerment to those in need. Let’s build a healthier, skilled,
                and brighter future together.
              </p>
              <ul className="helping-one__left-list list-unstyled">
                <li>
                  <div className="helping-one__left-icon">
                    <i className="fas fa-arrow-circle-right"></i>
                  </div>
                  <div className="helping-one__left-text">
                    <p>
                      Empowering communities through free healthcare and
                      technical education
                    </p>
                  </div>
                </li>
                <li>
                  <div className="helping-one__left-icon">
                    <i className="fas fa-arrow-circle-right"></i>
                  </div>
                  <div className="helping-one__left-text">
                    <p>
                      Ensuring transparent use of your donations for impactful
                      change
                    </p>
                  </div>
                </li>
                <li>
                  <div className="helping-one__left-icon">
                    <i className="fas fa-arrow-circle-right"></i>
                  </div>
                  <div className="helping-one__left-text">
                    <p>
                      Supporting vulnerable individuals, women, and families
                      through life-changing initiatives
                    </p>
                  </div>
                </li>
              </ul>

              {/* QR Code Section */}
              <div className="qr-code-box text-center mt-4">
                <Image
                  src={qrCode.src}
                  alt="QR Code"
                  fluid
                  className="qr-code-image"
                  style={{ maxWidth: "200px", margin: "auto" }} // Adjust size
                />
                <p className="mt-2 font-weight-bold">Pay with Zelle</p>
                <p>GRQ Welfare Foundation Inc</p>
              </div>
            </div>
          </Col>
          <Col xl={6} lg={6}>
            <div className="helping-one__right">
              <form action="" className="helping-one__right-form">
                <Row>
                  <Col lg={12}>
                    <div className="helping-one__right-input-box">
                      <input
                        type="text"
                        name="amount"
                        placeholder="Enter Donation Amount"
                      />
                      <div className="helping-one__right-dolar-icon">
                        <span>$</span>
                      </div>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <input type="text" name="name" placeholder="Your Name" />
                  </Col>
                  <Col lg={6}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                    />
                  </Col>
                  <Col lg={12}>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                    />
                  </Col>
                  <Col lg={12}>
                    <textarea
                      name="message"
                      placeholder="Write Message"
                    ></textarea>
                  </Col>
                  <Col lg={12}>
                    <button
                      type="submit"
                      className="thm-btn helping-one__right-btn"
                    >
                      <i className="fas fa-arrow-circle-right"></i>Continue Now
                    </button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HelpingOne;
