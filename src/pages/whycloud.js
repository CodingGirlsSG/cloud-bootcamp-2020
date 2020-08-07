import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollAnimation from 'react-animate-on-scroll';


const WhyCloud = () => (
  <>
    <Container fluid className="px-0 py-5" id="whycloudbg">
      <Row className="mx-5 d-flex flex-row-reverse">
        <ScrollAnimation animateIn="fadeInUp" className="d-flex flex-column">
          <Col sm={12} md={6} className="p-4 align-self-end bg-grey shadow">
            <h2 className="mb-4">Why Cloud?</h2>
            <p>
              Covid-19 has hit the job market hard. Unemployment rates are at a 10-year high and several fresh grads are facing difficulties in finding employment. Nonetheless, the pandemic has accelerated digitalisation across all facets of our lives and opened up new opportunities in the tech industry.
            </p>
            <p>
              In this new normal, there will be increasing demand for cloud computing practitioners. While companies are willing to pay for cloud talents, there remains a shortage of skills in Singapore’s labour market.
            </p>
            <p>
              CodingGirls believes that we can fill that talent gap by helping to reskill and upskill women with cloud computing skills. In addition to that, this would help to improve their employability and increase women's representation in tech.
            </p>
          </Col>
        </ScrollAnimation>
      </Row>
    </Container>
  </>
)

export default WhyCloud;