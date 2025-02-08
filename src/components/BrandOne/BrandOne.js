import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });

const settings = {
  lazyload: true,
  nav: false, // Disable navigation arrows (optional)
  mouseDrag: true, // Enable mouse drag (optional)
  items: 1, // Number of items per slide
  autoplay: true, // Enable autoplay for automatic scrolling
  autoplayHoverPause: false, // Pause autoplay when hovered (optional)
  loop: true,
  autoplaySpeed: 500,
  autoHeight: true,
  controls: false,
  gutter: 0,
  responsive: {
    576: {
      items: 2,
      gutter: 10,
    },
    768: {
      items: 3,
      gutter: 15,
    },
    992: {
      items: 4,
      gutter: 15,
    },
    1200: {
      items: 5,
      gutter: 20,
    },
  },
};

const BrandOne = ({ brandClass = "" }) => {
  const [brandImages, setBrandImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBrandImages = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/logo`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch brand images");
        }
        const data = await response.json();
        setBrandImages(data); // Assuming API returns image objects
        setLoading(false);
      } catch (err) {
        console.error("Error fetching brand images:", err);
        setError("Failed to load brand images");
        setLoading(false);
      }
    };

    fetchBrandImages();
  }, []);

  if (loading) {
    return <div>Loading brand images...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className={`brand-one ${brandClass}`}>
      <Container>
        <Row>
          <Col xl={12}>
            <TinySlider settings={settings} className="brand-one__carousel">
              {brandImages.map((image, index) => (
                <div key={index}>
                  <div
                    style={{ userSelect: "none" }}
                    className="brand-one__single"
                  >
                    <div className="brand-one__img">
                      <Image src={image.url} alt={`Brand Image ${index + 1}`} />
                    </div>
                  </div>
                </div>
              ))}
            </TinySlider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BrandOne;
