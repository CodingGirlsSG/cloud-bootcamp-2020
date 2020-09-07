import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Agilitics from "../images/aligitics logo.png";


const Trainer = () => (
  <Container fluid className="px-0 py-5 bg-grey">
    <h2 className="mb-5 text-center">Training Partners</h2>
    <Row className="mx-5 px-5 justify-content-center">
      <Col sm={12} md={8} >
        <Row className="justify-content-center align-items-center  justify-content-center">
          <a href="https://agilitics.sg/" target="_blank" rel="noreferrer"><img src={Agilitics} alt="Agilitics logo" width="200px" className="mb-4" /></a>
        </Row>

      </Col >
    </Row >

  </Container >
)

export default Trainer;