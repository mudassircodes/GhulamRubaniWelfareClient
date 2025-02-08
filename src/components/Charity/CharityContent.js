import Link from "next/link";
import React, { useState } from "react";
import { Col } from "react-bootstrap";
import ReactVisibilitySensor from "react-visibility-sensor";

const countBar = [
  {
    id: 1,
    title: "Charity",
    percent: 99,
  },
  {
    id: 2,
    title: "Donations",
    percent: 99,
  },
];

const CharityContent = () => {
  const [countStart, setCountStart] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountStart(true);
    }
  };

  return (
    <Col xl={6} lg={6}>
      <div className="welcome-one__right">
        <div className="section-title text-left">
          <span className="section-title__tagline">
            Welcome to Ghulam Rabbani Qureshi Welfare Foundation
          </span>
          <h2 className="section-title__title">
            Helping each other can make the world a better place
          </h2>
        </div>
        <p className="welcome-one__right-text">
          Ghulam Rabbani Qureshi Welfare Foundation Seek out world changers and
          difference makers around the globe, and equip them to fulfill their
          unique purpose.
        </p>
        <div className="welcome-one__our-mission-and-story">
          <div className="welcome-one__mission-and-story-single">
            <h3>
              <i className="fas fa-arrow-circle-right"></i>Our Mission
            </h3>
            <p className="welcome-one__our-mission-and-story-text">
              Transforming lives through Providing Free Kidney Treatment and
              Dialysis While Educating Communities with Technical Skills
            </p>
          </div>
          <div className="welcome-one__mission-and-story-single">
            <h3>
              <i className="fas fa-arrow-circle-right"></i>Our Story
            </h3>
            <p className="welcome-one__our-mission-and-story-text">
              Originally focused on providing technical education to those in
              need, our mission expanded after my father's passing from kidney
              failure. In his memory, we now also offer free dialysis services
              to support the underprivileged.
            </p>
          </div>
        </div>
        {/* <div className="welcome-one__progress">
          {countBar.map(({ id, title, percent }) => (
            <div className="welcome-one__progress-single" key={id}>
              <h4 className="welcome-one__progress-title">{title}</h4>
              <ReactVisibilitySensor
                offset={{ top: 10 }}
                delayedCall={true}
                onChange={onVisibilityChange}
              >
                <div className="bar">
                  <div
                    className="bar-inner count-bar"
                    data-percent={`${countStart ? percent : 0}%`}
                    style={{
                      width: `${countStart ? percent : 0}%`,
                      opacity: 1,
                    }}
                  >
                    <div
                      className="count-text"
                      style={{ opacity: countStart ? 1 : 0 }}
                    >
                      {countStart ? percent : 0}%
                    </div>
                  </div>
                </div>
              </ReactVisibilitySensor>
            </div>
          ))}
        </div> */}
        <Link href="/about">
          <a className="welcome-one__btn thm-btn">
            <i className="fas fa-arrow-circle-right"></i>Learn More
          </a>
        </Link>
      </div>
    </Col>
  );
};

export default CharityContent;
