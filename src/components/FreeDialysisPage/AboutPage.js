import aboutProgress from "@/data/aboutProgress";
import image from "@/images/resources/Dialysis.png";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import AboutProgressbar from "./AboutProgressbar";

const AboutPage = () => {
  return (
    <section className="about-page">
      <Container>
        <Row>
          <Col xl={6}>
            <div className="about-page__left">
              <div className="about-page__img">
                <Image src={image.src} alt="" />
              </div>
            </div>
          </Col>
          <Col xl={6}>
            <div className="about-page__right">
              <div className="section-title text-left">
                <span className="section-title__tagline">Our Inroductions</span>
                <h2 className="section-title__title">
                  We believe that we can save more lifes
                </h2>
              </div>
              <p className="about-page__right-text">
                At Ghulam Rabbani Qureshi Welfare Foundation, we believe that
                access to life-saving dialysis care should never be limited by
                financial constraints. Our mission is to provide free dialysis
                treatments to individuals who are suffering from kidney disease
                and cannot afford the cost of treatment. Through donations,
                partnerships, and community support, we ensure that every
                patient receives the care they need, regardless of their ability
                to pay. and community support, we ensure that every patient
                receives the care they need, regardless of their ability to pay.
                regardless of their ability to pay. and community support, we
                ensure that every patient receives the care they need,
                regardless of their ability to pay.
              </p>
              <h3 className="about-page__right-title">
                Ghulam Rabbani Qureshi Welfare Foundation
              </h3>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutPage;
