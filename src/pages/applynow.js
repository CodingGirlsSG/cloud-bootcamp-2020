import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProcessflowHorizontal from "../images/process-flow-horizontal.jpg";
import ProcessflowVertical from "../images/process-flow-vertical.jpg";

const Applynow = () => (
  <Container fluid className="px-0 py-5 bg-white" id="applynow">
    <h2 className="mb-5 text-center">How to apply</h2>
    <Row className="m-3 justify-content-center align-items-center d-flex flex-column">
      <Col sm={12} md={6} className="d-flex flex-column align-self-center text-center">
        <p>
          Participants will need to fill in a registration form <i>and</i> demonstrate their basic technical knowledge by either passing a registration quiz or showing proof of completion of the Google Cloud introduction course.
        </p>
      </Col>
      {/* for large screens */}
      <img src={ProcessflowHorizontal} width="850px" alt="process flow chart" className="d-none d-md-block mt-3 mb-5" />

      {/* for small screens */}
      <img src={ProcessflowVertical} width="350px" alt="process flow chart" className="d-block d-md-none mt-3 mb-5" />

      <Button variant="primary" size="lg" className="px-4" href="https://form.typeform.com/to/N2BXqgkb" data-mode="popup" target="_blank" rel="noreferrer">
        <b>Apply now!</b>
      </Button>

    </Row>
  </Container>
)

export default Applynow;