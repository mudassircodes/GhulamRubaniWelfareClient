import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CausesSingle from "../CausesOne/CausesSingle";

const CausesPage = () => {
  const [causes, setCauses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCauses = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/donation-blog/all`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch causes data");
        }
        const data = await response.json();
        setCauses(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCauses();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Or a loader component
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className="causes-one causes-page">
      <Container>
        <Row>
          {causes.map((cause) => (
            <Col xl={4} lg={6} md={6} key={cause._id}>
              <CausesSingle causePage cause={cause} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CausesPage;
