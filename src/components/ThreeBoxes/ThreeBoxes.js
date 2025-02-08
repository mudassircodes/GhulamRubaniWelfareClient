import threeBoxes from "@/data/threeBoxes";
import React from "react";
import { Row } from "react-bootstrap";
import SingleBox from "./SingleBox";

const ThreeBoxes = () => {
  return (
    <section className="three-boxes">
      <div className="container-box">
        <Row>
          {threeBoxes.map((singleBox, index) => (
            <SingleBox key={singleBox.id} singleBox={singleBox} imgNo={index} />
          ))}
        </Row>
      </div>
    </section>
  );
};

export default ThreeBoxes;
