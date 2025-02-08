import bg from "@/images/resources/1.png";
import Link from "next/link";
import React from "react";
import { Col } from "react-bootstrap";

const SingleBox = ({ singleBox, imgNo }) => {
  const { icon, title, className, desc } = singleBox;

  return (
    <Col xl={4}>
      <div className={`three-boxes__single ${className}`}>
        <div
          className="three-boxes__single-bg"
          style={{
            backgroundImage: `url(${
              require(`@/images/resources/${imgNo + 1}.png`).default.src
            })`,
          }}
        ></div>
        <div className="three-boxes__content">
          <div className="three-boxes__icon">
            <span className={icon}></span>
          </div>
          <div className="three-boxes__text-box">
            <h2>{title}</h2>
            <p className="three-boxes__text">{desc}</p>
            <Link href="/donation">
              <a className="three-boxes__btn">
                <i className="fa fa-heart"></i>Donate{" "}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingleBox;
