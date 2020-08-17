import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Correct from "../images/correct.svg";

const Mentors = () => (
  <Container fluid className="px-0 py-5" id="mentorsbg">
    <Row className="m-3 justify-content-center">

      <Col sm={12} md={8} className="d-flex flex-column align-self-center text-center">
        <h2 className="mb-4">Mentors</h2>
        <p className="mb-4">
          On hand to guide you along every week's learning include cloud professionals from Google.
        </p>
        <Row className="m-5">
          <Col sm={12} md={4} className="d-flex flex-column align-self-center text-center mb-4">
            <img src={Correct} height="150px" alt="tick icon" className="mb-3" />
            <span>NAME NAMENAME (HYPERLINK TO LINKEDIN)</span>
            <span>JOB TITLE</span>
            <span>COMPANY</span>
          </Col>
          <Col sm={12} md={4} className="d-flex flex-column align-self-center text-center mb-4">
            <img src={Correct} height="150px" alt="tick icon" className="mb-3" />
            <span>NAME NAMENAME (HYPERLINK TO LINKEDIN)</span>
            <span>JOB TITLE</span>
            <span>COMPANY</span>
          </Col>
          <Col sm={12} md={4} className="d-flex flex-column align-self-center text-center mb-4">
            <img src={Correct} height="150px" alt="tick icon" className="mb-3" />
            <span>NAME NAMENAME (HYPERLINK TO LINKEDIN)</span>
            <span>JOB TITLE</span>
            <span>COMPANY</span>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
)

export default Mentors;