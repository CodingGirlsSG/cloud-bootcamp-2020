import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Agilitics from "../images/aligitics logo.png";
import Ajit from "../images/profile-Ajit Kumar Amit.png";


const Trainer = () => (
  <Container fluid className="px-0 py-5 bg-grey">
    <h2 className="mb-5 text-center">Training Partners</h2>
    <Row className="mx-5 px-5 justify-content-center">
      <Col sm={12} md={8} >
        <Row className="justify-content-center align-items-center  justify-content-center">
          <Col sm={12} md={6} className=" justify-content-center" >
            <a href="https://agilitics.sg/" target="_blank" rel="noreferrer"><img src={Agilitics} alt="Agilitics logo" width="200px" className="mb-4" /></a>
          </Col>
          <Col sm={12} md={6} className="d-flex flex-column text-center">
            <img src={Ajit} alt="Ajit Kumar Amit's profile" className="mb-3 avatar align-self-center" />
            <a href="https://www.linkedin.com/in/akamit/" target="_blank" rel="noreferrer">Ajit Kumar Amit</a>
            <span>Managing Partner at Agilitics</span>
          </Col>

        </Row>

      </Col >
    </Row >

  </Container >
)

export default Trainer;