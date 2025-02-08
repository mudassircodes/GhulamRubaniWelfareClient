import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CausesDetailsLeft from "./CausesDetailsLeft";
import CausesDetailsRight from "./CausesDetailsRight";

const CausesDetailsPage = ({ id }) => {
  const [cause, setCause] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      // Call the Express API to fetch the cause details using fetch
      fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/donation-blog/single/${id}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setCause(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching cause details:", error);
          setError(error);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching cause details. Please try again later.</div>;
  }

  if (!cause) {
    return <div>No cause found.</div>;
  }

  return (
    <section className="causes-details">
      <Container>
        <Row>
          <Col xl={8} lg={7}>
            <CausesDetailsLeft cause={cause} />
          </Col>
          {/* <Col xl={4} lg={5}>
            <CausesDetailsRight cause={cause} />
          </Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default CausesDetailsPage;
