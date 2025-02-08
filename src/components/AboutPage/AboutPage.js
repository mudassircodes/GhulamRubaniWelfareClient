import aboutProgress from "@/data/aboutProgress";
import ReactPlayer from "react-player/youtube"; // Import react-player for YouTube
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AboutProgressbar from "./AboutProgressbar";

const AboutPage = () => {
  return (
    <section className="about-page">
      <Container>
        <Row>
          <Col xl={6}>
            <div className="about-page__left">
              <div
                className="about-page__video"
                style={{
                  position: "relative",
                  width: "100%",
                  paddingTop: "90%", // Increased to 90% for a taller video
                  overflow: "hidden",
                  backgroundColor: "#000", // Optional: adds a background color to prevent empty space
                }}
              >
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=dh2wpsVTaLw" // Replace with your YouTube video URL
                  width="100%" // Increased width to eliminate empty space
                  height="100%" // Ensure the height is 100% of the container
                  className="about-page__video-player"
                  style={{
                    position: "absolute",
                    top: 0,
                    // Shifting left to center the video better
                    width: "150%",
                    height: "150%",
                  }}
                  playing={false} // Start with the video paused
                  controls={true} // Enable video controls
                />
              </div>
            </div>
          </Col>
          <Col xl={6}>
            <div className="about-page__right">
              <div className="section-title text-left">
                <span className="section-title__tagline">
                  Our Introductions
                </span>
                <h2 className="section-title__title">
                  We believe that we can save more lives
                </h2>
              </div>
              <p className="about-page__right-text">
                Ghulam Rabbani Welfare Foundation (GRQ) is a dedicated
                non-profit organization committed to transforming lives through
                accessible healthcare, education, and skill development. Founded
                with a mission to uplift underprivileged communities, GRQ
                focuses on providing free kidney treatments, clean drinking
                water, vocational training for women, computer education, and
                affordable diagnostic services. Driven by compassion and
                transparency, GRQ aims to empower individuals and families,
                fostering sustainable change and brighter futures for all.
              </p>
              <h3 className="about-page__right-title">
                Together, we strive to build a world where no one is left
                behind.
              </h3>
              {/* <div className="about-five__progress-wrap">
                {aboutProgress.map((progress) => (
                  <AboutProgressbar key={progress.id} progress={progress} />
                ))}
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutPage;
