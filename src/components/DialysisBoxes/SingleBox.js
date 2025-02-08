import bg from "@/images/resources/1.png";
import React from "react";
import { Col } from "react-bootstrap";

const SingleBox = ({ singleBox }) => {
  const { icon, title, className, description, href, buttonText } = singleBox;

  return (
    <Col xl={4}>
      <div className={`three-boxes__single ${className}`}>
        <div
          className="three-boxes__single-bg"
          style={{ backgroundImage: `url(${bg.src})` }}
        ></div>
        <div className="three-boxes__content">
          <div className="three-boxes__icon">
            <span className={icon}></span>
          </div>
          <div className="three-boxes__text-box">
            <h2>{title}</h2>
            <p className="three-boxes__text">
              {description ||
                "We are trusted by our clients and have a reputation for the best services in the field."}
            </p>
            <a href={href} className="three-boxes__btn">
              <i className="fa fa-heart"></i>
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingleBox;
