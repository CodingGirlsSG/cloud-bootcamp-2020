import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import Correct from "../images/correct.svg";

const Cell = ({ content }) => (
  <Col md={12} lg={6}>
    <Row className="mb-3">
      <Col xs={2} className="mr-2"><img src={Correct} alt="tick icon" /></Col>
      <Col xs={9}>{content}</Col>
    </Row>
  </Col>
)

Cell.defaultProps = {
  content: ""
}

Cell.propTypes = {
  content: PropTypes.string
}

const Summary = () => (
  <>
    <Container fluid className="px-0 py-5" id="about">
      <Row className="m-3 p-5 justify-content-center">
        <Col sm={12} md={8} className="d-flex flex-column align-self-center">
          <h2 className="text-center" >A guided learning programme,<br />developed with Google</h2>
          <p className="mb-5 mt-5">Code With Cloud is a 8-week guided online learning programme developed by Codinggirls in partnership with Google. Learn about cloud technologies in peer groups of five, under the mentorship of practising cloud professionals. At the end of the programme, participants will be equipped with the technical skills and knowledge needed to take (and ace!) the <a target="_blank" rel="noreferrer" href="https://cloud.google.com/certification/cloud-engineer">Google Associate Cloud Engineer</a> certification - we’ll even reimburse your fees if you pass!</p>
          <Row className="mb-4">
            <Cell content="Self-paced learning with sponsored access to Coursera and Qwiklabs" />
            <Cell content="Guidance and mentorship by industry professionals" />
            <Cell content="Peer support and networking opportunities" />
            <Cell content="Mock interviews with Google Cloud Practitioners" />
          </Row>
        </Col>
      </Row>
    </Container>
  </>

)

export default Summary;