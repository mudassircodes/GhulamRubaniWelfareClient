import causesDetails from "@/data/causesDetails";
import { social } from "@/data/NavItems";
import download from "@/images/resources/causes-details-download-icon.png";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import CommentForm from "../CommentForm/CommentForm";
import SingleComment from "./SingleComment";
import Link from "next/link";

const { comments, summaryList, texts, summaryText } = causesDetails;

const CausesDetailsLeft = ({ cause }) => {
  const { category, title, description, donationGoal, raisedAmount, images } =
    cause;

  console.log("cause", cause);

  const raisedNumber = raisedAmount;
  const goalNumber = donationGoal;
  const percent = Math.round((raisedNumber / goalNumber) * 100) + "%";

  console.log("raised", raisedAmount);
  return (
    <div className="causes-details__left-bar">
      <div className="causes-details__img">
        <div className="causes-details__img-box">
          <Image src={images.highRes.url} alt="" />
          <div className="causes-details__category">
            <span>{category}</span>
          </div>
        </div>
        <div className="causes-details__progress">
          <div className="bar">
            <div
              className="bar-inner count-bar"
              style={{ width: percent, opacity: 1 }}
              data-percent={percent}
            >
              <div style={{ opacity: 1 }} className="count-text">
                {percent}
              </div>
            </div>
          </div>
          <div className="causes-details__goals">
            <p>
              <span>${raisedNumber}</span> Raised
            </p>
            <p>
              <span>${goalNumber}</span> Goal
            </p>
          </div>
        </div>
      </div>
      <div className="causes-details__text-box">
        <h3>{title}</h3>
        {description}
      </div>
      <div className="causes-details__images-box">
        <Row>
          <Col xl={6} lg={6}>
            <div className="causes-details__images-single">
              <Image src={images.smallLeft.url} alt="" />
            </div>
          </Col>
          <Col xl={6} lg={6}>
            <div className="causes-details__images-single">
              <Image src={images.smallRight.url} alt="" />
            </div>
          </Col>
        </Row>
      </div>
      <div className="causes-details__summary">
        {/* <div className="causes-details__summary-text">
          <p>{summaryText}</p>
        </div> */}
        {/* <div className="causes-details__summary-list">
          <ul className="causes-details__summary-list-box list-unstyled">
            {summaryList.map((item, index) => (
              <li key={index}>
                <div className="icon">
                  <i className="fas fa-arrow-circle-right"></i>
                </div>
                <div className="text">
                  <p>{item}</p>
                </div>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
      <div className="causes-details__share">
        <div className="causes-details__share-btn-box">
          <Link href="/donation">
            <a className="causes-details__share-btn thm-btn">
              <i className="fas fa-arrow-circle-right"></i>Donate Us Now
            </a>
          </Link>
        </div>
        <div className="causes-details__share-social">
          {social.map(({ icon, link }, index) => (
            <a href={link} key={index}>
              <i className={`fab ${icon}`}></i>
            </a>
          ))}
        </div>
      </div>
      {/* <div className="causes-details__download">
        <div className="causes-details__left">
          <div className="icon">
            <Image src={download.src} alt="" />
          </div>
          <div className="text">
            <h4>Our Presentation</h4>
          </div>
        </div>
        <div className="causes-details__download-btn-box">
          <a href="#" className="causes-details__download-btn thm-btn">
            <i className="fas fa-arrow-circle-right"></i>Download Now
          </a>
        </div>
      </div>
      {/* <div className="comment-one">
        <h3 className="comment-one__title">Comments</h3>
        {comments.map((comment) => (
          <SingleComment key={comment.id} comment={comment} />
        ))}
      </div>
      <CommentForm /> */}
    </div>
  );
};

export default CausesDetailsLeft;
