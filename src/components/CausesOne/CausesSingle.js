import Link from "next/link";
import React, { useState } from "react";
import { Image } from "react-bootstrap";
import ReactVisibilitySensor from "react-visibility-sensor";

const CausesSingle = ({ cause = {}, causePage }) => {
  const [countStart, setCountStart] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountStart(true);
    }
  };

  const { images, category, title, description, _id } = cause;
  const raised = cause.raisedAmount || 0;
  const goal = cause.donationGoal || 1; // Prevent division by 0

  const getProgressPercentage = () => Math.round((raised / goal) * 100);

  const percent = getProgressPercentage();

  // Inline styles for truncating the title and managing layout
  const titleStyle = {
    whiteSpace: "nowrap", // Prevents wrapping
    overflow: "hidden", // Hides overflow text
    textOverflow: "ellipsis", // Adds ellipsis (...) when the text overflows
    fontSize: "1.25rem",
    marginBottom: "15px",
    maxWidth: "100%", // Ensures it fits within the container
    display: "block", // Makes sure it's block level so that overflow is controlled
  };

  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    minHeight: "300px", // Set a minimum height for consistency
    userSelect: "none",
  };

  return (
    <div className={causePage ? "" : "my-4"}>
      <div style={cardStyle} className="causes-one__single animated fadeInLeft">
        <div className="causes-one__img">
          <div className="causes-one__img-box">
            <Image src={images.profilePic.url} alt={title || "Cause Image"} />
            <Link href={`/causes-details/${_id}`}>
              <a aria-label={`More about ${title}`}>
                <i className="fa fa-plus"></i>
              </a>
            </Link>
          </div>
          <div className="causes-one__category">
            <span>{category}</span>
          </div>
        </div>
        <div className="causes-one__content">
          <h3 className="causes-one__title">
            <Link href={`/causes-details/${_id}`}>
              <a style={titleStyle}>{title}</a>
            </Link>
          </h3>
          <p className="causes-one__text">{description}</p>
        </div>
        {/* <div className="causes-one__progress">
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
                <div className="count-text" style={{ opacity: 1 }}>
                  {countStart ? percent : 0}%
                </div>
              </div>
            </div>
          </ReactVisibilitySensor>
          <div className="causes-one__goals">
            <p>
              <span>${raised}</span> Raised
            </p>
            <p>
              <span>${goal}</span> Goal
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CausesSingle;
