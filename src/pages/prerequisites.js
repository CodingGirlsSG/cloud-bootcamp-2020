import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ScrollAnimation from 'react-animate-on-scroll';


const Prerequisites = () => (
  <>
    <Container fluid className="px-0 py-5 prerequisites" id="prerequisites">
      <Row className="py-5 justify-content-center mx-5">
        <Col sm={8} md={4} lg={4} className="d-flex p-2" style={{ minWidth: '250px' }}>
          <ScrollAnimation animateIn="fadeInUp" className="d-flex">
            <Card className="flex-fill shadow d-flex" >
              <Card.Body>
                <Card.Title as="h3">Who is <br />this for?</Card.Title>
                <Card.Text as="div" >
                  <ul>
                    <li>Developers who want to build applications on the cloud</li>
                    <li>Final-year computing students who want to gain an edge  in job seeking</li>
                    <li>Anyone who wants to get hands-on and broad introduction to Google Cloud</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </ScrollAnimation>
        </Col>
        <Col sm={8} md={4} lg={4} className="d-flex p-2" style={{ minWidth: '250px' }}>
          <ScrollAnimation animateIn="fadeInUp" className="d-flex">
            <Card className="flex-fill shadow d-flex">
              <Card.Body>
                <Card.Title as="h3">Programme<br />Prerequisites</Card.Title>
                <Card.Text as="div">
                  <ul>
                    <li>Perseverance, self-learning capability, and interest in technology</li>
                    <li>Complete the one-week introductory course, <b><i>or</i></b> pass our quiz</li>
                    <li>Comfortable with command line</li>
                    <li>Ability to commit to the full 8 week programme, with an estimated 12-16 hours needed per week</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </ScrollAnimation>
        </Col>
      </Row>
    </Container>
  </>
)

export default Prerequisites