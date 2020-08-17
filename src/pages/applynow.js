import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"

const Applynow = () => (
  <Container fluid className="px-0 py-5 bg-grey" id="applynow">
    <Row className="m-3 justify-content-center">
      <Col sm={12} md={8} className="d-flex flex-column align-self-center text-center">

        <Row className="my-5 justify-content-center">
          <Button variant="outline-primary" size="lg" className="bg-white"><h2 className="mb-0">Apply Now!</h2></Button>
        </Row>
        <p className="mb-5">
          To ensure that each of the limited slots leads to a meaningful learning experience, <br />participants will need to fill in a registration form and demonstrate their basic technical knowledge by either passing a registration quiz or showing proof of completion of the Google Cloud introduction course.
        </p>
      </Col>
    </Row>
  </Container>
)

export default Applynow;