import React from "react";
import Link from "next/link";
import { Col, Container, Image, Row } from "react-bootstrap";
import { SwiperSlide } from "swiper/react";

const SingleSlide = ({ slide = {} }) => {
  const { image, subTitle, title } = slide;

  return (
    <SwiperSlide>
      <div
        className="image-layer"
        style={{ backgroundImage: `url(${image.url})` }}
      ></div>
      <div className="image-layer-overlay"></div>
      <Container>
        <Row>
          <Col lg={8}>
            <div className="main-slider__content">
              <p>{subTitle}</p>
              <h2>
                {title} <br />
              </h2>
              <Link href="/about">
                <a className="thm-btn">
                  <i className="fas fa-arrow-circle-right"></i>Learn More
                </a>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </SwiperSlide>
  );
};

export default SingleSlide;
