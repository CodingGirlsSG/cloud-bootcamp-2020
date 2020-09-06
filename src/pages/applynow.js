import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Applynow = () => (
  <Container fluid className="px-0 py-5 bg-white" id="applynow">
    <h2 className="mb-5 text-center">How to apply</h2>
    <Row className="m-3 justify-content-center">
      <Col sm={12} md={6} className="d-flex flex-column align-self-center text-center">


        <p className="mb-5">
          Participants will need to fill in a registration form <i>and</i> demonstrate their basic technical knowledge by either passing a registration quiz or showing proof of completion of the Google Cloud introduction course.
        </p>

        <Row className="justify-content-center">
          <Button variant="primary" size="lg" className="px-4" href="https://form.typeform.com/to/N2BXqgkb" data-mode="popup" target="_blank" rel="noreferrer">
            <b>Apply now!</b>
          </Button>

        </Row>
      </Col>
    </Row>
  </Container>
)

export default Applynow;