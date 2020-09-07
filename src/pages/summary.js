import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import LaptopIcon from "../images/laptop-icon.png"
import RocketIcon from "../images/rocket-icon.png"
import ChatBubbleIcon from "../images/chat-bubble-icon.png"
import HandshakeIcon from "../images/handshake-icon.png"

const Cell = ({ icon, content }) => (
  <Col md={12} lg={6} className="mb-3 d-flex flex-row align-items-center">
    <img src={icon} alt={`${icon}`} className="mr-3" height="40px" /><span>{content}</span>
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
    <Container fluid className="px-0 py-5 bg-white" id="about">
      <Row className="m-3 p-5 justify-content-center">
        <Col sm={12} md={8} className="d-flex flex-column align-self-center">
          <h2 className="text-center" >A guided learning programme</h2>
          <p className="mt-5">Code With Cloud is an 8-week guided online learning programme. Learn about cloud technologies in peer groups of five, under the mentorship of practising cloud professionals. At the end of the programme, participants will be equipped with the technical skills and knowledge needed to take (and ace!) the <a target="_blank" rel="noreferrer" href="https://cloud.google.com/certification/cloud-engineer">Google Associate Cloud Engineer</a> certification - we’ll even reimburse your fees if you pass!</p>
          <p className="mb-5">This programme will be completely virtual and is fully sponsored by CodingGirls. As such, only 50 female participants will be selected for this bootcamp and all hopeful applicants would need to complete a technical task as part of their application.</p>
          <Row className="mb-4">
            <Cell icon={LaptopIcon} content="Self-paced learning with sponsored access to Coursera and Qwiklabs" />
            <Cell icon={HandshakeIcon} content="Guidance and mentorship by industry professionals" />
            <Cell icon={ChatBubbleIcon} content="Peer support and networking opportunities" />
            <Cell icon={RocketIcon} content="Mock interviews with Google Cloud Practitioners" />
          </Row>
        </Col>
      </Row>
    </Container>
  </>

)

export default Summary;