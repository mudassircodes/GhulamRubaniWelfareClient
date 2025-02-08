import causesData from "@/data/causesData";
import dynamic from "next/dynamic";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CausesSingle from "./CausesSingle";
import { useEffect, useState } from "react";

const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });

const settings = {
  lazyload: true,
  nav: true,
  mouseDrag: true,
  items: 1,
  autoplay: true,
  autoHeight: true,
  controls: false,
  navPosition: "bottom",
  loop: false,
  gutter: 0,
  responsive: {
    768: {
      items: 2,
      gutter: 20,
    },
    992: {
      items: 3,
      gutter: 30,
    },
  },
};

const CausesOne = () => {
  const [causesData, setCausesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    // Fetch data from your Express route
    const fetchCauses = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}/api/v1/donation-blog/all`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch causes data");
        }
        const data = await response.json();
        console.log(data);
        setCausesData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCauses();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Or a loading spinner
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="causes-one">
      <Container>
        <div className="section-title text-center">
          <span className="section-title__tagline">Latest Causes</span>
          <h2 className="section-title__title">
            Find the Popular Cause <br />
            and Donate Them
          </h2>
        </div>
        <Row>
          <Col xl={12}>
            <div className="causes-one__carousel">
              <TinySlider settings={settings}>
                {causesData.map((cause) => (
                  <CausesSingle cause={cause} key={cause._id} />
                ))}
              </TinySlider>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CausesOne;
